import React from 'react';
import './styles/App.css';
import AppRoutes from './routes/app-routes';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
