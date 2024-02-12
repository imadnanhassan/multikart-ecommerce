export default function Topbar() {
  return (
    <div className="bg-[#2d2a25] py-3 ">
      <div className="flex justify-between items-center main-container text-white">
        <div className="top-contact flex items-center gap-5 ">
          <p>Welcome to Our store Multikart</p>
          <p>Call Us: 123 - 456 - 7890</p>
        </div>
        <div className="tp-auth flex items-center">
          <ul className="flex gap-5">
            <li> Wishlist</li>
            <li> My Account</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
