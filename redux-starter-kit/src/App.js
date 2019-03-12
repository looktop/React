import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from './modules/counter';
import * as postActions from './modules/post';

class App extends Component {

    cancelRequest = null

    handleCancel = () => {
        console.log("### handleCancel ###");
        console.log(this.cancelRequest);
        if(this.cancelRequest) {
            console.log("true");
            this.cancelRequest();
            this.cancelRequest = null;
        }
    }

    loadData = async () => {
        console.log("### loadData ###");
        const { PostActions, number } = this.props;
        try {
            // getPost는 하단 dispatch를 통해서 전달하여 상태를 업데이트 시킨다.
            const p = PostActions.getPost(number);
            console.log("### START response ###");
            console.log(p);
            console.log("### END response ###");
            this.cancelRequest = p.cancel;
            const response = await p;
            console.log(response);        
        } catch (e) {
            console.log(e);
        }
    }
    
    componentDidMount() {
        console.log("### componentDidMount ###");
        this.loadData();
        window.addEventListener('keyup', (e) => {
            console.log(e.key);
            if(e.key === 'Escape') {
                this.handleCancel();
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("### componentDidUpdate ###");
        // 이전 number와 현재 number가 다르면 요청을 시작합니다.
        if(this.props.number !== prevProps.number) {
            this.loadData();
        }
    }

    render() {
        const { CounterActions, number, post, error, loading } = this.props;
        
        return (
            <div>
                <h1>{number}</h1>
                {
                    (() => {
                        if(loading)
                            return (<h2>로딩중...</h2>);
                        if(error)
                            return (<h2>오류 발생!</h2>)
                        return (
                            <div>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                        )
                    })()
                }
                <button onClick={CounterActions.increment}>+</button>
                <button onClick={CounterActions.decrement}>-</button>
            </div>
        );
    }
}

// connect 함수를 호출하고 나면 또 다른 함수를 반환합니다.
// 이때 반환하는 함수의 파라미터로 리덕스에 연결시킬 컴포넌트를 넣으면
// state로 정의한 값들을 ★props로 받아 오는 새 컴포넌트를 만듭니다.★

/* ★ 리듀서를 통해서 상태를 업데이트 시키고 업데이트 된 상태를 App 컴포넌트로
     새로 전달한다 라는 의미 같음!! */

export default connect(
    (state) => ({
        number: state.counter,
        post: state.post.data,
        // 로딩, 성공, 실패인지 pender를 통해 TRUE/ FALSE로 모니터링 가능 (Console)
        // pender를 사용하려면 combineReducers에 파라미터 추가해줘야함
        loading: state.pender.pending['GET_POST'],
        error: state.pender.failure['GET_POST']
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch),
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(App);