import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import App from './App';

import { BrowserRouter , Routes , Route } from "react-router-dom";
import {Site1} from "./pages/Site1";
import {Site2} from "./pages/Site2";



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<App />} />
      <Route path="site1" element={<Site1 />} />
      <Route path="site2" element={<Site2 />} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

