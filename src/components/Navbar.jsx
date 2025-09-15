import Bottomnav from "./Bottomnav";
import MainNavbar from "./MainNavbar";
import Topnav from "./Topnav";
function Navbar() {
  return (
    <nav>
      <Topnav />
      <MainNavbar />
      <Bottomnav />
    </nav>
  );
}
export default Navbar;
