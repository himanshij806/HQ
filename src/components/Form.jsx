import React from 'react'

const Form = () => {
  return (
    <div className="bg-white p-8">
      <h1 className="text-4xl font-bold mb-8">TALK TO US</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-44 text-left">
        <form className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Name *</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"/>
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">E-mail *</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"/>
          </div>

          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-gray-700">How can we help you?</label>
            <textarea id="message" name="message" rows="4" className="mt-1 block w-full border-gray-300 rounded-md"></textarea>
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-sm text-blue-500">We will contact you ASAP or Schedule a call</a>
          </div>
          <div>
          <img src="src\assets\send request.svg" alt="" className='h-40 w-40'/>
          </div>
        </form>
        <div className="space-y-10">
          <div className='text-left'>
            <p className="font-medium">hi@hiehq.com</p>
            <p className="text-sm text-gray-600">Have a project in mind? Want to </p>
            <p className="text-sm text-gray-600">say hi? We are excited to talk </p>
            <p className="text-sm text-gray-600">to you.</p>
          </div>
          <div className='text-left'>
            <p className="font-medium">hi@hiehq.com</p>
            <p className="text-sm text-gray-600">Have a project in mind? Want to </p>
            <p className="text-sm text-gray-600">say hi? We are excited to talk </p>
            <p className="text-sm text-gray-600">to you.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form