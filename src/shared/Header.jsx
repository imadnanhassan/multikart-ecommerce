import HeaderMenu from "../components/headerMenu/headerMenu";
import Topbar from "../components/headerMenu/topBar";

export default function Header() {
  return (
    <header className="main-container">
          <Topbar />
          <HeaderMenu/>
    </header>
  );
}
