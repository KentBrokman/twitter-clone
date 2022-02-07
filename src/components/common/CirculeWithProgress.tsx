import React from 'react';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


export function CircularProgressWithLabel(props: CircularProgressProps & { value: number, textLength: number }) {

    const less20symbols = props.textLength <= 20
    return (
        <Box position="relative" display="flex" width='inherit' height='inherit' alignItems='center' justifyContent='center'>
            <CircularProgress variant="static"
                size={less20symbols ? 30 : 20}
                thickness={5}
                style={props.textLength <= 0 ? { color: 'red' } : less20symbols ? { color: 'orange' } : undefined}
                value={props.value} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                {less20symbols && <Typography variant="caption" component="div" color="textSecondary"
                    style={props.textLength <= 0 ? { color: 'red' } : undefined}
                >{`${Math.round(
                    props.textLength
                )}`}</Typography>}

            </Box>
        </Box>
    );
}