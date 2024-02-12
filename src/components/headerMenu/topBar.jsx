import { IoIosCall } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
export default function Topbar() {
  return (
    <div className="bg-[#2d2a25] py-3">
      <div className="flex justify-between items-center main-container text-white">
        <div className="top-contact flex items-center gap-5 ">
          <p>Welcome to Our store Multikart</p>
          <p className="flex items-center gap-1">
            <IoIosCall className="text-[20px] mb-1" />
            Call Us: 123 - 456 - 7890
          </p>
        </div>
        <div className="tp-auth flex items-center">
          <ul className="flex gap-5">
            <li className="flex items-center gap-2">
              <FaHeart className="text-[16px] mt-1" /> Wishlist
            </li>
            <li className="flex items-center gap-2">
              <FaUser className="text-[15px] mt-1" /> My Account
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
