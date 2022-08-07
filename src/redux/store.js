import {createStore, applyMiddleware} from 'redux'
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

//thunk: action에서 dispatch를 return 할 수 있게 함.
const middleware=[logger, thunk]

//store 생성(reducer 두개 합친걸로)
//logger를 함께 인자로 사용하면 state변경될 때마다 콘솔에 값이 찍혀서 편해짐
const store=createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware))); //...middleware == logger

export default store;

