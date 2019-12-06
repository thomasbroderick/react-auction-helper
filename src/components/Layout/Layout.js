import React from 'react';
import Position from "../Position/Position";
import { Box } from 'grommet';

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
        <Box 
            direction="row"
            pad="medium"
            background="light-3">
            {positions.map(pos => (
                <Position name={pos} key={pos} />
            ))}
        </Box>
    )
}

export default layout;