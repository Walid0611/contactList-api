import './App.css';
import Navbar from './component/Navbar/Navbar';
import HomePage from './component/homepage/HomePage';
import ContactList from './component/contact/ContactList';
import UpadteContact from './component/updatecontact/UpdateContact';
import AddContact from './component/addcontact/AddContact';
import {Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div>
<Routes>
<Route path="/" element ={<Navbar/> }/>
<Route path="/home" element ={<HomePage/>}/>
<Route path="/contact" element ={<ContactList/>}/>
<Route path="/Add" element ={<AddContact/>}/>
<Route path="/Update/:id" element ={<UpadteContact/>}/>
</Routes>     


    </div>
  );
}

export default App;
