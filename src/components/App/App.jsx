import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


//components
import Search from '../Search/Search';
import './App.css';
import Favorites from '../Favorites/Favorites'
function App(props) {
  return (
    <Router>
      <header>
        <h1>Gifs!!!</h1>
      </header>

        <ul>
          <li>
            <Link to='/'>Search</Link>
          </li>
          <li>
            <Link to='/favorites'> Favorites</Link>
          </li>
        </ul>

    <div className="container">
      <Route path={'/'} exact>
        <h1>Giphy Search!</h1>
        <Search />
      </Route>



        <Route path={'/favorites'}>
          <Favorites />
        </Route>
    </div>
  </Router>
  );
}

export default App;
