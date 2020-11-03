import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import './link.scss';

const Link = ({ title, path }) => {
    const history = useHistory();

    function onclick() {
        if(path) return history.push(path);
    };

    return(
        <p className="link" onClick={ onclick }>{ title }</p>
    )

}

export default Link;