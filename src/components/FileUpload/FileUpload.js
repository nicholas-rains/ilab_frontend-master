import React from 'react';
import {Button, Input, Typography, Box, Container, IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const FileUpload = (props) => {


    return (
        <Box style={{
            display: 'flex',
            width: 'auto',
            // justifyItems: 'space-between',
            padding: '10px',
            alignItems: 'center'
        }}>
            <input type="file" accept={props.acceptedFileTypes}
                   hidden id="file-upload"
                   onChange={props.fileChange}
            />
            <label htmlFor="file-upload">
                <Button variant="contained" component="span">
                    Upload
                </Button>
            </label>
            <Typography variant="body2"
                        style={{marginLeft: '10px'}}
            >
                {props.file
                    ? `${props.file.name}`
                    : 'No File Selected'
                }
            </Typography>
            {props.file && (
                <IconButton color="error" aria-label="delete" onClick={props.handleRemoveFile}>
                    <DeleteIcon/>
                </IconButton>)
            }
            {/*<Button*/}
            {/*    variant="contained"*/}
            {/*    component="label"*/}
            {/*>*/}
            {/*    Upload File*/}
            {/*    <input*/}
            {/*        type="file"*/}
            {/*        onChange={props.fileChange}*/}
            {/*        hidden*/}
            {/*    />*/}
            {/*</Button>*/}
            {/*<Input type="file"*/}
            {/*       color="primary"*/}
            {/*       onChange={props.fileChange}*/}
            {/*/>*/}
        </Box>
    );

};

export default FileUpload;
