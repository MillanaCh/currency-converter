import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { ic_language } from "react-icons-kit/md/ic_language";
import { ic_table_view_outline } from "react-icons-kit/md/ic_table_view_outline";

export default function Header() {
  return (
    <>
      <div className="background-header">
        <h1 className="theme-header">Currency Converter</h1>
      </div>
      <div className="all-layout">
        <header className="header-layout">
          <NavLink to="/" className="link">
            <Icon size={20} icon={ic_language} />
            Charts
          </NavLink>
          <NavLink to="/convert" className="link">
            <Icon size={20} icon={ic_table_view_outline} />
            Convert
          </NavLink>
        </header>
        <main className="main-container">
          <Outlet />
        </main>
      </div>
    </>
  );
}
