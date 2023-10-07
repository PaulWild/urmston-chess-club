import { Container } from "../../../components/container";
import Fixture from "./fixture";
import { type Fixture as FixtureType } from "../page";
import Banner from "../../../components/banner";
import fixturesImg from "./../fixtures.jpg";

export type Result = {
  leaguecup: {
    name: string;
  };
};

export async function generateStaticParams() {
  const body = JSON.stringify({
    query: `query {
      fixtureCollection (order: date_ASC){
        items{ 
          sys {
            id
          }
          leaguecup {
            name
          },
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

  const items: Result[] = res.data.fixtureCollection.items;

  return items.map((x) => ({
    leagueId: x.leaguecup.name.replaceAll(" ", "_"),
  }));
}

export default async function Page({
  params: { leagueId },
}: {
  params: { leagueId: string };
}) {
  const slug = leagueId.replaceAll("_", " ");

  const body = JSON.stringify({
    query: `query {
        fixtureCollection (order: date_ASC, where: { leaguecup: { name: "${slug}"}}){
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

  const fixtures: FixtureType[] = res.data.fixtureCollection.items;

  return (
    <>
      <Banner imgPath={fixturesImg} />
      <Container>
        {fixtures.map((fixture) => (
          <Fixture key={fixture.date} fixture={fixture} />
        ))}
      </Container>
    </>
  );
}
