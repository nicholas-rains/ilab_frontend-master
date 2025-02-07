import React from 'react';
import { useTheme } from '@mui/material/styles';
import SelectSmall from '../../components/SelectSmall/SelectSmall';
import TextInput from '../../components/TextInput/TextInput';
import ControlledRadioButtonsGroup from '../../components/RadioButton/RadioButton';
import Box from '@mui/material/Box';
import { PoaFormFields } from './PoaFormFields'; 

const FormBox = ({ children, isDarkMode }) => {
    const theme = useTheme();
    return (
        <Box
            component="div"
            className="row"
            sx={{
                color: isDarkMode
                    ? theme.palette.customColor.main
                    : theme.palette.text.primary,
                backgroundColor: isDarkMode
                    ? theme.palette.customColor.main
                    : theme.palette.background.paper,
            }}
        >
            {children}
        </Box>
    );
};

const renderFormField = (field) => {
    switch (field.type) {
        case 'text':
            return <TextInput label={field.label} value={field.value} />;
        case 'radio':
            return (
                <ControlledRadioButtonsGroup
                    label={field.label}
                    options={field.options}
                    defaultValue={field.defaultValue}
                    
                />
            );
        case 'select':
            return (
                <SelectSmall
                    label={field.label}
                    defaultValue={field.defaultValue}
                    options={field.options}
                />
            );
        default:
            return null;
    }
};

const PoaForm = ({ formData }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    const POAData = JSON.parse(formData)['responses'];

    const fields = PoaFormFields(POAData);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Form submission logic goes here
        console.log('Form submitted!');
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                color: isDarkMode
                    ? theme.palette.customColor.main
                    : theme.palette.text.primary,
                backgroundColor: isDarkMode
                    ? theme.palette.customColor.main
                    : theme.palette.background.paper,
            }}
        >
            {fields.map((field, index) => (
                <FormBox key={index} isDarkMode={isDarkMode}>
                    {renderFormField(field)}
                </FormBox>
            ))}
        </Box>
    );
};

export default PoaForm;
