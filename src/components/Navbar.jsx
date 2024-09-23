import React from 'react'

const Navbar = () => {
  return (
    <nav  className='bg-white '>

      <div className='container mx-auto flex justify-between items-center list-none'>
      <div className='flex items-center'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4UHS0AxtUVetMvs7a-MrxGAwx53lJeJoeoKTSNQIo7U7sklsoa9b9_XfV2vA0B3oxxCc&usqp=CAU" alt="" className='h-30 w-30 mr-4'/>
      </div>

        <ul className='flex space-x-8 text-gray-600'>
            <li>Home</li>
            <li>Work</li>
            <li>Our Services</li>
        

        <button className="bg-gray-900 text-white rounded-full px-6 py-2 flex items-center hover:bg-gray-800 focus:outline-none">
        <span className="mr-2">Let's Talk</span>
        <svg
          xmlns="https://www.figma.com/design/WdkGREEtJLnjUCusFymr5O/Project-SF?node-id=1-23&t=0scI334UoINHncgE-4" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.6a1 1 0 00.772 1.769A8.372 8.372 0 008 15a8.372 8.372 0 005.604-2.08l.6 1.548a1 1 0 001.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7 18 2 13 2 8z" />
        </svg>
      </button>
        </ul>
      </div>
    </nav>
    
  )
}

export default Navbar
