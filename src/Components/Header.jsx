import React, { useState } from "react";
import '../Css/Header.css';

function Header() {
    return (
      <header style={{ backgroundColor: '#282c34', padding: '1rem', color: 'white' }}>
        <h1>My React App</h1>
        <nav>
          <a href="/">Home</a> | <a href="/about">About</a>| <a href="/side-bar">Side-bar</a>
        </nav>
      </header>
    );
  }
  
  export default Header;
  