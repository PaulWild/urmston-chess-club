import { createClient } from "contentful";
import { Container } from "../../components/container";
import Fixture from "../../components/fixture";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
});

export type Fixture = {
  home: string;
  away: string;
  date: string;
  location: string;
};

type Props = {
  fixtures: Fixture[];
};

export const getStaticProps = async (): Promise<{ props: Props }> => {
  const res = await client.getEntries<Fixture>({
    content_type: "fixture",
    order: "fields.date",
  });

  return {
    props: { fixtures: res.items.map((x) => x.fields) },
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
