import React, { useState } from 'react'

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
   
  return (
    <div>
  <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://play-lh.googleusercontent.com/H7CeOt54yCbW76NQqSfPs6EqJf3YwHq6cAYWE9ClV5fqFjezuYCPa3klsxEUdby1xag=w240-h480-rw'
              height='40'
              width='100%'
              alt=''
              loading='lazy'
            />
            Discount Calculator
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header