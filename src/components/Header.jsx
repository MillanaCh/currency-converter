import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="background-header">
        <h1 className="theme-header">Currency Converter</h1>
      </div>
      <div className="all-layout">
        <header className="header-layout">
          <Link to="/" className="link">
            Charts
          </Link>
          <Link to="/convert" className="link">
            Convert
          </Link>
          <Link to="/currency" className="link">
            Currency
          </Link>
        </header>
        <main className="main-container">
          <Outlet />
        </main>
      </div>
    </>
  );
}
