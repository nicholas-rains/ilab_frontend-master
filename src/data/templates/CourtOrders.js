import React from 'react';
import SelectSmall from '../../components/SelectSmall/SelectSmall';
import DatePicker from '../../components/DatePicker/DatePicker';
import TextInput from '../../components/TextInput/TextInput';
import ControlledRadioButtonsGroup from '../../components/RadioButton/RadioButton';
import './CourtOrders.css';

const CourtOrderForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Here you can add your form submission logic, e.g., validate the form data and send it to a server
    console.log("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='row'>
            <SelectSmall label='Type' options={['COC', 'Guardianship/Conservator', 'NTBW/Minor', 'Temporary Guardianship', 'Withdrawal by CO Only', 'Other']} />
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
        <div className='row-3'>
            <DatePicker label={'Date of Order'}/>
        </div>
        <div className='row-3'>
            <TextInput label="Gudardian Named" />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Addition Guardians? (Max 2 more)'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Reason for Request: Change Title'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Reason for Request: Close Accounts'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Reason for Request: Credit Card'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Reason for Request: Open Accounts'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Reason for Request: Withdrawal'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Reason for Request: Other'} />
        </div>
        <div className='row-3'>
            <SelectSmall label='Status Issued' options={['Approved', 'Approved - Restricted',
                'Approved with CC', 'Approved with CC - Restricted', 'Declined', 'Declined with CC', 'Pending', 'Pending Legal Department',
                'Pending Multiple', 'Pending with CC', 'Other']} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Forms Sent: Authorization and Indemnification'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Forms Sent: Credit Card Permissions'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Forms Sent: Other'} />
        </div>
                    
    </form>
  );
};

export default CourtOrderForm;
