import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

// eslint-disable-next-line react/prop-types
export default function DropdownMenu({ title, children }) {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };
  return (
    <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
      <button
        type="button"
        className="sm:py-3 flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        onClick={toggleSubmenu}
      >
        {title}
        <IoIosArrowDown className={submenuOpen ? "block" : "hidden"} />
        <IoIosArrowDown className={submenuOpen ? "hidden" : "block"} />
      </button>

      <div
        className={`hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 hidden z-10 top-full sm:w-48 bg-white sm:shadow-md rounded-lg py-2 sm:px-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 ${
          submenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col">{children}</div>
      </div>
    </div>
  );
}
