import { HiExternalLink } from "react-icons/hi";
import { Container } from "../../components/container";

export default function Page() {
  return (
    <Container>
      <h1>Links</h1>
      <ul>
        <li>
          <a href="https://www.manchesterchess.com/">
            Manchester Chess Federation <HiExternalLink />
          </a>
        </li>
        <li>
          <a href="https://www.englishchess.org.uk/">
            English Chess Federation <HiExternalLink />
          </a>
        </li>
      </ul>
    </Container>
  );
}
