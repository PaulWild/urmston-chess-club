import React from "react";
import { Container } from "../../components/container";
import { GetStaticPaths, GetStaticProps } from "next";
import type { Fixture as FixtureType, LeagueGames } from ".";
import Fixture from "../../components/fixture";

export type League = {
  name: string;
};

type Params = {
  id: string;
};

type Props = {
  fixtures: FixtureType[];
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const body = JSON.stringify({
    query: `query {
            leaguesCupsCollection { 
              items {
                name
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

  const items: League[] = res.data.leaguesCupsCollection.items;
  const paths = items
    .map((x) => x.name.replaceAll(" ", "_"))
    .flatMap((x) => {
      return { params: { id: x } };
    });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = (context?.params?.id as string).replaceAll("_", " ");

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
