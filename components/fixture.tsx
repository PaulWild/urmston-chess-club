import { Fixture } from "../pages/fixtures";
import styles from "./fixture.module.scss";

type Props = {
  fixture: Fixture;
};

const Fixture = ({ fixture }: Props) => {
  var theDate = new Date(fixture.date);
  return (
    <section className={styles.fixture}>
      <dl>
        <dt>Home</dt>
        <dd>{fixture.home}</dd>
        <dt>Away</dt>
        <dd>{fixture.away}</dd>
        <dt>Location</dt>
        <dd>{fixture.location}</dd>
        <dt>Date</dt>
        <dd>
          {theDate.toISOString().substring(0, 10)}{" "}
          {theDate.toISOString().substring(11, 16)}
        </dd>
      </dl>
    </section>
  );
};

export default Fixture;
