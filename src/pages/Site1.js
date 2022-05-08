import React from 'react';
import { Link } from "react-router-dom";

export const Site1 = () => {
  return (

    <div className='seite1'>
      <img className='img1' src='./CV-ClaudiaHinze-1.png' alt='cv-site1'/>

      <nav
        style={{
          borderBottom: "dashed 1px",
          paddingBottom: "1rem",
          textAlign: 'center'
        }}
      >
        <Link className='button' to="/">Home</Link> |{" "}
        <Link className='button' to="/site2">Seite 2</Link> 
      </nav>
    </div>



  );
}
