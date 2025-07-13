import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DetailPopup from "./DetailPopup";

function Layout({ setPage,setShowPopup }) {
  return (
    <div>
      {/* navbar */}
      <nav>
        <div className="flex justify-between items-center bg-blue-900 p-4">
          <h1 className="text-2xl font-bold leading-tight">
            Conference Expense Planner
          </h1>
          <button onClick={() => setPage("meals")}>
            <h3 className="text-white">Meals</h3>
          </button>
          <button onClick={() => setPage("venues")}>
            <h3 className="text-white">Venue</h3>
          </button>
          <button onClick={() => setPage("add-ons")}>
            <h3 className="text-white">Add-ons</h3>
          </button>
          <div className="flex items-center justify-center py-2">
            <button className="bg-yellow-400  text-black border rounded p-3" onClick={() => setShowPopup(true)}>
              Show details
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Layout;
