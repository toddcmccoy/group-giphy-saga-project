import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import App from './components/App/App';

// GET search reducer
const searchReducer = (state = [], action) => {
    if(action.type === 'SET_SEARCH') {
        return action.payload;
    }
    return state;
}
// GET favorite reducer
const favoritesReducer = (state = [], action) => {
    if(action.type === 'SET_FAVORITES') {
        return action.payload;
    }
    return state;
}

// GET categories reducer
const categoriesReducer = (state = [], action) => {
    if(action.type === 'SET_CATEGORIES') {
        return action.payload;
    }
    return state;
}

// GET search saga
function* fetchSearch(action) {
    try {
        const searchInput = action.payload;
        console.log('in fetchSearch, searchInput', searchInput)

        const response = yield axios.get(`/api/search/${searchInput}`);
        yield put({ type: 'SET_SEARCH', payload: response.data.data});
    } catch (error) {
        console.log('Error fetching in fetchSearch:', error);
    }
}

// GET favorites saga
function* fetchFavorites(action) {
    try {
        // console.log('response in fetchFavorites', response);
        const response = yield axios.get(`/api/favorite`);
        yield put({ type: 'SET_FAVORITES', payload: response.data});
        // yield console.log('response in fetchFavorites', response.data.data);

    } catch (error) {
        console.log('Error fetching in fetchFavorites:', error);
    }
}


// GET categories saga
function* fetchCategories(action) {
    try {
        // console.log('response in fetchCategories', response);
        const response = yield axios.get(`/api/category`);
        yield put({ type: 'SET_CATEGORIES', payload: response.data});
        // yield console.log('response in fetchCategories', response.data);

    } catch (error) {
        console.log('Error fetching in fetchCategories:', error);
    }
}
// POST search favorite saga
function* postFavorite(action) {
    try {
        const favorite = action.payload
        yield axios.post('/api/favorite', {favorite});
        // yield put({ type: 'FETCH_SEARCH' });
    } catch (error) {
        console.log('Error posting element', error);
    }
}


function* watcherSaga() {
    yield takeEvery('FETCH_SEARCH', fetchSearch);
    yield takeEvery('ADD_FAVORITE', postFavorite );
    yield takeEvery('FETCH_FAVORITES', fetchFavorites );
    yield takeEvery('FETCH_CATEGORIES', fetchCategories);
}

const sagaMiddleware = createSagaMiddleware();


const storeInstance = createStore(
    combineReducers({
        searchReducer,
        favoritesReducer,
        categoriesReducer
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);


