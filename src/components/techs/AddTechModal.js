import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTech } from '../../actions/techActions'; 
import M from 'materialize-css/dist/js/materialize.min.js'
const AddTechModal = ({ addTech }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = async () => {
        if (firstName === '' || lastName === '') {
          M.toast({ html: 'Please enter the first and last Name' });
        } else {
          try {
            await addTech({
              firstName,
              lastName,
            });
      
            // Clear form
            setFirstName('');
            setLastName('');
          } catch (error) {
            console.error('Error adding tech:', error);
      
            if (error.response) {
              M.toast({ html: `Error: ${error.response.statusText}` });
            } else {
              M.toast({ html: 'An error occurred while adding the technician' });
            }
          }
        }
      };
      

  return (
    <div id='add-tech-modal' className='modal'>
        <div className='modal-content'>
            <h4>New Technician</h4>
            <div className='row'>
                <div className='input-field'>
                    <input type='text' name='firstName' value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    <lable htmlFor='FirstName' className='active'>
                        First Name
                    </lable>
                </div>
            </div>
            <div className='row'>
                <div className='input-field'>
                    <input type='text' name='lastName' value={lastName} onChange={e => setLastName(e.target.value)}/>
                    <lable htmlFor='lastName' className='active'>
                        Last Name
                    </lable>
                </div>
            </div>
        </div>
        <div className='modal-footer'>
            <a href="#!" onClick={onSubmit}
            className='modal-close waves-effect blue btn'>
                Enter
            </a>
        </div>
    </div>
  )
}

AddTechModal.propTypes = {
    addTechModal: PropTypes.func.isRequired
}



export default connect(null, { addTech })(AddTechModal)