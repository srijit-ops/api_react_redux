//import redux from 'redux';
//import ReactRedux from 'react-redux';
import {createStore,applyMiddleware } from "redux"
import fetchUsers from "./action"
//import applyMiddleware from "redux"
//const applyMiddleware= redux.applyMiddleware
import thunk from 'redux-thunk'
import reducer from "./reducer"
const store= createStore(reducer,applyMiddleware(thunk))
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(fetchUsers())
export default store