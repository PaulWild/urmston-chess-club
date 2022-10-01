import { createClient } from "contentful";
import { Container } from "../../components/container";
import Fixture from "../../components/fixture";

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

type Props = {
  fixtures: Fixture[];
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

  console.log(JSON.stringify(res, null, 2));
  //console.log(JSON.stringify(res, null, 2));

  const items: Fixture[] = res.data.fixtureCollection.items;

  let grouped = new Map<String, Fixture[]>();
  for (let fixture of items) {
    let group = grouped.get(fixture.leaguecup.name) ?? [];
    group.push(fixture);
    grouped.set(fixture.leaguecup.name, group);
  }

  return {
    props: { fixtures: res.data.fixtureCollection.items },
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
