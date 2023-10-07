import styles from "./fixture.module.scss";
import { type Fixture } from "../page";

type Props = {
  fixture: Fixture;
};

const Fixture = ({ fixture }: Props) => {
  var theDate = new Date(fixture.date);
  return (
    <section className={styles.fixture}>
      <dl>
        <dt>League</dt>
        <dd>{fixture.leaguecup.name}</dd>
        <dt>Home</dt>
        <dd>{fixture.awayGame ? fixture.opponent : "Urmston"}</dd>
        <dt>Away</dt>
        <dd>{fixture.awayGame ? "Urmston" : fixture.opponent}</dd>
        <dt>Date</dt>
        <dd>{theDate.toISOString().substring(0, 10)}</dd>
      </dl>
    </section>
  );
};

export default Fixture;
