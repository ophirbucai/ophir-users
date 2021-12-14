import React, { useState } from 'react';
import './PostEdit.scss';

const PostEdit = ({ post, author }) => {
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
    return (
        <div className="PostEdit">
            <div className="PostEdit__title">
                <h1>Edit post by <strong>{author}</strong></h1>
            </div>
            <form className="PostEdit__form">
                <div className="PostEdit__form_group">
                    <label htmlFor="title">Post Title</label>
                    <input name="title" value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="PostEdit__form_group">
                    <label htmlFor="title">Description</label>
                    <input name="body" value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}

export default PostEdit;