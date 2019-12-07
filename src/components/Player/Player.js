import React from 'react';
import { Box, Text } from 'grommet';

function Player(props) {
    
    return(
        <Box 
            round="xsmall"
            alignSelf="start"
            border={{color: 'dark-2', size: 'xsmall'}}
            fill="horizontal"
            background="light-2"
            width="medium">
            <Text 
                alignSelf="center">
                {props.name}
            </Text>
            <ul>
                <li><Text size="small">Value: {props.value}</Text></li>
                <li><Text size="small">Price: {props.price}</Text></li>
            </ul>
            <button onClick={(e) => props.delete(props.id, e)}>Delete</button>
        </Box>
    )
}

export default Player;