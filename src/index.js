import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Router from "./router"
import {createStore, combineReducers} from "redux";
import Reducers from "./reducers";
import {Provider} from "react-redux";

const store = createStore(combineReducers(Reducers));

ReactDOM.render(<Provider store={store}><Router/></Provider>, document.getElementById('root'));

serviceWorker.unregister();
