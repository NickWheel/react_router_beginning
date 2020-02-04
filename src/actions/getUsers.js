import axios from 'axios';
import {
    HANDLE_INC,
    USERS_SUCCESS,
    USERS_LOADING,
    USERS_ERR
} from './actionTypes';

export const getUsers = () => {
    return async (dispatch) => {
        dispatch({
        type: USERS_LOADING
    })
    // https://jsonplaceholder.typicode.com/todos
    axios.get('http://localhost:5000/getObj')
        .then((data)=>{
            return dispatch({
                type: USERS_SUCCESS,
                users: data.data,
            })
        })
        .catch((err) => {
            return dispatch({
                type: USERS_ERR,
            })
        })

    }
};

export const delElem = (idx) => {
    return async (dispatch) =>{
        axios.post('http://localhost:5000/delElem',
        
        {
            index: idx
        })
        .then((data)=>{
            return dispatch({
                type: USERS_SUCCESS,
                users: data.data,
            })
        })
        .catch((err) => {
            return dispatch({
                type: USERS_ERR,
            })
        })

    }
}