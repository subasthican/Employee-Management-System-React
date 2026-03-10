import React from 'react'

function Nav() {
  return (
    <div class="flex place-content-between content-center  p-4 bg-gray-100 rounded-full shadow-lg m-8 ">
        <div>
            <ul class="flex list-none gap-5">
                 <li><a class="text-xl italic text-shadow-lg/30 text-blue-500" href="/">EMS Company</a></li>
            </ul>
        </div>
        <div>
            <ul class="flex list-none gap-5" >
                <li><a class="text-xl hover:text-blue-500" href="/">Home</a></li>
                <li><a class="text-xl hover:text-blue-500" href="/">About</a></li>
                <li><a class="text-xl hover:text-blue-500" href="/">Contact</a></li>
                <li><a class="text-xl hover:text-red-500" href="/">LogOut</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav