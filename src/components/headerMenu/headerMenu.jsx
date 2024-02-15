import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import Badge from "../badge/Badge";
import DropdownMenu from "./DropdownMenu";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function HeaderMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="bg-[#fff]">
      <div className="main-container ">
        <div className="mainMenuTop flex items-center justify-between py-7">
          <div className="mainMenuLeft">
            <GiHamburgerMenu className="text-[28px] " />
          </div>
          <div className="logo">
            <img src="/public/images/log.png" alt="" />
          </div>
          <div className="mainMenuRight flex items-center gap-4">
            <span>
              <CiSearch className="text-[28px]" />
            </span>
            <span>
              <CiSettings className="text-[28px]" />
            </span>
            <span className="mb-4">
              <div className="flex justify-center items-center ml-4">
                <Badge text="0" />
              </div>
              <CiShoppingCart className="text-[28px]" />
            </span>
          </div>
        </div>
        <div className="mainMenuButtom">
          <div className="navMenu w-[650px] mx-auto">
            {/* replace mega menu */}
            <div className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 sm:py-0 dark:bg-gray-800">
              <nav aria-label="Global">
                <div className="relative sm:flex sm:items-center">
                  <div className="flex items-center justify-between">
                    <div className="sm:hidden">
                      <button
                        type="button"
                        className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                      >
                        <IoIosArrowDown
                          className={menuOpen ? "hidden" : "block"}
                        />
                        <IoIosArrowDown
                          className={menuOpen ? "block" : "hidden"}
                        />
                      </button>
                    </div>
                  </div>

                  <div
                    id="navbar-collapse-columns-1"
                    className={`hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block ${
                      menuOpen ? "block" : "hidden"
                    }`}
                  >
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                      <DropdownMenu title="1 Col">
                        <a href="#" className="hover:bg-gray-100">
                          About
                        </a>
                        <a href="#" className="hover:bg-gray-100">
                          Services
                        </a>
                        <a href="#" className="hover:bg-gray-100">
                          Customer Story
                        </a>
                      </DropdownMenu>

                      <DropdownMenu title="2 Cols">
                        <div className="sm:grid sm:grid-cols-2">
                          <div className="flex flex-col">
                            <a href="#" className="hover:bg-gray-100">
                              About
                            </a>
                            <a href="#" className="hover:bg-gray-100">
                              Services
                            </a>
                            <a href="#" className="hover:bg-gray-100">
                              Customer Story
                            </a>
                          </div>

                          <div className="flex flex-col">
                            <a href="#" className="hover:bg-gray-100">
                              Careers
                            </a>
                            <a href="#" className="hover:bg-gray-100">
                              Careers: Overview
                            </a>
                            <a href="#" className="hover:bg-gray-100">
                              Careers: Apply
                            </a>
                          </div>
                        </div>
                      </DropdownMenu>

                      <DropdownMenu title="3 Cols">
                        <div className="sm:grid sm:grid-cols-3">
                          <div className="flex flex-col">
                            <a href="#" className="hover:bg-gray-100">
                              About
                            </a>
                            <a href="#" className="hover:bg-gray-100">
                              Services
                            </a>
                            <a href="#" className="hover:bg-gray-100">
                              Customer Story
                            </a>
                          </div>

                          <div className="flex flex-col">
                            <a href="#" className="hover:bg-gray-100">
                              Careers
                            </a>
                            <a href="#" className="hover:bg-gray-100">
                              Careers: Overview
                            </a>
                            <a href="#" className="hover:bg-gray-100">
                              Careers: Apply
                            </a>
                          </div>

                          <div className="flex flex-col">
                            <a href="#" className="hover:bg-gray-100">
                              Log In
                            </a>
                            <a href="#" className="hover:bg-gray-100">
                              Sign Up
                            </a>
                          </div>
                        </div>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
