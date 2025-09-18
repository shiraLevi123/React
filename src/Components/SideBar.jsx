import React, { useState } from "react";
import '../Css/SideBar.css';

function SideBar() {
    return (
      <aside className="sidebar">
        <h2>Menu</h2>
        <nav>
          <ul>
            <li><a href="/page">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </aside>
    );
  }
  
  export default SideBar;