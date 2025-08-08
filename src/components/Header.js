```jsx
import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src="/assets/profile.jpg" alt="لوگوی حسین" className="w-12 h-12 rounded-full hover-scale" />
          <h1 className="text-3xl font-bold animate-fade-in">حسین</h1>
        </div>
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        <nav className={`md:flex ${isOpen ? 'block' : 'hidden'} md:items-center w-full md:w-auto absolute md:static top-16 left-0 bg-green-600 md:bg-transparent transition-all duration-300`}>
          <ul className="flex flex-col md:flex-row gap-6 p-6 md:p-0">
            {['خانه', 'درباره من', 'نمونه‌کارها', 'مهارت‌ها', 'تماس'].map((item, index) => (
              <li key={index}>
                <a href={`#${item === 'خانه' ? 'home' : item.toLowerCase().replace(' ', '-')}`} className="text-lg hover:text-gray-200 hover-glow transition-colors px-2 py-1 rounded">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button id="theme-toggle" className="text-3xl focus:outline-none hover-scale" onClick={() => document.body.classList.toggle('dark')}>
          {document.body.classList.contains('dark') ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}

export default Header;
```