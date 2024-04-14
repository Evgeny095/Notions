import React from 'react';
import {Link} from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div>
            <h2>Error: 404</h2>
            <h4> Sorry this page not found, you can go at <Link to='/'>home</Link> </h4>
        </div>
    );
};

export {NotFoundPage};