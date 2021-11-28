import React from 'react';
import './App.css';
import MainPage from "./components/MainPage"
import Detail from './components/Detail';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (

<div className="App">

      <div className="container">

        <h1 className="title">Unsplash Photo Display Demo </h1>
        <BrowserRouter>
            <Route path="/" exact component={MainPage} />
            <Route path="/details" exact component={Detail} />
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;