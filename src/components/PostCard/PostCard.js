import React from 'react';
import './PostCard.scss';

const PostCard = ({ post }) => {
    return (
        <div className="PostCard">
            <div className="PostCard__title">
                <h4>{post.title}</h4>
            </div>
            <div className="PostCard__body">
                {post.body}
            </div>
        </div>
    );
}

export default PostCard;