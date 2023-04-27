import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='body_navbar'  >
  <p data-item="Contact App" className='p'>Contact App</p>
  <section>
    <div>Real time example, Contact App:</div>
    <nav>
      <ul className="menuItems">
        <li>
          <a href="#" data-item="Home">
          <Link to={'/'} >home</Link>
          </a>
        </li>
        <li>
          <a href="#" data-item="ContactList">
            <Link to={'/contact'} >ContactList</Link>
          </a>
        </li>
        <li>
          <a href="#" data-item="AddContact">
             <Link to={'/Add'} >AddContact</Link>
          </a>
        </li>
        <li>
          <a href="#" data-item=" Login / Logout">
             <Link to={'/Login'} >Login / Logout</Link>
          </a>
        </li>
        
      </ul>
    </nav>
  </section>
  
  
</div>
  )
}

export default Navbar