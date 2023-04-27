import React,{useState} from 'react';
import "./AddContact.css"
import{useNavigate} from 'react-router';
import {postContact } from '../../api/contactApi'
const Addcontact = () => {

 const navigate=useNavigate()
 const [FirstName,setFirstName]=useState('')
 const [LastName,setLastName]=useState('')
 const [Email,setEmail]=useState('')
 const [Age,setAge]=useState('0')
 const [Adress,setAdress]=useState('')
}
 const handleAdd= async(value)=>{
  await  postContact(value)
  navigate('/contact')
 }

const AddContact = () => {
  return (
    <div className='bodyAddContact'   >
    <div className="container">
  {/* code here */}
  <div className="card">
    <div className="card-image">
      <h2 className="card-heading">
        Get started
        <small>Let us create your contact</small>
      </h2>
    </div>
    <form className="card-form">
      <div className="input">
        <input
          type="text"
          className="input-field"
          defaultValue="Alexander Parkinson"
          required=""
        />
        <label className="input-label">Full name</label>
      </div>
      <div className="input">
        <input
          type="text"
          className="input-field"
          defaultValue="vlockn@gmail.com"
          required=""
        />
        <label className="input-label">Email</label>
      </div>
      <div className="input">
        <input type="password" className="input-field" required="" />
        <label className="input-label">Password</label>
      </div>
      <div className="action">
        <button className="action-button">Get started</button>
      </div>
    </form>
    <div className="card-info">
      <p>
        By signing up you are agreeing to our{" "}
        <a href="#">Terms and Conditions</a>
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default AddContact