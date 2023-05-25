import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <nav className="bg-transparent">
        <div className=" flex flex-wrap items-center justify-between py-[20px] md:py-[30px]">
          <a href="#" className="flex items-center">
            <span className="text-primary font-pacifico text-xl md:text-3xl">
              Farhan
            </span>
          </a>
          <button
            onClick={() => toggleMenu()}
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6 text-primary"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={` w-full md:block md:w-auto ${
              !showMenu ? "hidden" : ""
            }`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 rounded-lg bg-transparent md:flex-row md:space-x-2 md:mt-0 md:bg-transparent">
              <li>
                <a
                  href="#perkenalan"
                  className="block py-2 px-4 font-righteous text-primary text-xl rounded-lg hover:bg-primary hover:text-white  "
                  aria-current="page"
                >
                  Me !
                </a>
              </li>
              <li>
                <a
                  href="#skill"
                  className="block py-2 px-4 font-righteous text-primary text-xl rounded-lg hover:bg-primary hover:text-white"
                  aria-current="page"
                >
                  Skill
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className="block py-2 px-4 font-righteous text-primary text-xl rounded-lg hover:bg-primary hover:text-white"
                  aria-current="page"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  href="#kontak"
                  className="block py-2 px-4 font-righteous text-primary text-xl rounded-lg hover:bg-primary hover:text-white"
                  aria-current="page"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
