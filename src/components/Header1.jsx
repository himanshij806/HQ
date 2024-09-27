import React from "react";

const Header1 = () => {
  return (
    <div className="bg-white p-10">
      <div className="grid grid-cols-3 ">
        <div className="col-span-1">
          <p className="text-black-500 text-left">01.</p>
          <h2 className="text-4xl font-bold mb-4 text-left">
            Experience Design
          </h2>
        </div>

        <div className="col-span-2">
          <div className="flex">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 border-b-2 border-gray-500 pb-1 w-1/4">
                What We Do
              </h3>
            </div>
            <div className="flex-3">
              <div className="flex space-x-8">
                <ul className="flex-1 text-black ">
                  <li className="list-disc text-left">Interface Design</li>
                  <li className="list-disc text-left">Interaction Design</li>
                  <li className="list-disc text-left">Interface Design</li>
                  <div className="flex items-right space-x-2 space-y-3">
                    <img
                      src="src\assets\Figma.svg"
                      alt="Adobe Photoshop"
                      className="h-6 w-6 space-x-3"
                    />
                    <img
                      src="src\assets\logos_adobe-xd.svg"
                      alt=""
                      className="h-6 w-6"
                    />
                    <img
                      src="src\assets\skill-icons_photoshop.svg"
                      alt="Adobe XD"
                      className="h-6 w-6"
                    />
                    <img
                      src="src\assets\4th.svg"
                      alt="Figma"
                      className="h-6 w-6"
                    />
                  </div>
                </ul>
                <ul className="flex-1 ">
                  <li className="list-disc text-left">Interface Design</li>
                  <li className="list-disc text-left">Interaction Design</li>
                  <li className="list-disc text-left">Interface Design</li>
                </ul>
              </div>
            </div>
            </div>
          <div className="col-span-2  mt-8 ">
            <img
              src="src\assets\Big.svg"
              alt="Mobile Interface"
              className="rounded-lg"
            />
          </div>
          </div>
          
        
      </div>
    </div>
  );
};

export default Header1;
