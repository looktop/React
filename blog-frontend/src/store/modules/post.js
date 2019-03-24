import { createAction, handleActions } from 'redux-actions';

import { Map, fromJS} from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const GET_POST = 'post/GET_POST';


// action creators
export const getPost = createAction(GET_POST, api.getPost);

// initial state
const initialState = Map({
    post: Map({})
});

// reducer
export default handleActions({
    ...pender({
        type: GET_POST,
        onSuccess: (state, action) => {
            // action.payload에서 받은 data 배열을 post로 저장한다.
            const { data: post } = action.payload;
            // state post Map에 저장한다.     
            return state.set('post', fromJS(post));
        }
    })
}, initialState)