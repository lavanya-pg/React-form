import React, {useState} from 'react';
import Validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup= ({ submitForm }) => {
    const {handleChange, handleSubmit, values, errors} = useForm(
        submitForm,
        Validate
    ); 
      
      const[tripType, setTripType] = useState("Male");
  
      return(
      <div className='form-content-right'>
          <form onSubmit={handleSubmit} className='form' noValidate>
          <h1 >Registration Form!</h1>
          <div className='form-inputs'>
          <label className='form-label'>FirstName:</label>
          <input className='form-input'
              type='text'
              name='firstname'
              placeholder='Enter your firstname'
              value={values.firstname}
              onChange={handleChange}
          />
            {errors.firstname && <p>{errors.firstname}</p>}
          </div>
          <div className='form-inputs'>
          <label className='form-label'>LastName:</label>
          <input className='form-input'
              type='text'
              name='lastname'
              placeholder='Enter your lastname'
              value={values.lastname}
              onChange={handleChange}
          />
            {errors.lastname && <p>{errors.lastname}</p>}
          </div>
          <div className='form-inputs'>
          <label className='form-label'>Contact-No:</label>
          <input className='form-input'
              type="tel"
              name='contactno'
              placeholder='Enter your contactno'
              value={values.contactno}
              onChange={handleChange}
          />
            {errors.contactno && <p>{errors.contactno}</p>}
          </div>
          <div className='form-inputs'>
          <label className='form-label'>Email-id:</label>
          <input className='form-input'
              type='text'
              name='emailid'
              placeholder='Enter your email'
              value={values.emailid}
              onChange={handleChange}
          />
            {errors.emailid && <p>{errors.emailid}</p>}
          </div>
          <div className='form-inputs'>
          <label className='form-label'>Password:</label>
          <input className='form-input'
              type="password"
              name='password'
              placeholder='Enter your password'
              value={values.password}
              onChange={handleChange}
          />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className='form-inputs'>
          <label className='form-label'>Confirm Password:</label>
          <input className='form-input'
              type='text'
              name='confirmpassword'
              placeholder='Enter your confirmpassword'
              value={values.confirmpassword}
              onChange={handleChange}
          />
            {errors.confirmpassword && <p>{errors.confirmpassword}</p>}
          </div>
          <div className='form-inputs'>
          <label className='form-label'>Gender:</label>
          <div className='radio-btn'>
              <div
                  className='radio-btn'
                  style={{color: "white"}}
                  onClick={()=>{
                      setTripType("Male")
                  }}>
                      <input
                          type="radio"
                          value={tripType}
                          name='tripType'
                          checked={tripType == "Male"}
                          />
                          Male
                  </div>
                  <div
                      className="radio-btn"
                      style={{color : "white"}}
                      onClick={()=>{
                          setTripType("Female")
                      }}
                      >
                          <input
                              type="radio"
                              value={tripType}
                              name="tripType"
                              checked={tripType == "Female"}
                              />
                              Female
              </div>
            </div>
          </div>  
          <div className='form-inputs'>
              <label className='form-label'>Age:</label>
              <input className='form-input'
                  type="number"
                  Value="18"/>
          </div>
          <div>
          <button className='form-input-btn' type="submit">Submit</button>
          <span className='form-input-login'>
              Already have an account? Login <a href ='#'> here</a>
          </span>
          </div>
        </form>
      </div>
      );
};
export default FormSignup;