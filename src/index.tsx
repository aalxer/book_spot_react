import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/body/Body'

const root = ReactDOM.createRoot (
  document.getElementById('root') as HTMLElement
);

root.render (
  <React.StrictMode>
    <Body />
  </React.StrictMode>
);

