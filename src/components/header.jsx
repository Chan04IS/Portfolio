import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {name: 'Education', href: '#education'},
        {name: 'Certificates', href: '#certificates'},
        {name: 'About Me', href: '#about'},
        {name: 'Skills', href: '#skills'},
        {name: 'Projects', href: '#projects'},
    ]

    const scrollToSection = (href) => {
        setIsMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }

  return (
    // Changed: relative to fixed, added top-0, w-full, background color, and blur
    <header className='fixed top-0 w-full z-50 px-6 py-6 bg-[#111827]/90 backdrop-blur-md border-b border-white/5'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div className='text-white text-3xl font-black cursor-pointer flex items-center select-none group'>
            <span className='inline-block transition-transform duration-300 ease-out group-hover:-translate-y-1'>
                PORTFOLIO
            </span>
            <span className='text-primary inline-block transition-transform duration-500 cubic-bezier(0.175,0.885,0.32,1.275) group-hover:scale-150 origin-bottom ml-0.5'>
                .
            </span>
        </div>

        {/* Navigation */}
        <nav className='hidden md:flex items-center gap-10'>
          <ul className= 'flex gap-8'>
            {menuItems.map((item) => (
              <li key={item.name}>
                <button onClick={() => scrollToSection(item.href)}
                  className='text-gray-300 hover:text-white text-base font-medium transition-colors'
                  >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
            <button
              onClick={() => scrollToSection('#contact')}
              className = 'bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-base font-semibold transition-all'>
              Contact Me
            </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
        className='md:hidden text-white'
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={32}/> : <Menu size={32}/>}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        // Fixed typo: insert-0 to inset-0
        <div className='fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden -z-10'
        onClick={() => setIsMenuOpen(false)}>
      </div>
      )}

      {/* Mobile Menu Panel */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-[#111827] z-50 transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} p-8 flex flex-col`}>
        {/* Fixed typo: tzxt-white to text-white */}
        <button className='self-end text-white mb-10'
          onClick={() => setIsMenuOpen(false)}>
          <X size={32}/>
        </button>
        <ul className='flex flex-col gap-8'>
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.href)}
                className='text-white text-xl font-semibold hover:text-primary transition-colors'
              >
                {item.name}
              </button>
            </li>
          ))}
          <li className='pt-6'>
            <button onClick={() => scrollToSection('#contact')}
            className='w-full bg-primary text-white py-4 rounded-xl text-lg font-bold'>
              Contact Me
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;