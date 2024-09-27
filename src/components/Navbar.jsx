import React from 'react'

const Navbar = () => {
  return (
    <nav  className='bg-white w-full'>

      <div className='flex justify-between items-center'>
      <div className='flex items-center'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4UHS0AxtUVetMvs7a-MrxGAwx53lJeJoeoKTSNQIo7U7sklsoa9b9_XfV2vA0B3oxxCc&usqp=CAU" alt="" className='h-30 w-30 mr-4'/>
      </div>

        <ul className='flex space-x-8 text-gray-600'>
            <li>Home</li>
            <li>Work</li>
            <li>Our Services</li>
            <img src="src\assets\Footer CTA.svg" alt="" />
        </ul>
      </div>
    </nav>
    
  )
}

export default Navbar
