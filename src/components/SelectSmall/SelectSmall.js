import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall({ options, label, onChange, onSubmit, defaultValue='' }) { // Add onSubmit prop
  const [option, setOption] = React.useState(defaultValue);

  const handleChange = (event) => {
    setOption(event.target.value);
    if (onChange) onChange(event);
    if (onSubmit) onSubmit(); // Trigger the onSubmit prop
  };

  return (
    <FormControl variant='standard' sx={{ m: 1, minWidth: 400 }} size="small">
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={option}
        label={label}
        onChange={handleChange}
  
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}