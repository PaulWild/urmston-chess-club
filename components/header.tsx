"use client";

import Link from "next/link";
import useToggle from "../hooks/useToggle";
import Horsey from "./horsey";

const Header = () => {
  const [isExpanded, toggleExpanded] = useToggle(false);
  const hidden = isExpanded ? " max-sm:flex" : " max-sm:hidden";

  return (
    <nav className="max-w-7xl flex mx-auto h-14 relative z-20 place-content-between">
      <Link href="/">
        <div className="flex items-center font-logo text-xl ">
          <Horsey />
          <div className="z-20 -translate-y-1  whitespace-nowrap">
            Urmston Chess Club
          </div>
        </div>
      </Link>
      <button
        title="navigation bar control"
        className="sm:hidden block right-6 absolute top-[30%]"
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

      <ul
        className={`${hidden} max-sm:absolute max_sm:flex max-sm:z-10 max-sm:left-0 max-sm:w-full max-sm:h-[calc(100vh)] max-sm:bg-white max-sm:m-0 max-sm:top-14 flex max-sm:flex-col align-items-middle self-center`}
        onClick={toggleExpanded}
      >
        <li>
          <Link
            href="/"
            className="hover:bg-gray-100 px-4 py-4 block text-center h-full"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/fixtures"
            className="hover:bg-gray-100 px-4 py-4 block text-center"
          >
            Fixtures
          </Link>
        </li>
        <li>
          <Link
            href="/history"
            className="hover:bg-gray-100 px-4 py-4 block text-center"
          >
            History
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:bg-gray-100 px-4 py-4 block text-center"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/links"
            className="hover:bg-gray-100 px-4 py-4 block text-center"
          >
            Links
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
