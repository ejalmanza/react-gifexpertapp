import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import { GifExpertApp } from './GifExpertApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GifExpertApp/> // reemplaza al archivo app.js, aqui se especifica cual entrara
);

// ReactDOM.render(
//   <app>GifExpertApp</app>,
//   document.getElementById('root')
// );


 