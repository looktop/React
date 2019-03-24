import React, { Component } from 'react';
import PostInfo from 'components/post/PostInfo';
import PostBody from 'components/post/PostBody';
import * as postActions from 'store/modules/post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Post extends Component {
    initialize = async() => {
        // 정의만 해주고 있기 때문에 처음 값을 비어있다.
        // 액션을 디스패치 해준 다음에 console.log를 찍어보면 값이 들어있는 것을 확인할 수 있다.
        const { PostActions, id } = this.props;
        
        // console.log("====== initialize start ======= ");
        // console.log(this.props);
        // console.log("====== initialize end ======= ");

        try {
            await PostActions.getPost(id);
        } catch(e) {
            console.log(e);
        }

        // console.log("====== initialize2 start ======= ");
        // console.log(this.props);
        // console.log("====== initialize2 end ======= ");
    }

    componentDidMount() {
        this.initialize();
    }

    render() {
        const { loading, post } = this.props;        
        if(loading) return null; // 로딩 중일 때는 아무것도 보여주지 않음

        const { title, body, publishedDate, tags } = post.toJS();

        return (
            <div>
                <PostInfo title={title} publishedDate={publishedDate} tags={tags}/>
                <PostBody body={body}/>
            </div>
        )
    }
}

// 1. Action을 리듀서로 dispatch 해준다.
// 2. dispatch후 store에 저장된 값들은 꺼내온다.
export default connect(
    (state) => ({
        post: state.post.get('post'),
        loading: state.pender.pending['post/GET_POST'] // 로딩 상태
    }),
    (dispatch) => ({
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(Post);