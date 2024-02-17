
import './App.css';

import Header from './components/Headre';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';


function App() {
  const [amount, setamount] = useState("")
  const [discount, setdiscount] = useState("")
  const [discountedprice, setdiscountedprice] = useState("")
  const [savings, setsavings] = useState("")
  function calculate() {
    const output = amount * (1 - (discount / 100))
    // console.log(output);
    setdiscountedprice(output)
    setsavings(amount - output)
  }
  console.log(discountedprice, savings);
  function reset() {
    setamount("")
    setdiscount("")
    setdiscountedprice("")
    setsavings("")
  }
  return (
    <div className="App">
      <Header />
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <div >
              <div className="input1" style={{}}>
                <h3> Enter  discount details </h3>
                <TextField value={amount || ""} onChange={(eve) => setamount(eve.target.value)} className='mt-3 text-dark' id="outlined-dark" label="Amount" variant="outlined" />
                <TextField value={discount || ""} onChange={(eve) => setdiscount(eve.target.value)} className='mt-3' id="outlined-basic" label="Discount %" variant="outlined" />
                <div className='btn1'>
                  <Button onClick={calculate} className='p-2' variant="contained">Calculate</Button>
                </div>
              </div>
              
            </div>
          </Col>
          <Col>
            <div className='seccol shadow-lg'>
              

              <div className=''>
                <div id='item1' className="box">
                  <p>Amount :</p>
                  <p style={{ position: "relative", bottom: "20px" }} className='fs-4'> Rs: {amount}</p>
                </div>
                <div id='item2' className="box">
                  <p>Discount % :</p>
                  <p style={{ position: "relative", bottom: "20px" }} className='fs-4'>{discount}%</p>
                </div>
                <div id='item3' className="box">
                  <p>your saving :</p>
                  <p style={{ position: "relative", bottom: "20px" }} className='fs-4'>Rs: {savings}</p>
                </div>
                <div id='item4' className="box">
                  <p>Discounted Amount :</p>
                  <p style={{ position: "relative", bottom: "20px" }} className='fs-4'>Rs: {discountedprice} </p>
                </div>
              </div>
              <div className='text-center'>
                <Button onClick={reset} variant="contained" color="error">
                  Reset
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
