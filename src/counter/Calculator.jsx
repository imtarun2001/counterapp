import React from 'react';
import { useState } from 'react';
import './Calculator.css';

function Calculator() {
    const [value, setValue] = useState(0);
    function addHandler() {
        setValue(value+1);
    }
    function subHandler() {
        if(value>0) {
            setValue(value-1);
        }
        else {
            setValue(0);
        }
    }
  return (
    <div className='calculator'>
        <div onClick={subHandler} className='btn'>-</div>
        <p className='val'>{value}</p>
        <div onClick={addHandler} className='btn'>+</div>
    </div>
  )
}

export default Calculator