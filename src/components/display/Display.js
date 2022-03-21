import React from 'react';

const Display = (props) => {
    return (
        <div style={{border: '2px solid black', margin: '20px', padding: '10px', borderRadius: '20px'}}>
            <h2>Name: {props.name}</h2>
            <h4>Steps: {props.steps}</h4>
        </div>
    );
};

export default Display;