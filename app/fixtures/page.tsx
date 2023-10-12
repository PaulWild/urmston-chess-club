import Link from "next/link";
import React from "react";
import { HiExternalLink } from "react-icons/hi";
import { Container } from "../../components/container";
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
        <h1>Fixtures</h1>
        <div className="flex flex-wrap gap-x-4 gap-y-10 ">
          {Object.entries(leagueGames).map(([leagueName, fixtures]) => (
            <div key={leagueName} className="w-full md:w-auto ">
              <Link href={`/fixtures/${leagueName.replaceAll(" ", "_")}`}>
                <h2 className="text-lg font-bold  pt-0 ">{leagueName}</h2>
              </Link>
              <table className="w-full">
                <thead key={leagueName}>
                  <tr className="border-b-2">
                    <th className="text-left">Date</th>
                    <th className="text-left">Fixture</th>
                    <th>Result</th>
                  </tr>
                </thead>
                {fixtures
                  .sort((a, b) => a.date.localeCompare(b.date))
                  .map((fixture) => (
                    <tbody key={fixture.sys.id} className="">
                      <tr>
                        <td className="whitespace-nowrap pr-4">
                          {new Date(fixture.date)
                            .toISOString()
                            .substring(0, 10)}
                        </td>
                        <td className="max-w-[30rem] min-w-[14rem]">
                          {fixture.awayGame ? fixture.opponent : "Urmston"} v{" "}
                          {fixture.awayGame ? "Urmston" : fixture.opponent}
                        </td>
                        <td className="text-center">{`${
                          fixture.homeScore ?? ""
                        } - ${fixture.awayScore ?? ""}`}</td>
                      </tr>
                    </tbody>
                  ))}
              </table>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
