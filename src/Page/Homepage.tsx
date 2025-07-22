import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ImageViewerPage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const videoSectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (videoSectionRef.current && textContainerRef.current) {
      // Create a timeline for the text animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: videoSectionRef.current,
          start: "top top", 
          end: "bottom top", // This ensures the pin ends when section bottom reaches viewport top
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 1,
          onLeave: () => {
            console.log("Section left viewport - continuing to next section");
          }
        }
      });
      
      // Add the text animation to the timeline
      tl.to(textContainerRef.current, {
        y: "-100%", 
        ease: "none"
      });
      
      // Clean up on component unmount
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-white/80 backdrop-blur-sm'}`}>
        <nav className="max-w-[980px] mx-auto px-4 h-12 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-black">
              <svg height="44" width="44" viewBox="0 0 17 48" className="h-5 w-5 fill-current">
                <path d="M8.8 27.1c-2.1 0-3.8 1.6-3.8 1.6s1.7 1.6 3.8 1.6 3.8-1.6 3.8-1.6-1.7-1.6-3.8-1.6zm0 5.5c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-19.2H5.1c-.2 0-.4.2-.4.4v.4c0 .2.2.4.4.4h12.6c.2 0 .4-.2.4-.4v-.4c0-.2-.2-.4-.4-.4zM5.1 14.8h12.6c.2 0 .4-.2.4-.4v-.4c0-.2-.2-.4-.4-.4H5.1c-.2 0-.4.2-.4.4v.4c0 .2.2.4.4.4zM5.1 11.3h12.6c.2 0 .4-.2.4-.4v-.4c0-.2-.2-.4-.4-.4H5.1c-.2 0-.4.2-.4.4v.4c0 .2.2.4.4.4z" />
              </svg>
            </a>
          </div>
          {/* Center Nav */}
          <div className="hidden md:flex space-x-9 text-xs font-medium text-black">
            {['Store','Mac','iPad','iPhone','Watch','AirPods','TV & Home','Entertainment','Accessories','Support'].map(item => (
              <a key={item} href="#" className="hover:text-gray-600">{item}</a>
            ))}
          </div>
          {/* Icons */}
          <div className="flex items-center space-x-5">
            <a href="#" className="text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </a>
            <a href="#" className="text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </a>
            <button className="md:hidden text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
        <nav className="max-w-[980px] mx-auto px-4 h-10 flex items-center justify-center bg-transparent">
          <div className="flex space-x-9 text-xs font-medium text-black">
            {['Overview','Tech Specs','Compare','Buy'].map(item => (
              <a key={item} href="#" className="hover:text-gray-600">{item}</a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="w-full bg-black pt-[88px]">
        <div className="relative w-full h-[300px] md:h-[700px] bg-white flex items-center justify-center">
        <video
          className="w-full h-full object-contain object-center"
          autoPlay
          muted
          loop
          src="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/hero-us/medium_2x.mp4"
        />
          <div className="absolute bottom-10 left-0 right-0 text-center">
            <h2 className="text-orange-500 text-4xl font-semibold mb-2">iPhone 14 Pro</h2>
            <p className="text-white text-xl">Pro. Beyond.</p>
            <div className="mt-4 flex justify-center space-x-5">
              <a href="#" className="text-blue-500 hover:underline">Learn more &gt;</a>
              <a href="#" className="text-blue-500 hover:underline">Buy &gt;</a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - This will get pinned */}
      <section
        ref={videoSectionRef}
        className="w-full h-screen overflow-hidden relative"
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          src="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/foundation/medium.mp4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div
          ref={textContainerRef}
          className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-4 text-center"
        >
          <h3 className="text-3xl md:text-5xl font-semibold text-white mb-2">
            Immerse Yourself
          </h3>
          <p className="text-lg md:text-4xl text-white max-w-3xl mt-4">
          Apple Vision Pro seamlessly blends digital content with your physical space.
          </p>
          <p className="text-lg md:text-4xl text-white max-w-3xl mt-4">
          So you can work, watch, relive memories, and connect in ways never before possible.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[980px] mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Why iPhone 14 Pro</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-2">A16 Bionic Chip</h3>
              <p className="text-gray-700">Experience lightning-fast performance with the most powerful smartphone chip ever.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Pro Camera System</h3>
              <p className="text-gray-700">Capture stunning photos and videos with advanced low-light capabilities and 48MP sensor.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Always-On Display</h3>
              <p className="text-gray-700">See key information at a glance without waking your phone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f5f5f7] text-[#86868b] py-8 mt-auto">
        <div className="max-w-[980px] mx-auto px-4">
          <div className="border-b border-[#d2d2d7] pb-4 mb-5">
            <p className="text-xs">Copyright © 2025 Apple Inc. All rights reserved.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-xs">
            <div>
              <h3 className="font-semibold mb-3 text-[#1d1d1f]">Shop and Learn</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Store</a></li>
                <li><a href="#" className="hover:underline">Mac</a></li>
                <li><a href="#" className="hover:underline">iPad</a></li>
                <li><a href="#" className="hover:underline">iPhone</a></li>
                <li><a href="#" className="hover:underline">Watch</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-[#1d1d1f]">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Apple Music</a></li>
                <li><a href="#" className="hover:underline">Apple TV+</a></li>
                <li><a href="#" className="hover:underline">Apple Fitness+</a></li>
                <li><a href="#" className="hover:underline">iCloud</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-[#1d1d1f]">Account</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Manage Your Apple ID</a></li>
                <li><a href="#" className="hover:underline">Apple Store Account</a></li>
                <li><a href="#" className="hover:underline">iCloud.com</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-[#1d1d1f]">Apple Store</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Find a Store</a></li>
                <li><a href="#" className="hover:underline">Genius Bar</a></li>
                <li><a href="#" className="hover:underline">Today at Apple</a></li>
                <li><a href="#" className="hover:underline">Apple Camp</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-[#1d1d1f]">For Business</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Apple and Business</a></li>
                <li><a href="#" className="hover:underline">Shop for Business</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-[#d2d2d7] pt-4 flex flex-col md:flex-row justify-between text-xs">
            <p>More ways to shop: <a href="#" className="text-blue-600 hover:underline">Find an Apple Store</a> or <a href="#" className="text-blue-600 hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy','Terms of Use','Sales and Refunds','Legal','Site Map'].map(link => (
                <a key={link} href="#" className="hover:underline">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ImageViewerPage;