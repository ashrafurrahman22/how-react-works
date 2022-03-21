import React from 'react';

const Device = (props) => {
    return (
        <div>
            <h2>I have: {props.name}</h2>
            <h4>Price: {props.price}</h4>
        </div>
    );
};

export default Device;
 
