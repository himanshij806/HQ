import React from 'react'

const Header = () => {
  return (
    <div className="bg-white py-20 px-8 mx-14">
      <h3 className="text-red-600 font-bold text-left">BUILD 2X FASTER 2X BETTER</h3>
      <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 text-left">
        Design, Build And Scale Your 
      </h1>
      <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 text-left">
         Product Journey With Us.
      </h1>
      <div className="mt-8 flex justify-between items-center">
        
        <img src="src\assets\Talk to us.svg" alt="" className="w-25 h-25 flex items-center"/>
        <p className="text-xs text-gray-500">Web Design / UX UI / Development</p>
      </div>
    </div>
  )
}

export default Header
