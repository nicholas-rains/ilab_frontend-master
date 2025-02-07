import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useTheme } from '@mui/material';

// Accepting `defaultValue` and `options` props
export default function ControlledRadioButtonsGroup({ label, defaultValue, options }) {
  // Initialize value with defaultValue prop
  const [value, setValue] = React.useState(defaultValue);
  const theme = useTheme();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id={`${label}-controlled-radio-buttons-group`}>{label}</FormLabel>
      <RadioGroup
        row
        aria-labelledby={`${label}-controlled-radio-buttons-group`}
        name={`${label}-controlled-radio-buttons-group`}
        value={value}
        onChange={handleChange}
      >
        {options.map((option) => (
          <FormControlLabel key={option} value={option} control={<Radio />} label={option}
          sx={{
            color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
          }} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
