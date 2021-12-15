import React from 'react';
import { useParams } from 'react-router-dom';

const Map = () => {
    const { geo } = useParams();
    console.log(geo);
    return (
        <div></div>
    );
}

export default Map;