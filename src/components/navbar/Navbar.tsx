import { Link } from "react-router-dom";
import Logo from "../../assets/logo/Logo";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="flex sticky">
      <Link to={"/"}>
        <div className="logo-box">
          <Logo />
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
