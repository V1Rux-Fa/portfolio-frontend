import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import "./Navbar.css";
import { FaRegMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";

interface Props {
  theme: string;
  toggleTheme: () => void;
}

const Navbar = ({ toggleTheme, theme }: Props) => {
  const navbar = "navbar navbar-dark bg-".concat(theme);
  return (
    <div className="Navbar">
      <nav className={navbar}>
        <div className="row">
          <div className="col-6">
            <div className="container-fluid">
              <Link to="/home">
                <a>
                  <GoHome />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-4">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
                onChange={() => toggleTheme()}
              />
              {theme === "dark" ? <FaRegMoon /> : <FaSun />}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
