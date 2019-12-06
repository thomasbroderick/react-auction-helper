import React from 'react';
import Position from "../Position/Position";

const layout = (props) => {
    const positions = [
        'QB',
        'RB',
        'WR',
        'TE',
        'Flex',
        'D/ST',
        'K'
    ];
    
    return (
        <div>
            {positions.map(pos => (
                <Position name={pos} key={pos} />
            ))}
        </div>
    )
}

export default layout;