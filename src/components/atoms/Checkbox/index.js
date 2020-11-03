import React from 'react';
import './checkbox.scss';

const Checkbox = ({ title }) => {
    return(
        <div className="md:flex md:items-left mb-6">
            <div className="md:w-1/7"></div>
            <label className="md:w-2/6 block text-gray-800 font-bold">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">
                    { title }
                </span>
            </label>
        </div>
    )
}

export default Checkbox;