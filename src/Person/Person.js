import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p>I am {props.name} and I am {props.age} years old.</p>
            <p onClick={props.click}>{props.children}</p>
            <input onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default person;