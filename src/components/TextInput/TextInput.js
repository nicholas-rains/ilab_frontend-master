import React from 'react';
import {TextField} from '@mui/material';

const TextInput = ({ label, type, value, setValue, ariaLabel }) => {
    const handleChange = (event) => {
        setValue(event.target.value); // Directly call setValue passed from the parent
    };

    return (
        <TextField
            InputLabelProps={{
                style: { fontSize: '16px' }, // Set font size for label only
            }}
            label={label}
            type={type}
            value={value}
            onChange={handleChange}
            aria-label={ariaLabel}
        />
    );
};

export default TextInput;
