import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../scss/style.scss";

export default function Nav({ mode, init, onClick }) {
  useEffect(() => {
    init();
  });

  // const styles = {
  //   transform: "scale(1.1)",
  //   fontWeight: "900",
  //   color: "white",
  // };

  return (
    <nav className={`navbar navbar-expand-lg ${mode} `}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" exact>
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/test">
                Test
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Pricing
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch nav-link">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onChange={onClick}
            checked={mode === "light" ? false : true}
            style={{ display: "none" }}
          />
          <label
            className="form-check-label modeIcon"
            htmlFor="flexSwitchCheckDefault"
          >
            {mode === "light" ? (
              <i className="bi bi-sun" style={{ color: "black" }}></i>
            ) : (
              <i className="bi bi-moon" style={{ color: "white" }}></i>
            )}
          </label>
        </div>
      </div>
    </nav>
  );
}
