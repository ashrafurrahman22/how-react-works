import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';
import Display from '../display/Display';
import './Watch.css'

const Watch = () => {

    const [steps, setSteps] = useState(0)

    const increaseSteps = () => {
        const newStepsCount = steps  + 1;
        setSteps(newStepsCount);
    }
    
    useEffect (()=> {
        console.log(steps)
    }, [steps])

    return (
        <div className='watch'>
            <h2>This is my Watch</h2>
           <h3>My Current Steps: {steps}</h3>
           <button style={{padding: '15px', borderRadius: '15px'}} onClick={increaseSteps}>De dor.....</button>
           <Display name='Garmin' steps={steps}></Display>
           <Dial steps = {steps}></Dial>
        </div>
    );
};

export default Watch;