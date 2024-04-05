import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import DoctorList from '../Pages/DoctorList';


function Header() {
  return (
    <div>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <h2>BARK AVENUE</h2>
          </MDBNavbarBrand>
          <div className='justify-content-end d-flex'>
            <Link to='/home'>
              <div className='ms-2'>
                HOME
              </div>
            </Link>
            <Link to='/doctor'>
              <div className='ms-3'>
                DOCTORS
              </div>

            </Link>
            <Link to='/adminLogin'><div className='ms-2'>
              ADMIN
            </div></Link>
          </div>

        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header