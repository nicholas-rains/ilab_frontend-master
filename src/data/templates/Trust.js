import React from 'react';
import SelectSmall from '../../components/SelectSmall/SelectSmall';
import TextInput from '../../components/TextInput/TextInput';
import DatePicker  from '../../components/DatePicker/DatePicker';
import ControlledRadioButtonsGroup from '../../components/RadioButton/RadioButton';


const TrustForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Here you can add your form submission logic, e.g., validate the form data and send it to a server
    console.log("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='row'>
            <SelectSmall label={'Type'} options={['Irrevocable', 'Revocable', 'Trust under Will', 'Other']} />
        </div>
        <div className='row'>
            <DatePicker label={'Trust Date (Orginal)'} />
        </div>
        <div className='row'>
            <DatePicker label={'Restated Trust Date'} />
        </div>
        <div className='row'>
            <SelectSmall label='State Issued' options={['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 
                                                        'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 
                                                        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
                                                        'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 
                                                        'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
                                                        ]} />
        </div>
        <div className='row'>
            <TextInput label={'Trust Name'} />
        </div>
        <div className='row'>
            <TextInput label={'Grantor(s) Named'} />
        </div>
        <div className='row'>
            <TextInput label={'Trustee Named'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Additional Trustees to be named? (max of 3)'} />
        </div>
        <div className='row'>
            <TextInput label={'List all accountes to be converted or to have the trustees changed'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Reason for Request: Change Title to Trust Title'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Reason for Request: Change Trustee(s)'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Reason for Request: Close Account(s)'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Reason for Request: Complete Loan Trust Rider'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Reason for Request: Death of Trustee or Grantor'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Reason for Request: IRA'} /> 
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Reason for Request: Open Account(s)'} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Reason for Request: POA on Trust'} /> 
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Reason for Request: Other'} />  
        </div>
        <div className='row'>
            <SelectSmall label='Status' options={['Approved', 'Approved - Restricted', 'Declined', 'Pending', 'Pending Legal Department', 'Pending Multiple', 'Other']} />
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Forms Sent: Authorization and Indemnification'} />  
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Forms Sent: Account Transfer Directive'} />  
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Forms Sent: Trust Rider'} />  
        </div>
        <div className='row'>
            <ControlledRadioButtonsGroup label={'Forms Sent: Other'} />  
        </div>
    </form>
  );
};

export default TrustForm;