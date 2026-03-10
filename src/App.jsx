import React from 'react'
import Nav from './nav'
import Footer from './footer'
import './App.css'

function App() {
  return (
    <div class="font-[Open_Sans] ">

    <Nav />
    <br />
      <h1 class="text-center text-3xl font-bold text-black text-shadow-lg ">Employee Management System</h1>
    
    <div >
      <div class="flex justify-end mr-12 mt-4 mb-4">
          <button className='rounded-xl border-2 border-blue-100 text-xl font-medium cursor-pointer px-4 py-2 bg-blue-500 text-white hover:bg-blue-800 shadow-lg/30' >Add Employee</button>
      </div>
    
    <div class="mr-8 ml-8 mb-8 rounded-lg shadow-lg p-4 bg-gray-100">
    <table class="border border-black w-full text-center hover:bg-gray-100  ">
        <tr class="border border-black odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-white ">
            <th class="border border-black p-2">Employee Name</th>
            <th class="border border-black p-2">Address</th>
            <th class="border border-black p-2">Phone Number</th>
            <th class="border border-black p-2">Email</th>
        </tr>
        <tr class="border border-black odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-white ">
            <td class="border border-black p-2">temp 1</td>
            <td class="border border-black p-2">jaffna</td>
            <td class="border border-black p-2">0713456789</td>
            <td class="border border-black p-2">temp1@gmail.com</td>
        </tr>
        <tr class="border border-black odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-white ">
            <td class="border border-black p-2">temp 2</td>
            <td class="border border-black p-2">kandy</td>
            <td class="border border-black p-2">0734567890</td>
            <td class="border border-black p-2">temp2@gmail.com</td>
        </tr>
        <tr class="border border-black odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-white ">
            <td class="border border-black p-2">temp 3</td>
            <td class="border border-black p-2">colombo</td>
            <td class="border border-black p-2">0786534260</td>
            <td class="border border-black p-2">temp3@gmail.com</td>
        </tr>
        <tr class="border border-black odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-white ">
          <td class="border border-black p-2">temp 4</td>
          <td class="border border-black p-2">mannar</td>
          <td class="border border-black p-2">0772345678</td>
          <td class="border border-black p-2">temp4@gmail.com</td>
        </tr>

    </table>
    </div>
    </div>
   
    <Footer />
    </div>
    
  )
}

export default App