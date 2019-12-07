import React, {useState} from 'react';
import Player from '../Player/Player';
import {Box, Text, Button} from 'grommet';

    function Position(props) {
        const [players, setPlayers] = useState([
            {
                name: 'Tom Brady',
                value: 5,
                price: 10,
                position: 'QB',
                id: 1
            },
            {
                name: 'Patrick Mahomes',
                value: 35,
                price: 10,
                position: 'QB',
                id: 2
            },
            {
                name: 'David Johnson',
                value: 2,
                price: 17,
                position: 'RB',
                id: 3
            },
            {
                name: 'Marvin Jones Jr',
                value: 15,
                price: 6,
                position: 'WR',
                id: 4
            },
            {
                name: 'Baltimore Ravens',
                value: 5,
                price: 1,
                position: 'D/ST',
                id: 5
            },
        ]);

        const [counter, setCounter] = useState(6);

        
        const addSlotHandler = () => {
            setPlayers(prevPlayers => [...prevPlayers, {
                name: '',
                value: 0,
                price: 0,
                position: props.name,
                id: counter
            }]);
            setCounter(counter + 1);
        }

        const deletePlayerHandler = playerID => {
            setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== playerID));
        }

        
        return (
        <Box 
            width="small"
            margin="xsmall"
            direction="column"
            background="dark-3"
            alignContent="start"
            justify="between"
            border={{color: 'dark-2', size: 'small'}}>
            <Box 
                background="neutral-4"
                align="start">
                <Text alignSelf="center">{props.name}</Text>
            </Box>
            <ul style={{padding: '0px'}}>
                {players.filter(p => p.position === props.name)
                .map(rp => (
                    <Player 
                    name={rp.name} 
                    value={rp.value} 
                    price={rp.price}
                    id={rp.id}
                    key={rp.id.toString()}
                    delete={deletePlayerHandler} />
                ))}
            </ul>
            <Button 
                onClick={addSlotHandler}
                label="Add Slot"
                primary="true"
                color="neutral-1" />

        </Box>
    )
}

export default Position;