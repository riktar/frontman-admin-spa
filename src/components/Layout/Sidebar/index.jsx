import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import Icon from "@material-tailwind/react/Icon";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  return (
    <>
      <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} bg-gradient-to-b from-indigo-700 to-indigo-500 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="relative flex-col items-stretch min-h-full px-0 flex-nowrap">
          <div className={"flex items-center justify-center h-12"}>
            <h1 className="text-2xl font-bold text-white">Material Tailwind</h1>
          </div>
          <div className="flex flex-col mt-5">
            <ul className="flex flex-col min-w-full list-none">
              <li className="mb-2 rounded-lg">
                <NavLink
                  to="/"
                  exact
                  className="flex items-center gap-2 px-3 py-2 text-sm font-light text-white rounded hover:bg-indigo-500"
                  activeClassName="hover:bg-indigo-800 bg-indigo-800"
                >
                  <Icon name="dashboard" size="2xl" />
                  Dashboard
                </NavLink>
              </li>
              <li className="mb-2 rounded-lg">
                <NavLink
                  to="/settings"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-light text-white rounded hover:bg-indigo-500"
                  activeClassName="hover:bg-indigo-800 bg-indigo-800"
                >
                  <Icon name="settings" size="2xl" />
                  Settings
                </NavLink>
              </li>
            </ul>

            <ul className="absolute bottom-0 flex flex-col min-w-full list-none"></ul>
          </div>
        </div>
      </div>
    </>
  );
}
