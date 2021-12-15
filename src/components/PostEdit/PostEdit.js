import React, { useState, useEffect, useRef } from 'react';
import './PostEdit.scss';

const PostEdit = ({ post, submit, cancel }) => {
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
    const titleRef = useRef();
    const bodyRef = useRef();
    useEffect(() => {
        const switchBetweenTags = (e) => {
            if (e.keyCode === 13) {
                bodyRef.current.focus();
                e.preventDefault();
            }
        }
        titleRef.current.addEventListener('keydown', switchBetweenTags)
        // return () => titleRef.current.removeEventListener('keydown', switchBetweenTags)
    }, [])
    useEffect(() => {
        const switchBetweenTags = (e) => {
            if (e.keyCode === 13 && e.shiftKey) {
                return;
            } else if (e.keyCode === 13) {
                titleRef.current.focus();
                e.preventDefault();
            }
        }
        bodyRef.current.addEventListener('keydown', switchBetweenTags)
        // return () => bodyRef.current.removeEventListener('keydown', switchBetweenTags)
    }, [])

    const prepareToSubmit = () => {
        if (!title || !body) {
            return;
        }
        const form = {
            userId: post.userId,
            id: post.id,
            title,
            body
        }
        submit(form);
    }

    return (
        <div className="PostEdit">
            <div className="PostEdit__title">
                <h1>Edit post</h1>
            </div>
            <div className="PostEdit__form">
                <div className="PostEdit__form_group">
                    <label htmlFor="title">Post Title</label>
                    {!title.length && <span className="PostEdit__form_group_error">Sorry, post must contain a title.</span>}
                    <input name="title" ref={titleRef} value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="PostEdit__form_group">
                    <label htmlFor="title">Description</label>
                    {!body.length && <span className="PostEdit__form_group_error">Sorry, this field must be filled out.</span>}
                    <textarea name="body" ref={bodyRef} value={body} rows="5" onChange={(e) => setBody(e.target.value)} />
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