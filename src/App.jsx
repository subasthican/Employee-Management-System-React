import React from 'react'
import Nav from './nav'
import Footer from './footer'
import './App.css'

function App() {
  return (
    <div>

    <Nav />
    <br />
      <h1>Employee Management System</h1>
    <br />
    <div className='table-wrapper'>
      <div className='button-wrapper'>
          <button className='addEmpButton'>Add Employee</button>
      </div>
    
    
    <table className='table'>
        <tr>
            <th>Employee Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>email</th>
        </tr>
        <tr>
            <td>temp 1</td>
            <td>jaffna</td>
            <td>07123456</td>
            <td>temp1@gmail.com</td>
        </tr>
        <tr>
            <td>temp 2</td>
            <td>kandy</td>
            <td>0723456789</td>
            <td>temp2@gmail.com</td>
        </tr>
        <tr>
            <td>temp 3</td>
            <td>colombo</td>
            <td>098653426</td>
            <td>temp3@gmail.com</td>
        </tr>
        <tr>
          <td>temp 4</td>
          <td>mannar</td>
          <td>12345678</td>
          <td>temp4@gmail.com</td>
        </tr>

    </table>
    </div>
   
    <Footer />
    </div>
    
  )
}

export default App