import { combineReducers } from 'redux';
import counter from './counter';
import post from './post';
import { penderReducer } from 'redux-pender';

export default combineReducers({
    counter,
    post,
    // 이 리듀서는 요청 상태를 관리합니다.
    pender: penderReducer
});