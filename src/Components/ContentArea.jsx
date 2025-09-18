import React, { useState } from "react";
import '../Css/ContentArea.css';
import logo from '../more/Image_20230809_021955_926.jpeg'; 


function ContentArea() {
    return (
      <section className="content-area">
        <h1>Welcome to My Site</h1>
        <img src={logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />
      </section>
    );
  }
  
  export default ContentArea;