import React from 'react';
import SelectSmall from '../../components/SelectSmall/SelectSmall';
import TextInput from '../../components/TextInput/TextInput';


const MedallionForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Here you can add your form submission logic, e.g., validate the form data and send it to a server
    console.log("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='row'>
            <SelectSmall label={'Type'} options={['Business', 'Court Order', 'Decendent', 'Does not need to be reviewed', 'POA', 
                                                    'Savings Bonds', 'Signing on own behalf', 'Trust', 'UTMA', 'Other']} />
        </div>
        <div className='row'>
            <TextInput label={"Current owner of Securities"} />
        </div>
        <div className='row'>
            <TextInput label={'Who is requesting Medallion'} />
        </div>
        <div className='row'>
            <SelectSmall label={'Type'} options={['Approved', 'Declined', 'Pending', 'Pending Legal Departmet', 'Pending Multiple',
                                                    'N/A (Refer to P&P Medallion Stamp Resource Page)', 'Other (See Notes)']} />
        </div>
    </form>
  );
};

export default MedallionForm;