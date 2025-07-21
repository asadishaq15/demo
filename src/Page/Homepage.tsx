import product from "../assets/product.webp"
import bg from "../assets/bg.webp"
import ad from "../assets/add.png"
import logo from "../assets/header-logo.webp"
import logo2 from "../assets/footer-logo.webp"

const ImageViewerPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col" style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'auto',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat',
      backgroundAttachment: 'fixed'
    }}>
      {/* Navbar */}
      <nav style={{
        background: 'linear-gradient(#4b4b4b, #1c1c1c 80%, #2a2a2a)'
      }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-between h-12">
            {/* LEFT: Language selector, Logo, Sign Up */}
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-6 w-auto" src={logo} alt="Logo" />
              </div>
              {/* Language dropdown */}
              <div className="relative inline-block text-left">
                <button type="button" className="inline-flex justify-center items-center px-2 py-1 text-sm font-medium text-white hover:text-gray-300">
                  English
                  <svg className="-mr-1 ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {/* Dropdown menu - hidden by default */}
                <div className="hidden origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Español</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Français</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Deutsch</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Русский</a>
                  </div>
                </div>
              </div>
              {/* Sign Up button */}
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm">
                Sign Up
              </button>
            </div>
            {/* RIGHT: Social and CTA */}
            <div className="flex items-center space-x-3">
              {/* Social media icons */}
              <a href="#" className="text-white hover:text-blue-400">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              {/* Download Lightshot CTA button */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">
                Download Lightshot for free
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Main Image Container with slim white border */}
          <div className="p-1 border border-gray-200">
            <div className="relative bg-gray-50">
              <img 
                className="w-full h-auto max-h-[60vh] object-contain mx-auto" 
                src={product}
                alt="Main content" 
              />
            </div>
          </div>
        </div>
        
        {/* Stacked buttons below product container */}
        <div className="max-w-3xl w-full mt-3 flex flex-col">
          {/* First row - Captured with Lightshot */}
          <div className="flex justify-center items-center py-2">
            <span className="font-medium text-sm">Captured with Lightshot</span>
          </div>
          
          {/* Second row - find similar and report abuse */}
          <div className="flex justify-center items-center space-x-4 py-2">
            <a href="#" className="text-blue-600 hover:underline flex items-center text-sm bg-transparent">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
              find similar
            </a>
            <a href="#" className="text-blue-600 hover:underline flex items-center text-sm bg-transparent">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              report abuse
            </a>
          </div>
          
          {/* Third row - like icon */}
          <div className="flex justify-center items-center py-2">
            <button className="text-gray-600 hover:text-red-500 flex items-center bg-transparent">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
          
        {/* Ad container */}
        <div className="max-w-3xl w-full flex justify-end p-4">
          <div className="w-52 h-52 overflow-hidden rounded">
            <img 
              className="w-full h-full object-contain" 
              src={ad}
              alt="Advertisement" 
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-transparent text-white py-3 mt-auto">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Left: Logo and nav buttons */}
          <div className="flex items-center w-full md:w-auto md:flex-1">
            <img className="h-6 w-auto" src={logo2} alt="Footer Logo" />
            <div className="flex space-x-2 ml-5">
              <a href="#" className="text-blue-500 hover:text-white text-xs px-2 py-1 rounded transition-colors">Download</a>
              <a href="#" className="text-blue-500 hover:text-white text-xs px-2 py-1 rounded transition-colors">Tutorials</a>
              <a href="#" className="text-blue-500 hover:text-white text-xs px-2 py-1 rounded transition-colors">Privacy</a>
              <a href="#" className="text-blue-500 hover:text-white text-xs px-2 py-1 rounded transition-colors">Help</a>
              <a href="#" className="text-blue-500 hover:text-white text-xs px-2 py-1 rounded transition-colors">Advertise</a>
            </div>
          </div>
          {/* Right: copyright */}
          <div className="w-full md:w-auto flex justify-center md:justify-end mt-2 md:mt-0">
            <div className="text-gray-400 text-xs text-right">
              <span className="text-blue-500" > Skillbrains </span >  <span className="text-black" >© 2009-2022</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ImageViewerPage;