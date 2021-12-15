import React, { useState } from 'react';
import './PostEdit.scss';

const PostEdit = ({ post, submit, cancel }) => {
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
    const prepareToSubmit = (e) => {
        e.preventDefault();
        if (!title || !body) {
            return;
        }
        submit({userId: post.userId, id: post.id, title, body});
    }

    return (
        <div className="PostEdit">
            <div className="PostEdit__title">
                <h1>Edit post </h1>
            </div>
            <div className="PostEdit__form">
                <div className="PostEdit__form_group">
                    <label htmlFor="title">Post Title</label>
                    <input name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="PostEdit__form_group">
                    <label htmlFor="title">Description</label>
                    <textarea name="body" value={body} rows="5" onChange={(e) => setBody(e.target.value)} />
                </div>
                <div className="PostEdit__form_actions">
                    <button onClick={cancel} type="button" className="PostEdit__form_actions_cancel">Cancel</button>
                    <button onClick={prepareToSubmit} type="button" className="PostEdit__form_actions_confirm">Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default PostEdit;