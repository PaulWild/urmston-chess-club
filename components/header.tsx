import styles from "./header.module.scss";
import Link from "next/link";
import useToggle from "../hooks/useToggle";
import Horsey from "./horsey";
const Header = () => {
  const [isExpanded, toggleExpanded] = useToggle(false);

  return (
    <div className={styles.header}>
      <nav className={styles.navigation}>
        <Link href="/">
          <div className={styles["brand-name"]}>
            <Horsey /> <div>Urmston Chess Club</div>
          </div>
        </Link>
        <button
          title="navigation bar control"
          className={styles.hamburger}
          onClick={toggleExpanded}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className={styles["navigation-menu"]}>
          <ul
            className={isExpanded ? styles.expanded : ""}
            onClick={toggleExpanded}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/fixtures">Fixtures</Link>
            </li>
            <li>
              <Link href="/history">History</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/links">Links</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
