import React from 'react'

function Footer() {
  return (
    <div class="flex flex-col items-center gap-1 p-2 bg-gray-100  mt-8  rounded-lg shadow-lg fixed bottom-0 left-4 right-4 bottom-4">
        <div>
            <p>&copy; 2026 My App. All rights reserved.</p>
        </div>
        <div>
            <p>Contact Us:- ems@gmail.com | Phone: +94 77 123 4567</p>
        </div>
        <div class="flex gap-4">
            <a href="" class="text-blue-500 hover:underline">Policy</a>
            <a href="" class="text-blue-500 hover:underline">Terms</a>
            <a href="" class="text-blue-500 hover:underline">Support</a>
        </div>
    </div>
  )
}

export default Footer