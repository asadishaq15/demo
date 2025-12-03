import React, { useState, type FC } from "react";
import logo from "../assets/Logo.png";
import bg from "../assets/bg.webp";

const FinalExpenseInsurance: FC = () => {
  const [showTerms, setShowTerms] = useState<boolean>(false);
  const [showPrivacy, setShowPrivacy] = useState<boolean>(false);
  const [showDNS, setShowDNS] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Replace with real submit logic
    console.log("form submitted");
  };

  const openTerms: React.MouseEventHandler<HTMLButtonElement> = () =>
    setShowTerms(true);
  const closeTerms: React.MouseEventHandler<HTMLButtonElement> = () =>
    setShowTerms(false);

  const openPrivacy: React.MouseEventHandler<HTMLButtonElement> = () =>
    setShowPrivacy(true);
  const closePrivacy: React.MouseEventHandler<HTMLButtonElement> = () =>
    setShowPrivacy(false);

  const openDNS: React.MouseEventHandler<HTMLButtonElement> = () =>
    setShowDNS(true);
  const closeDNS: React.MouseEventHandler<HTMLButtonElement> = () =>
    setShowDNS(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
      {/* Header */}
      <header className="w-full py-16 px-8 flex justify-center relative">
  <img
    src={logo}
    alt="Rest Assure Plan"
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-44 md:h-56 lg:h-60 pointer-events-none z-10"
    aria-hidden="false"
  />
</header>
      {/* Main Content */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-6 mb-10">
        {/* Left Information Panel */}
        <div className="md:w-1/2 bg-gradient-to-br from-[#1C542A] to-[#59BA47] text-white p-10 rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold mb-2">Final Expense Insurance</h1>
          <h2 className="text-xl mb-1">For People Ages 45-85</h2>
          <h3 className="text-xl mb-6">Cash Benefits Up To</h3>

          <h2 className="text-5xl font-bold mb-6">$25,000.00</h2>

          <h3 className="text-2xl font-bold mb-2">NO MEDICAL EXAM EASY QUALIFICATION.</h3>
          <p className="text-xl mb-6">Just answer a few simple health questions</p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="bg-white rounded-full p-1 mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#1C542A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-lg">Most People Qualify, even with prior health issues.</p>
            </div>

            <div className="flex items-start">
              <div className="bg-white rounded-full p-1 mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#1C542A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-lg">More affordable than you think – perfect for people on fixed incomes.</p>
            </div>

            <div className="flex items-start">
              <div className="bg-white rounded-full p-1 mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#1C542A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-lg">Become one of the millions of Americans who have chosen Final Expense Insurance.</p>
            </div>
          </div>

          <p className="text-sm italic">*Advertises $25,000 limit. There is no guarantee that plans will cover 100% of expenses.</p>
        </div>

        {/* Right Form Panel */}
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl">
          <div
            className="h-full bg-cover bg-center p-8"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${bg})`,
                        }}
          >
            <div className="bg-black bg-opacity-75 p-8 rounded-lg text-white max-w-md mx-auto">
              <h2 className="text-3xl text-center font-bold mb-6 text-[#80BBE6]">LEARN MORE!</h2>
              <p className="text-center mb-6">If you're between the ages of 45-85, simply fill out the form below.</p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    className="w-full p-3 rounded bg-white text-gray-800 border border-gray-300 focus:border-[#80BBE6] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                    className="w-full p-3 rounded bg-white text-gray-800 border border-gray-300 focus:border-[#80BBE6] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <input
                    type="number"
                    name="age"
                    placeholder="Age*"
                    className="w-full p-3 rounded bg-white text-gray-800 border border-gray-300 focus:border-[#80BBE6] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <select 
                    name="gender" 
                    className="w-full p-3 rounded bg-white text-gray-800 border border-gray-300 focus:border-[#80BBE6] focus:outline-none appearance-none"
                    required
                  >
                    <option value="">Gender*</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded font-bold transition duration-300 shadow-md"
                >
                  Call Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-4">This is an advertisement for life insurance</h3>
            <p className="mb-2">Coverage available for ages 45-85. Benefits and coverage amounts vary by plan.</p>
            <p>There is no guarantee that plans will cover 100% of expenses.</p>
          </div>

          <div className="max-w-3xl mx-auto text-center text-sm mb-8 px-4">
            <p>
              By submitting this form, you agree to be contacted by insurance agents via phone, text, or email regarding insurance
              quotes and information. You understand that your consent is not a condition of purchase, and you may opt out at any
              time.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <button onClick={openTerms} className="text-[#80BBE6] hover:underline font-medium">
              Terms of Service
            </button>
            <span className="text-gray-500">|</span>
            <button onClick={openPrivacy} className="text-[#80BBE6] hover:underline font-medium">
              Privacy Policy
            </button>
            <span className="text-gray-500">|</span>
            <button onClick={openDNS} className="text-[#80BBE6] hover:underline font-medium">
              Do Not Sell My Information
            </button>
          </div>

          <div className="text-center text-xs text-gray-400 max-w-3xl mx-auto px-4">
            <p className="mb-2">This website is operated by independent insurance agents and is not affiliated with any government agency.</p>
            <p>
              We connect consumers with licensed insurance professionals who can provide quotes and information about insurance
              products.
            </p>
          </div>

         
        </div>
      </footer>

      {/* Modal Popups */}
      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-2xl font-bold text-gray-800">Terms of Service</h2>
              <button onClick={closeTerms} className="text-gray-500 hover:text-gray-700 transition-colors" aria-label="Close Terms">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-gray-700 space-y-6">
              <p className="text-sm text-gray-500">Last Updated: December 03, 2025</p>

              <div>
                <h3 className="text-xl font-bold mb-2">1. Acceptance of Terms</h3>
                <p className="mb-2 leading-relaxed">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">2. Use of Website</h3>
                <p className="mb-2 leading-relaxed">This website provides information about insurance products and connects users with licensed insurance agents. The information provided is for general informational purposes only.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">3. Privacy and Data Collection</h3>
                <p className="mb-2 leading-relaxed">Your use of our website is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">4. Contact Information</h3>
                <p className="mb-2 leading-relaxed">By providing your contact information, you consent to be contacted by insurance agents via phone, text, and email regarding insurance products and services.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPrivacy && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-2xl font-bold text-gray-800">Privacy Policy</h2>
              <button onClick={closePrivacy} className="text-gray-500 hover:text-gray-700 transition-colors" aria-label="Close Privacy">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-gray-700 space-y-6">
              <p className="text-sm text-gray-500">Last Updated: December 03, 2025</p>

              <div>
                <h3 className="text-xl font-bold mb-2">Information We Collect</h3>
                <p className="mb-2 leading-relaxed">We collect information you provide directly to us, such as when you fill out a form, request a quote, or contact us.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">How We Use Your Information</h3>
                <p className="mb-2 leading-relaxed">We use the information we collect to connect you with licensed insurance agents, provide you with information about insurance products, and improve our services.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Information Sharing</h3>
                <p className="mb-2 leading-relaxed">We may share your information with licensed insurance agents and partners who can provide you with insurance quotes and information.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Your Rights</h3>
                <p className="mb-2 leading-relaxed">You have the right to access, update, or delete your personal information. You may also opt out of certain communications.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showDNS && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-2xl font-bold text-gray-800">Do Not Sell My Personal Information</h2>
              <button onClick={closeDNS} className="text-gray-500 hover:text-gray-700 transition-colors" aria-label="Close Do Not Sell">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-gray-700 space-y-6">
              <p className="leading-relaxed">Under the California Consumer Privacy Act (CCPA), California residents have the right to opt out of the sale of their personal information.</p>

          

              <p className="leading-relaxed">We will process your request and ensure your personal information is not sold to third parties.</p>

              <p className="leading-relaxed">Please note that while we will not sell your personal information after you submit this request, we may continue to share your information as permitted by law for business purposes such as fulfilling services you have requested.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinalExpenseInsurance;