import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../src/assets/dashboard__logo.svg";
import { dashboardLink } from "../dashnav.js";
import { Button } from "flowbite-react";

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear token from localStorage (or sessionStorage)
    localStorage.removeItem("authToken");

    // Redirect to sign-in page
    navigate("/signin");
  };

  return (
    <div className="dashNav__main">
      <div className="top__nav">
        <div className="logo">
          <Link to="#" className="logoLink">
            <img src={logo} alt="Realtor Dashboard Logo" />
            <h2>AirBnB</h2>
          </Link>
        </div>
      </div>
      <div className="bottom__nav">
        <div className="nav">
          {dashboardLink.map((link, index) => (
            <Link
              className={
                location.pathname === link.Link ? "active" : "dash__link"
              }
              to={link.Link}
              key={index}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="logout">
          <Button
            className="w-full text-xl rounded-none"
            color="failure"
            onClick={handleLogout} // Use onClick instead of onSubmit
          >
            Log out
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
