import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
});

type Fixture = {
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
  console.log(fixtures);
  return (
    <>
      {fixtures.map((fixture) => (
        <div key={fixture.date}>
          {`${fixture.home} - ${fixture.away} @ ${fixture.location} ${fixture.date}`}
        </div>
      ))}
    </>
  );
};

export default Fixtures;
