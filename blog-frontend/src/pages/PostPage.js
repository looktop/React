import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import Post from 'containers/post/Post';

// match : 현재 라우트의 id를 넣어준다.
const PostPage = ({match}) => {
    const { id } = match.params;
    return (
        <PageTemplate>
            <Post id={id}/>
        </PageTemplate>
    );
};

export default PostPage;