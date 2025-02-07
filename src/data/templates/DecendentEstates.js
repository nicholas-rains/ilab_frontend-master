import React from 'react';
import SelectSmall from '../../components/SelectSmall/SelectSmall';
import DatePicker from '../../components/DatePicker/DatePicker';
import TextInput from '../../components/TextInput/TextInput';
import ControlledRadioButtonsGroup from '../../components/RadioButton/RadioButton';

const DecendantEstateForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Here you can add your form submission logic, e.g., validate the form data and send it to a server
    console.log("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='row'>
         <ControlledRadioButtonsGroup label={'Type: Court Order'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Type: Death Certificate'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Type: Foreign Issued'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Type: Letters of Testamentary/Administration'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Type: Small Estate Affidavit'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Type: Other'} />
        </div>
        <div className='row'>
            <SelectSmall label='State Issued' options={[
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 
            'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 
            'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
            'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 
            'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
                                                        ]} />
        </div>
        <div className='row'>
            <TextInput label="Name of Fiduciary" />
        </div>
        <div>
            <DatePicker label={'Date of Document'}/>
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Reason for Request: Close Account(s)'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Reason for Request: Convert Exisiting Account(s)'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Reason for Request: IRA'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Reason for Request: Open Account(s)'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Reason for Request: Other'} />
        </div>
        <div className='row'>
            <SelectSmall label='Status' options={['Approved', 'Approved-Restriced', 'Declined', 'N/A (Refer to P&P-Death of a Client',
                                                        'Pending', 'Pending Legal Department', 'Pending Multiple', 'Other' ]} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Forms Sent: Affidavit of Domicile'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Forms Sent: Authorization and Indemification'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Forms Sent: Other'} />
        </div>
    </form>
  );
};

export default DecendantEstateForm;