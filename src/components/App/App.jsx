import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

//components
import Search from '../Search/Search';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Search />
    </div>
  );
}

export default App;
