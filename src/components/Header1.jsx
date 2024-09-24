import React from 'react'

const Header1 = () => {
  return (
    <div className="bg-white p-10">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <p className="text-black-500">01.</p>
          <h2 className="text-4xl font-bold mb-4">Experience Design</h2>
          
        </div>
        <div className="col-span-2">
          <h3 className="text-xl font-semibold mb-2">What We Do</h3>
          
          <ul className="space-y-2 flex-1">
        <li className="list-disc pl-5">Interface Design</li>
        <li className="list-disc pl-5">Interaction Design</li>
        <li className="list-disc pl-5">Interface Design</li>
      </ul>
      <ul className="space-y-2 flex-1">
        <li className="list-disc pl-5">Interface Design</li>
        <li className="list-disc pl-5">Interaction Design</li>
        <li className="list-disc pl-5">Interface Design</li>
      </ul>
      
          <div className="flex items-right space-x-2">
            <img src="src\assets\Figma.svg" alt="Adobe Photoshop" className="h-6 w-6"/>
            <img src="src\assets\logos_adobe-xd.svg" alt="" className="h-6 w-6"/>
            <img src="src\assets\skill-icons_photoshop.svg" alt="Adobe XD" className="h-6 w-6"/>
            <img src="src\assets\4th.svg" alt="Figma" className="h-6 w-6"/> 
          </div>
          
          <div className="col-span-2 mt-8">
          <img src="src\assets\Big.svg" alt="Mobile Interface" className="rounded-lg shadow-lg"/>
        </div>
        </div>
        </div>
      </div>
   
  )
}

export default Header1