import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";
import Dashboard from "./Dashboard";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName") || "USERID";
  const initials = userName
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    setIsProfileDropdownOpen(false);
    navigate("/login");
  };

  const menuClass = "menu";
  const activeMenuClass = "active-menu";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={
              {textDecoration:'none'}}
              to='/'
              onClick={()=>handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>

          <li>
            <Link style={
              {textDecoration:'none'}}
              to='/orders'
              onClick={()=>handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>

          <li>
            <Link style={
              {textDecoration:'none'}}
              to='/holdings'
              onClick={()=>handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>

          <li>
            <Link style={
              {textDecoration:'none'}}
              to='/positions'
              onClick={()=>handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>

          <li>
            <Link style={
              {textDecoration:'none'}}
              to='/funds'
              onClick={()=>handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={
              {textDecoration:'none'}}
              to='/apps'
              onClick={()=>handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{initials}</div>
          <p className="username">{userName}</p>
          {isProfileDropdownOpen && (
            <div className="profile-dropdown" onClick={(event) => event.stopPropagation()}>
              {!token ? (
                <>
                  <Link
                    to="/login"
                    onClick={(event) => {
                      event.stopPropagation();
                      setIsProfileDropdownOpen(false);
                    }}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={(event) => {
                      event.stopPropagation();
                      setIsProfileDropdownOpen(false);
                    }}
                  >
                    Signup
                  </Link>
                </>
              ) : (
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleLogout();
                  }}
                >
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;