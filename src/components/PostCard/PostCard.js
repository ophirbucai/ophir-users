import React from 'react';
import './PostCard.scss';

const PostCard = ({ post }) => {
    return (
        <div className="PostCard">
            <div className="PostCard__title">
                <h4>{post.title}</h4>
            </div>
            <div className="PostCard__body">
                <p>{post.body}</p>
            </div>
        </div>
    );
}

export default PostCard;