import React from 'react'

function Footer() {
    return (
      <footer className="bg-green-700 text-white mx-0  mt-8 py-8 rounded-xl shadow-inner">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Agri Assist</h2>
            <p className="text-sm text-gray-200">
              Empowering farmers and buyers with real-time agricultural market
              data.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Market
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Request
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Crop Prices
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Farmer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Logistics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">Email: logicalcodersgroup@gmail.com</p>
            <p className="text-sm">Phone: +250 785714552</p>
            <div className="flex gap-3 mt-2">
              <a href="#" className="hover:text-yellow-300">
                Facebook
              </a>
              <a href="#" className="hover:text-yellow-300">
                Twitter
              </a>
              <a href="#" className="hover:text-yellow-300">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-200 pb-10 mt-6">
          &copy; {new Date().getFullYear()} Logical Coders Group. All rights
          reserved.
        </div>
      </footer>
    );
}

export default Footer
