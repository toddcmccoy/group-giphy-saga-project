import {useSelector, useDispatch} from 'react-redux';

function SearchItem({searchItem}) {

    // const searchList = useSelector(store => store.searchReducer);
    const dispatch = useDispatch();

    const addFavorite = (event) => {
        dispatch({ type:'ADD_FAVORITE', payload: event})
    }

    return(
            <div key={searchItem.id} className="gifBox">
            <img src={searchItem.images?.original.url}/>
            <br />
            <button onClick={(event) => addFavorite(searchItem.images?.original.url)} id='favorite'>Add Favorite</button>
            </div>
    )
}

export default SearchItem;