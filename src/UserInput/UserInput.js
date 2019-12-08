import React from 'react';

const userInput = (props) => {

    const inputStyle = {
        border: '1px solid green'
    };

    return(
        <div>
            <input 
                type="text" 
                style={inputStyle}
                onChange={props.changed} 
                value={props.currentUserName}/>
        </div>
    );
}

export default userInput;