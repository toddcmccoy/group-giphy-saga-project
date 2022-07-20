import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function Search () {
    const dispatch = useDispatch();

    const search = useSelector(store => store.searchReducer);

    

    useEffect(() => {
        getSearch();
    },[])

    const handleSearch= () => {
        
    }

    const getSearch = () => {
        dispatch({ type: 'FETCH_SEARCH'})
    }

    const [input, setInput]= useState('');

    return (
        <div>
            <header>

            </header>

            <input type='text' onChange={(event)=>setInput(event.target.value)}></input>

            <button onClick={getSearch}>Search</button>

            <img src={}/>

        </div>
    )

}

export default Search;