import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import './DatePicker.css'; // Make sure this path is correct

export default function ControlledComponent({label}) {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer className="datePickerContainer" components={['DatePicker']}>
        <DatePicker 
          label={label} 
          value={value} 
          onChange={(newValue) => setValue(newValue)} 
          renderInput={(params) => <TextField {...params} fullWidth className="datePickerInput" />}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
