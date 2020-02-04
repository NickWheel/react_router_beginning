import {
    HANDLE_INC,
    USERS_SUCCESS,
    USERS_LOADING,
    USERS_ERR
} from '../../src/actions/actionTypes';
import update from 'immutability-helper';


const initialState = {
    count: 0,
    users: [],
    status: 'loading' // loading/success/err
}

export default function(state=initialState, action){
    switch (action.type) {
        case HANDLE_INC: 
            return state;
        case USERS_LOADING: 
            return update(state, {
                status: { $set: 'loading'}
            })
        case USERS_SUCCESS: 
            console.log(state)
            return update(state, {
                users: { $set: action.users },
                status: { $set: 'success'},
                
            })
            console.log(state)
        case USERS_ERR: 
            return update(state, {
                status: { $set: 'err'}
            });
        default:
            return state;
    }

}