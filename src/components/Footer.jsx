import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
      <div className="text-center ">
            <h2 className="text-3xl font-bold">HAVE A PRODUCT IDEA?</h2>
            <div className="flex justify-center mt-2">
                <img src="src\assets\Say Hi.svg" alt="" className='flex justify-center h-12 w-auto gap-4'/>
            </div>
          </div>
          <br />
          <br />
          <br />
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <img src="src\assets\HIE HQ.svg" alt="HIE HQ Logo" />
          </div>

          <div className="text-center">
            <img src="src\assets\logos_grammarly-icon.svg" className="inline-block align-text-top" alt="" />
            <p className="inline align-middle ml-2">FOLLOW</p>
            <div className="mt-4 flex justify-center gap-2">
              <img src="src\assets\ph_instagram-logo.svg" alt="" className="h-6 w-auto"/>
              <img src="src\assets\ri_linkedin-line.svg" alt="" className="h-6 w-auto"/>
              <img src="src\assets\ph_behance-logo.svg" alt="" className="h-6 w-auto"/>
              <img src="src\assets\ri_facebook-line.svg" alt="" className="h-6 w-auto"/>
              <img src="src\assets\icon-park-outline_dribble.svg" alt="" className="h-6 w-auto"/>
              <img src="src\assets\tabler_brand-medium.svg" alt="" className="h-6 w-auto"/>
            </div>
        </div>
          <div className="text-right">
            <img src="src\assets\Location.svg" className="inline-block align-text-top" alt="" />
            <p className="inline align-middle ml-2">INDIA</p>
            <p>C Block, Sector 10, Noida</p> 
            <p>Uttar Pradesh 201301</p>
          </div>
        </div>

        <hr className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">Services</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Solutions</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Portfolio</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">About Us</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Blog</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Sitemap</a>
          </div>
          <div className="flex mt-4 md:mt-0">
            <img src="src\assets\Clutch.svg" alt="" className="h-8 w-auto" />
            <img src="src\assets\gesia-linkedin 1.svg" alt="" className="h-8 w-auto ml-4" />
            <img src="src\assets\IBM_Cloud_Essentials 1.svg" alt="" className="h-8 w-auto ml-4" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
