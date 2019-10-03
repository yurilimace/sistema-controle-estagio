import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Components/input'
import AppRoute from "./Components/HeaderComponents/Routers/Routers";

function App() {
  return (
    <div className="App">
      <AppRoute />
      <Input />
    </div>
  );
}

export default App;
