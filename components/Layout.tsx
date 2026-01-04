
import React from 'react';

const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-stone-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0 flex items-center">
          <span className="text-2xl serif font-bold tracking-tight text-emerald-900">EternalBloom</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#hero" className="text-stone-600 hover:text-emerald-800 transition-colors">Home</a>
          <a href="#comparison" className="text-stone-600 hover:text-emerald-800 transition-colors">Comparison</a>
          <a href="#pricing" className="text-stone-600 hover:text-emerald-800 transition-colors">Bouquets</a>
          <a href="#gallery" className="text-stone-600 hover:text-emerald-800 transition-colors">Gallery</a>
        </div>
        <button className="bg-emerald-800 text-white px-5 py-2 rounded-full hover:bg-emerald-900 transition-colors font-medium">
          Shop Now
        </button>
      </div>
    </div>
  </nav>
);

const Footer: React.FC = () => (
  <footer className="bg-stone-900 text-stone-300 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-stone-800 pb-12">
        <div>
          <h3 className="text-white text-xl serif mb-4">EternalBloom</h3>
          <p className="text-sm leading-relaxed">
            Bringing the timeless beauty of nature into your home without the maintenance. 
            High-quality artificial flowers that look and feel just like the real thing.
          </p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-emerald-400">Care Guide</a></li>
            <li><a href="#" className="hover:text-emerald-400">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-emerald-400">Custom Arrangements</a></li>
            <li><a href="#" className="hover:text-emerald-400">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Newsletter</h4>
          <p className="text-sm mb-4">Subscribe for floral inspiration and special offers.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-stone-800 border-none rounded-l-md px-4 py-2 w-full focus:ring-1 focus:ring-emerald-500" 
            />
            <button className="bg-emerald-700 hover:bg-emerald-600 px-4 py-2 rounded-r-md transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs">
        &copy; {new Date().getFullYear()} EternalBloom. All rights reserved.
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow pt-16">
      {children}
    </main>
    <Footer />
  </div>
);
