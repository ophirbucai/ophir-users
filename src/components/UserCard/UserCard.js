import React from 'react';
import './UserCard.scss';

const UserCard = ({ user }) => {

    return (
        <div className="UserCard">
            <div className="UserCard__name">
                {user.name}
                <span>{`(${user.username})`}</span>
            </div>
            <div className="UserCard__email">
                <a href={`mailto:${user.email}`}>{user.email}</a>
            </div>
            <div className="UserCard__coordinates">
                lat: {user.address.geo.lat}, lng: {user.address.geo.lng}
            </div>
            <div className="UserCard__company">
                {user.company.name}
            </div>
        </div>
    );
}

export default UserCard;