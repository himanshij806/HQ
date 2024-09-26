import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
      <div className="text-center md:text-left">

      <h2 className="text-center font-Bebas-Neue text-[73.08px] font-normal leading-[102.31px] mb-8">
  <span>
    <span className="text-gray-300 text-[60.71px] leading-[100.39px] font-normal">HAVE A </span>
    <span className="text-pink-400 text-[86.08px] leading-[102.31px] font-bold">PRODUCT IDEA?</span>

  </span>
</h2>
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
            <div className="mt-4 flex justify-center md:justify-start gap-2">
            <a href="https://www.instagram.com/hiehq/" target="_blank" rel="noopener noreferrer">
              <img src="src\assets\ph_instagram-logo.svg" alt="" className="h-6 w-auto align-middle"/>
            </a>
            <a href="https://in.linkedin.com/company/hie-hq" target="_blank" rel="noopener noreferrer">
              <img src="src\assets\ri_linkedin-line.svg" alt="" className="h-6 w-auto"/>
            </a>
            <a href="https://www.behance.net/hiestudiohq" target="_blank" rel="noopener noreferrer">
              <img src="src\assets\ph_behance-logo.svg" alt="" className="h-6 w-auto"/>
              </a>
              <a href="https://www.facebook.com/hiehq/" target="_blank" rel="noopener noreferrer">
              <img src="src\assets\ri_facebook-line.svg" alt="" className="h-6 w-auto"/>
              </a>
               <a href="https://dribbble.com/hiehq" target="_blank" rel="noopener noreferrer">
              <img src="src\assets\icon-park-outline_dribble.svg" alt="" className="h-6 w-auto"/>
              </a>
              <a href="https://hiehq.com/" target="_blank" rel="noopener noreferrer">
              <img src="src\assets\tabler_brand-medium.svg" alt="" className="h-6 w-auto"/>
              </a>
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
            <a href="https://hiehq.com/" className="text-gray-500 hover:text-gray-700">Services</a>
            <a href="https://hiehq.com/" className="text-gray-500 hover:text-gray-700">Solutions</a>
            <a href="https://hiehq.com/" className="text-gray-500 hover:text-gray-700">Portfolio</a>
            <a href="https://hiehq.com/" className="text-gray-500 hover:text-gray-700">About Us</a>
            <a href="https://hiehq.com/" className="text-gray-500 hover:text-gray-700">Blog</a>
            <a href="https://hiehq.com/" className="text-gray-500 hover:text-gray-700">Sitemap</a>
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
