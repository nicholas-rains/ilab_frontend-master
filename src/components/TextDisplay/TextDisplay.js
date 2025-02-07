import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const TextDisplay = (props) => {
    return (
        <Paper sx={{
            width: '100%',
            height: '75%',
            padding: '10px',
            margin: '10px',
            marginBottom: '0px',
            border: "1px solid #ccc",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)"
        }}>
            <Typography variant="body1">
                {props.textTitle}
            </Typography>
            <Box sx={{
                height: 'calc(100% - 40px)',
                width: '100%',
                overflowY: 'auto'
            }}>
                {props.isCode ? (
                    <SyntaxHighlighter language={props.language} style={oneDark}>
                        {props.text}
                    </SyntaxHighlighter>
                ) : (
                    <Typography>{props.text}</Typography>
                )}
            </Box>
        </Paper>
    );
};

export default TextDisplay;
