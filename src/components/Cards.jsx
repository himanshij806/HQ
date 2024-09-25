import React from 'react'

const Cards = () => {
  return (

    <div className="bg-gray-800 text-white py-12 px-4">
      <h2 className="text-left text-4xl font-bold mb-8">INDUSTRIES COVERED</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-gray-700 rounded-lg p-6 space-y-4">
          <h3 className="text-xl text-left font-semibold">Fintech & Financial</h3>
          <ul className="list-disc  pl-4 marker:text-gray-500">
            <li className="text-left">Wallet and Banking Applications</li>
            <li className="text-left">Wallet and Banking Applications</li>
            <li className="text-left">Wallet and Banking Applications</li>
            <li className="text-left">Wallet and Banking Applications</li>
            <li className="text-left">Wallet and Banking Applications</li>
          </ul>
          <button className="text-sm text-gray-400 bg-gray-900 rounded-md px-4 py-2 mt-4 float-left hover:bg-blue-100">OUR WORKS</button>
        </div>

        <div className="bg-gray-700 rounded-lg p-6 space-y-4">
          <h3 className="text-xl text-left font-semibold">Fintech & Financial</h3>
          <ul className="list-disc pl-4 marker:text-gray-500">
            <li className="text-left">Wallet and Banking Applications</li>
            <li className="text-left">Wallet and Banking Applications</li>
            <li className="text-left">Wallet and Banking Applications</li>
            <li className="text-left">Wallet and Banking Applications</li>
            <li className="text-left">Wallet and Banking Applications</li>
          </ul>
          <button className="text-sm text-gray-400 bg-gray-900 rounded-md px-4 py-2 mt-4 float-left hover:bg-blue-100">OUR WORKS</button>
        </div>

        <div className="bg-gray-700 rounded-lg p-6 space-y-4">
        <h3 className="text-xl text-left font-semibold">Fintech & Financial</h3>
          <ul className="list-disc pl-4 marker:text-gray-500">
            <li className="text-left">Wallet and Banking Applications</li>
            <li className="text-left">Wallet and Banking Applications</li>
            <li className="text-left">Wallet and Banking Applications</li>
            <li className="text-left">Wallet and Banking Applications</li>
            <li className="text-left">Wallet and Banking Applications</li>
          </ul>
          <button className="text-sm text-gray-400 bg-gray-900 rounded-md px-4 py-2 mt-4 float-left hover:bg-blue-100">OUR WORKS</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;