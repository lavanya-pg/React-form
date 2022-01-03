import React from 'react';
import './Form.css';


const FormSuccess = () => {
    
    return (
        <div className='form-content-right'>
            <h1 className='form-success'>We have recieved your Request!</h1>
            <img className='form-img-2' src='https://raw.githubusercontent.com/briancodex/react-form-v1/286f4a4603bda257ae001dc57c74d7f30bd4eedb/public/img/img-3.svg' alt='' />
            <button className='form-input-btn-db' type="button">get data</button>
        </div>
    );
};

export default FormSuccess;