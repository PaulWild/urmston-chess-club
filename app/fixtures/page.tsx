import Link from "next/link";
import React from "react";
import { HiExternalLink } from "react-icons/hi";
import { Container } from "../../components/container";
import styles from "./Fixtures.module.scss";
import Banner from "../../components/banner";
import fixtures from "./fixtures.jpg";

export type LeagueGames = Record<string, Fixture[]>;

export type Fixture = {
  sys: {
    id: string;
  };
  opponent: string;
  awayGame: boolean;
  date: string;
  location: string;
  homeScore?: number;
  awayScore?: number;
  leaguecup: {
    name: string;
  };
};

export default async function Page() {
  const body = JSON.stringify({
    query: `query {
  fixtureCollection {
    items{ 
      sys {
        id
      }
      date, 
      opponent,
      location,
      awayGame,
      leaguecup {
        name
      },
      homeScore,
      awayScore,     
    }
  }
}`,
  });

  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      body,
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        "content-type": "application/json",
      },
      method: "POST",
    }
  ).then((x) => x.json());

  const items: Fixture[] = res.data.fixtureCollection.items;
  items.sort((a, b) => a.leaguecup.name.localeCompare(b.leaguecup.name));

  let leagueGames: LeagueGames = {};
  for (let fixture of items) {
    let group = leagueGames[fixture.leaguecup.name] ?? [];
    group.push(fixture);
    leagueGames[fixture.leaguecup.name] = group;
  }

  return (
    <>
      <Banner imgPath={fixtures} />
      <Container>
        <div className={styles["league-table"]}>
          <table>
            {Object.entries(leagueGames).map(([leagueName, fixtures]) => (
              <React.Fragment key={leagueName}>
                <thead key={leagueName}>
                  <tr className={styles["league-name"]}>
                    <th colSpan={3}>
                      <Link
                        href={`/fixtures/${leagueName.replaceAll(" ", "_")}`}
                      >
                        <h2>
                          <span>{leagueName}</span> <HiExternalLink />
                        </h2>
                      </Link>
                    </th>
                  </tr>
                  <tr>
                    <th scope="rowgroup">Date</th>
                    <th scope="rowgroup">Fixture</th>
                    <th scope="rowgroup">Result</th>
                  </tr>
                </thead>
                {fixtures
                  .sort((a, b) => a.date.localeCompare(b.date))
                  .map((fixture) => (
                    <tbody
                      key={fixture.sys.id}
                      className={styles["league-games"]}
                    >
                      <tr>
                        <td>
                          {new Date(fixture.date)
                            .toISOString()
                            .substring(0, 10)}
                        </td>
                        <td>
                          {fixture.awayGame ? fixture.opponent : "Urmston"} v{" "}
                          {fixture.awayGame ? "Urmston" : fixture.opponent}
                        </td>
                        <td className={styles.center}>{`${
                          fixture.homeScore ?? ""
                        } - ${fixture.awayScore ?? ""}`}</td>
                      </tr>
                    </tbody>
                  ))}
              </React.Fragment>
            ))}
          </table>
        </div>
      </Container>
    </>
  );
}
