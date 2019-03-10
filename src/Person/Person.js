// Component Person
import React from 'react';


const person = (props) => {

    return (
        <div>
             <p>Test a dynamic inputs for example Name is {props.name} and age {props.age}</p>
             <p>{props.print}</p>
             <p>{props.children}</p>
       </div>
    )
};


export default person;
