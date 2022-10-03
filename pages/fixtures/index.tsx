import React from "react";
import { Container } from "../../components/container";
import Fixture from "../../components/fixture";
import styles from "./Fixtures.module.scss";
import { HiExternalLink } from "react-icons/hi";

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

type LeagueGames = Record<string, Fixture[]>;

type Props = {
  leagueGames: LeagueGames;
};

export const getStaticProps = async (): Promise<{ props: Props }> => {
  const body = JSON.stringify({
    query: `query {
  fixtureCollection (order: date_DESC){
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

  let leagueGames: LeagueGames = {};
  for (let fixture of items) {
    let group = leagueGames[fixture.leaguecup.name] ?? [];
    group.push(fixture);
    leagueGames[fixture.leaguecup.name] = group;
  }

  return {
    props: { leagueGames },
  };
};

const Fixtures = ({ leagueGames }: Props) => {
  return (
    <Container>
      <div className={styles["league-table"]}>
        <table>
          {Object.entries(leagueGames).map(([leagueName, fixtures]) => (
            <React.Fragment key={leagueName}>
              <thead key={leagueName}>
                <tr className={styles["league-name"]}>
                  <th colSpan={5}>
                    <h2>
                      <span>{leagueName}</span> <HiExternalLink />
                    </h2>
                  </th>
                </tr>
                <tr>
                  <th scope="rowgroup">Date</th>
                  <th scope="rowgroup">Fixture</th>
                  <th scope="rowgroup">Location</th>
                  <th scope="rowgroup">Result</th>
                  <th></th>
                </tr>
              </thead>
              {fixtures.map((fixture) => (
                <tbody key={fixture.sys.id} className={styles["league-games"]}>
                  <tr>
                    <td>
                      {new Date(fixture.date).toISOString().substring(0, 10)}
                    </td>
                    <td>
                      {fixture.awayGame ? "Urmston" : fixture.opponent} v{" "}
                      {fixture.awayGame ? fixture.opponent : "Urmston"}
                    </td>
                    <td>{fixture.location}</td>
                    <td>{`${fixture.homeScore ?? ""} - ${
                      fixture.awayScore ?? ""
                    }`}</td>
                    <td>
                      <HiExternalLink />
                    </td>
                  </tr>
                </tbody>
              ))}
            </React.Fragment>
          ))}
        </table>
      </div>
    </Container>
  );
};

export default Fixtures;
