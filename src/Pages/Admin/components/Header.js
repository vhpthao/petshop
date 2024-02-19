import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Header.css'


function Header() {
  let user = JSON.parse(localStorage.getItem("user-info"));

  console.log("info user", user);
  
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
    localStorage.clear();
  }

  return (
    <div className='navbar'>
      <Navbar >
        <Container >
          <Navbar.Brand>Pet-Shop Admin</Navbar.Brand>
          <Nav className="me-auto" style={{float:'left'}}>
                  <Nav.Link href="/admin/products">List product</Nav.Link>
                  <Nav.Link href="/admin/categories">List category</Nav.Link>
                  <Nav.Link href="/admin/products/search">Search product</Nav.Link>
          </Nav>
            {localStorage.getItem("user-info") ?
          <Nav style={{float: 'right'}}>
            <NavDropdown title={user && user.name}>
            <Nav.Item className='p-3' onClick={handleLogout}>
          Logout
            </Nav.Item>
            </NavDropdown>
         
          </Nav>
          : null
           }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header