import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function Favorites() {

    const dispatch = useDispatch();

    const [category, setCategory] = useState('');

    const favoritesList = useSelector(store => store.favoritesReducer);
    const categoryNames = useSelector(store => store.categoriesReducer);

    console.log('category from store', category);

    console.log('favoritesList in Favorites', favoritesList)

    useEffect(() => {
        dispatch({type: 'FETCH_FAVORITES'});
        dispatch({type: 'FETCH_CATEGORIES'});
    }, [])

    const categorySelect = (event) => {

        console.log('Selected category!');
        console.log('event.target.value', event.target.value);
        setCategory(event.target.value);
    
    }

    // const handleSubmit = (category, favoriteList) => {
    //     console.log ('category', category);
    //     dispatch({ type: "ADD_CATEGORY", payload: {category, favoriteList}})

    // }

    return(
        <>
            <h1>Favorites</h1>
            {favoritesList.map((favorite) => {

            return (
                    <div onChange={categorySelect} key={favorite.id}>
                        <img src={favorite.url} />
                        <div >
                            <input type="radio" name="category_id" id="1" value='Funny' defaultChecked></input><label>Funny</label>
                            <input type="radio" name="category_id" id="2" value='Cohort'></input><label>Cohort</label>
                            <input type="radio" name="category_id" id="3" value='Cartoon'></input><label>Cartoon</label>
                            <input type="radio" name="category_id" id="4" value='NSFW'></input><label>NSFW</label>
                            <input type="radio" name="category_id" id="5" value='Meme'></input><label>Meme</label>
                        </div>
                        <button>SUBMIT</button>
                    </div>
                )
            })}

        </>
    )
}

export default Favorites;