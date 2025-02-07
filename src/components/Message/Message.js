import React from 'react';
import { Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Message = (props) => {
    const { text, sender } = props;
    const theme = useTheme();

    return (
        <Paper
            elevation={2}
            sx={{
                backgroundColor: theme.palette.mode === 'dark' 
                    ? (sender === 'user' ? theme.palette.primary.main : theme.palette.customColor.main) 
                    : (sender === 'user' ? '#b7d9f1' : '#afe09e'),
                color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
                margin: '10px',
                padding: '10px',
                alignSelf: sender === 'user' ? 'flex-start' : 'flex-end',
            }}
        >
            <Typography variant="body2">{text}</Typography>
        </Paper>
    );
};

export default Message;