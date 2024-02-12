import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import Badge from "../badge/Badge";

export default function HeaderMenu() {
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
            <ul className="flex items-center justify-around text-[18px]">
              <li className="text-[18px] flex items-center gap-2">
                Home
                <IoIosArrowDown />
              </li>
              <li className="text-[18px] flex items-center gap-2">
                Shop
                <IoIosArrowDown />
              </li>
              <li className="text-[18px] flex items-center gap-2">
                Products
                <IoIosArrowDown />
              </li>
              <li className="text-[18px] flex items-center gap-2">
                Blogs
                <IoIosArrowDown />
              </li>
              <li className="text-[18px] flex items-center gap-2">
                About
                <IoIosArrowDown />
              </li>
              <li className="text-[18px] flex items-center gap-2">
                Contact
                <IoIosArrowDown />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
