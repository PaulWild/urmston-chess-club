import Banner from "../../components/banner";
import { Container } from "../../components/container";
import styles from "./Contact.module.scss";
import sportsClub from "./sportsclub.jpg";

export default function Page() {
  return (
    <>
      <Banner imgPath={sportsClub} />
      <Container>
        <div className="flex flex-col md:flex-row place-content-between">
          <div className="basis-1/2">
            <h1>Contact Us</h1>
            <p>
              Reach out to us on facebook if you have any questions or queries.
            </p>
            <p>
              Social chess and home league games are played at Urmston Sports
              Club on a Thursday evening.{" "}
            </p>
            <address>
              Urmston Sports Club <br />
              Moorside Road <br />
              Urmston Manchester <br />
              M41 5UU <br />
            </address>
            <p>
              <a>https://www.urmstonsportsclub.com/</a>
            </p>
          </div>
          <div className="basis-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.9632953269224!2d-2.3632980836306685!3d53.45124237454925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bac0181a9169d%3A0xdea7f6b62b76cff8!2sUrmston%20Sports%20Club!5e0!3m2!1sen!2suk!4v1661103999556!5m2!1sen!2suk"
              width="100%"
              height="400px"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </>
  );
}
