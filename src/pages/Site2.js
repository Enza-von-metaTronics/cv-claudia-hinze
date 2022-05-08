import React from 'react';
import { Link } from "react-router-dom";


export const Site2 = () => {
  return (
    <div className='seite2'>
      <img className='img2' src='./CV-ClaudiaHinze-2.png' alt='cv-site2' />

      <nav
        style={{
          borderBottom: "dashed 1px",
          paddingBottom: "1rem",
          textAlign: 'center'
        }}
      >
        <Link className='button' to="/">Home</Link> |{" "}
        <Link className='button' to="/site1">Seite 1</Link> 
      </nav>

    </div>
  )
}
