import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Specialist = () => {
    const { name, degree } = useParams();
    const { photoSrc } = window.history.state;

    return (
        <div>
            <h1>{name}</h1>
            <h2>{degree}</h2>
            <img src={photoSrc} alt="Specialist Photo" />
        </div>
    );
};

export default Specialist;
