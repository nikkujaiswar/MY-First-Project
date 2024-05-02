import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <div className='container'>
    <div className='row-header'>
      <div className='half'>
     
        <h1>AYUSH</h1>
        <Navbar  expand="lg" className="tertiary">

        
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <nav >
    <Nav.Link href="#section4">Home  </Nav.Link>
    <Nav.Link  href="#section1">About  </Nav.Link>
    <Nav.Link  href="#section2">Skills  </Nav.Link>
    <Nav.Link href="#section3">Service</Nav.Link>
  </nav>
</Navbar.Collapse>

</Navbar>     
        
 </div>
 
 </div>
 

 </div>     

 
      
   
  )
}
