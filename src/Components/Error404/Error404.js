import React from 'react';
import './Error404.css'
import error404 from '../Assets/images/Error404/Error404.png'

const Error404 = () => {
    return (
        <div className='container error-img'>
            <img className='img-fluid' src={error404} alt="" />
        </div>
    );
};

export default Error404;