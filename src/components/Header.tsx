import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingCart, Globe } from 'lucide-react';

const marqueeTexts = [
  'NEW TIAMAT COLLECTION AVAILABLE',
  'NEW ALTERNATE 2025 JERSEY',
  'NEW ALTERNATE COLLECTION AVAILABLE',
  'CHAMPIONSHIP WINNERS',
  'NEW TIAMAT MERCH',
  'LIMITED EDITION ITEMS',
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`
        bg-black text-white py-2 overflow-hidden text-sm
        transition-all duration-300 ease-in-out
        ${isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-12 opacity-100'}
      `}>
        {/* 👇 CORREÇÃO APLICADA AQUI 👇 */}
        {/* Trocamos 'animate-marquee' pela classe 'flex w-max animate-scroll' */}
        {/* Isso usa a mesma animação eficiente do carrossel de parceiros. */}
        <div className="flex w-max animate-scroll">
          {[...marqueeTexts, ...marqueeTexts].map((text, index) => (
            <span key={index} className="mx-8 whitespace-nowrap">
              {text}
            </span>
          ))}
        </div>
      </div>

      <header className={`
        transition-all duration-300 ease-in-out
        ${isScrolled
          ? 'fixed top-4 left-1/2 -translate-x-1/2 w-[98%] bg-black/80 backdrop-blur-sm shadow-xl rounded-xl z-50'
          : 'absolute top-0 w-full mt-12 z-50'
        }
      `}>
        <div className={`max-w-7xl mx-auto px-4 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-0'}`}>
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img
                  src="/logo.png"
                  alt="Tiamat Esports"
                  className={`object-contain transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'} w-auto`}
                />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/products" 
                className={`font-medium transition-colors ${
                  location.pathname === '/products' ? 'text-purple-400' : 'text-white hover:text-purple-400'
                }`}
              >
                SHOP
              </Link>
              <Link 
                to="/games" 
                className={`font-medium transition-colors ${
                  location.pathname === '/games' || location.pathname.includes('/games/') ? 'text-purple-400' : 'text-white hover:text-purple-400'
                }`}
              >
                GAMES
              </Link>
              <Link 
                to="/about" 
                className={`font-medium transition-colors ${
                  location.pathname === '/about' ? 'text-purple-400' : 'text-white hover:text-purple-400'
                }`}
              >
                ABOUT
              </Link>
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-white">
              </div>
              <Search className="h-5 w-5 text-white hover:text-purple-400 cursor-pointer transition-colors" />
              <Link to="/login">
                <User className="h-5 w-5 text-white hover:text-purple-400 cursor-pointer transition-colors" />
              </Link>
              <ShoppingCart className="h-5 w-5 text-white hover:text-purple-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;