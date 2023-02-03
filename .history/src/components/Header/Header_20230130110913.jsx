import React from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link  } from 'react-router-dom';
import logo from "../../assets/images/logo.png"

const nav__links=[
  {
    path:'/home',
    display: 'Home'
  },
  {
    path:'#',
    display: 'About'
  },
  {
    path:'/tours',
    display: 'Tours'
  },
]

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center 
           justify-content-between ">
            {/* Logo start */}
            <div className="logo">
              <img src={logo} />
            </div>
            {/* Logo ends */}

          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header