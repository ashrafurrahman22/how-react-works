import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border: '2px solid black', margin: '20px', padding: '10px', borderRadius: '20px'}}>
            <h3>This is Dial</h3>
            <p>Steps so far: {props.steps}</p>
        </div>
    );
};

export default Dial;