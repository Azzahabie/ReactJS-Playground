import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AboutMe,FindMe,MyWork} from './components/index'


ReactDOM.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<AboutMe />} />
      <Route path="myWork" element={<MyWork />} />
      <Route path="findMe" element={<FindMe />} />
    </Routes>
  </BrowserRouter>
    ,
    document.getElementById('root')
);

