import React, { useEffect, useState } from 'react'
import { Link, Navigate, useLocation,NavLink } from 'react-router-dom';
import logo from "../Assets/logo.png";
import { useStore } from './hooks/context';
import { Header_JSON } from '../JSON/json';

const Header = () => {
    const location = useLocation();
  const [{ colors }] = useStore();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

    const activeClassChange = (isActive) => {
        return isActive?"text-blue-500":colors.textColor
  }
  return (
    <nav className={`sticky top-0 z-[2] flex items-center justify-between py-6 ${colors.bgColor}`}>
      <NavLink exact to={"/"}>
        {!location.pathname.includes("home") && <img src={logo} alt="profileImage" className="h-[35px]" />}
      </NavLink>
      <div className="lg:space-x-6 hidden md:block">
        {Header_JSON.routes.map(({ name, route }, index) => (
          <NavLink key={index} exact to={route} className={({ isActive }) => activeClassChange(isActive)}>
            {name}
          </NavLink>
        ))}
        {/* <Link to={"/about"}>About</Link> */}
      </div>
      <div className={`md:hidden relative`}>
        <div className="flex justify-end">
          <HamburgerComp clickState={[isOpen, setIsOpen]} />
        </div>
        {isOpen && (
          <div className={`flex flex-col space-y-4 ${colors.bgColor} right-0 absolute border p-4 ${isOpen ? "w-[200px]" : "w-auto"}`}>
            {Header_JSON.routes.map(({ name, route }, index) => (
              <NavLink key={index} exact to={route} className={({ isActive }) => activeClassChange(isActive)}>
                {name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

const HamburgerComp = ({ clickState }) => {
const [isOpen, setIsOpen] = clickState;
const genericHamburgerLine = `h-[2px] w-6 my-[3px] bg-gray-100 transition ease transform duration-300`;  
  return (
    <button className="flex flex-col h-[35px] w-[35px] justify-center items-center group" onClick={() => setIsOpen(!isOpen)}>
      <div className={`${genericHamburgerLine} ${isOpen ? "rotate-45 translate-y-1 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"}`} />
      <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
      <div className={`${genericHamburgerLine} ${isOpen ? "-rotate-45 -translate-y-[12px] opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"}`} />
    </button>
  );
}

export default Header