import React from 'react';
import {Box, FormControlLabel, Switch} from '@mui/material';
import './SwitchButton.css';

const SwitchButton = ({activeModel, handleToggle}) => {
    const handleChange = () => {
        handleToggle();
    };

    return (
        <Box className="switch-button-container">
            <FormControlLabel
                control={
                    <Switch
                        checked={activeModel === 'Model 2'}
                        onChange={handleChange}
                        color="primary"
                        className={activeModel === 'Model 1' ? 'switch-left' : 'switch-right'}
                    />
                }
                labelPlacement="start"
                label={activeModel === 'Model 1' ? 'Model 1' : 'Model 2'}
            />
        </Box>
    );
};

export default SwitchButton;
