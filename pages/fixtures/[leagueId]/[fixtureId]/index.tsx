import React from "react";
import { Container } from "../../../../components/container";
import { GetStaticPaths, GetStaticProps } from "next";
import type { Fixture as FixtureType, LeagueGames } from "../../.";
import Fixture from "../../../../components/fixture";

export type Result = {
  sys: {
    id: string;
  };
  leaguecup: {
    name: string;
  };
};

type Params = {
  leagueId: string;
  fixtureId: string;
};

type Props = {
  fixtures: FixtureType[];
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
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

  const paths = items.map((x) => ({
    params: {
      leagueId: x.leaguecup.name.replaceAll(" ", "_"),
      fixtureId: x.sys.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = (context?.params?.leagueId as string).replaceAll("_", " ");
  const fixtureId = context?.params?.fixtureId;

  const body = JSON.stringify({
    query: `query {
        fixtureCollection (order: date_ASC, where: { leaguecup: { name: "${slug}"},  sys: {id: "${fixtureId}"}}){
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

  return {
    props: { fixtures },
  };
};

const Fixtures = ({ fixtures }: Props) => {
  return (
    <Container>
      {fixtures.map((fixture) => (
        <Fixture key={fixture.date} fixture={fixture} />
      ))}
    </Container>
  );
};

export default Fixtures;
