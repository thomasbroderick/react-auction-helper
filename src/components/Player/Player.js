import React from 'react';

function Player(props) {
    
    return(
        <div>
            <h3>
                {props.name}
            </h3>
            <ul>
                <li>Value: {props.value}</li>
                <li>Price: {props.price}</li>
            </ul>
            <button onClick={(e) => props.delete(props.id, e)}>Delete</button>
        </div>
    )
}

export default Player;