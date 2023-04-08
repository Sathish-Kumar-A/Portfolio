import React from 'react'
import { Link, Navigate, useLocation,NavLink } from 'react-router-dom';
import logo from "../Assets/logo.png";
import { useStore } from './hooks/context';

const Header = () => {
    const location = useLocation();
    const [{ colors }] = useStore();
    const activeClassChange = (isActive) => {
        return isActive?"text-blue-500":colors.textColor
    }
  return (
    <nav className="flex items-center justify-between py-6">
      <NavLink exact to={"/"}>
        {!location.pathname.includes("home") && <img src={logo} alt="profileImage" className="h-[35px]" />}
      </NavLink>
      <div className="lg:space-x-6">
        <NavLink exact to={"/about"} className={({ isActive }) => activeClassChange(isActive)}>
          About
        </NavLink>
        <NavLink exact to={"/experience"} className={({ isActive }) => activeClassChange(isActive)}>
          Experience
        </NavLink>
        <NavLink exact to={"/projects"} className={({ isActive }) => activeClassChange(isActive)}>
          Projects
        </NavLink>
        {/* <Link to={"/about"}>About</Link> */}
      </div>
    </nav>
  );
}

export default Header