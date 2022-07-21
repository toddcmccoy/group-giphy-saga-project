import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function Search () {
    const dispatch = useDispatch();

    const [input, setInput]= useState('');


    const searchList = useSelector(store => store.searchReducer);

    

    useEffect(() => {
        // getSearch();
        
    },[])

    // const handleSearch= (event) => {
        
    // }

    const getSearch = () => {
        dispatch({ type: 'FETCH_SEARCH', payload: input})
        console.log('in getSearch, payload:', input);
        setInput('');
    }

    return (
        <div>
            <header>

            </header>

            <input type='text' value={input} onChange={(event)=>setInput(event.target.value)}></input>

            <button onClick={getSearch}>Search</button>
        {searchList.map((search)=> {
            return(
                <div key={search.id} className="gifBox">
                <img src={search.images?.original.url}/>
                </div>
            );
        })}
        

        </div>
    )

}

export default Search;