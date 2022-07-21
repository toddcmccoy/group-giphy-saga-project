import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function Favorites() {

    const dispatch = useDispatch();

    const favoritesList = useSelector(store => store.favoritesReducer);
    console.log('favoritesList in Favorites', favoritesList)

    useEffect(() => {
        dispatch({type: 'FETCH_FAVORITES'});
    }, [])

    return(
        <>
            <h1>Favorites</h1>
            {favoritesList.map((favorite) => {

            return (
                    <div key={favorite.id}>
                        <img src={favorite.url} />
                    </div>
                )
            })}

        </>
    )
}

export default Favorites;