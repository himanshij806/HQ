import React from 'react'

const Cards2 = () => {
  return (
    <div className="bg-white text-gray-400 py-12 px-4">
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
    
        <h2 className="text-left text-5xl mb-8">
        <span>
          <span className="text-gray-300">HOW WE </span>
          <span className="text-black font-bold">ENGAGE</span>
        </span>
      </h2>
      <img src="src\assets\Group 37299.svg" alt="" className='h-15 w-20 md:h-20 md:w-20 justify-self-end'/>
    </div>    

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 whitespace-pre-wrap overflow-y-auto">
        <div className="bg-white border border-gray-300 rounded-lg p-6 space-y-4 max-w-7xl mx-auto">
            <h1 className="text-4xl text-left font-semibold">Cash and Equity</h1>
        <div className="bg-white rounded-lg p-6 space-y-4 text-left">
          <h3 className="text-xl text-left font-semibold text-black">Cash & Equity</h3>
          <p className='text-left'>We welcome the obscure vision through Time and Material Model that supports the Agile Development Process. This is a model where the client only pays for the time and resources spent on the project.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-6 space-y-4 ">
            <h1 className="text-4xl text-left font-semibold">Hourly Engagement</h1>
        <div className="bg-white rounded-lg p-6 space-y-4">
          <h3 className="text-xl text-left font-semibold text-black">Cash & Equity</h3>
          <p className='text-left'>We welcome the obscure vision through Time and Material Model that supports the Agile Development Process. This is a model where the client only pays for the time and resources spent on the project.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-6 space-y-4 ">
            <h1 className="text-4xl text-left font-semibold">Sprint</h1>
        <div className="bg-white rounded-lg p-6 space-y-4">
          <h3 className="text-xl text-left font-semibold text-black">Cash & Equity</h3>
          <p className='text-left'>We welcome the obscure vision through Time and Material Model that supports the Agile Development Process. This is a model where the client only pays for the time and resources spent on the project.</p>
          </div>
        </div>

        <div>
            <img src="src\assets\Talk to us.svg " alt="" className='h-25 w-25'/>
        </div>

      </div>
    </div>
  )
}

export default Cards2