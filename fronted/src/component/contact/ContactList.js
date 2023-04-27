import React ,{useEffect} from 'react'
import ContactCard from './ContactCard';
import {useSelector, useDispatch } from 'react-redux';
//
import {setContact } from '../../store/contactSlice'
//
import {fetchAllcontact} from '../../api/contactApi';


const ContactList = () => {
  const contact =useSelector(state=>state.contactElement)
  console.log('contactElement', contact)
  
   const getAllContact =  async() => {
const data=  await fetchAllcontact()          
console.log('settings:',data.contact)
dispatch(setContact(data.contact))

}
useEffect(()=>{getAllContact()},[])

const gotoUpdate = (id) => {

}

  
  
  return (
    <div>{
       contact.map((e)=> <ContactCard    mini={e}    getAllContact={getAllContact}  gotoUpdate={gotoUpdate}  /> )}
    
    </div>
  )
}

export default ContactList