
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Calendar, Users, LogIn, LogOut, List } from 'lucide-react';
// import { LoginPage } from './Login';
// import { GetRegistration } from './getRegistration'; // Changed to PascalCase

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isLoginOpen, setIsLoginOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const checkLoginStatus = () => {
  //   const authData = localStorage.getItem("authData");
  //   if (authData) {
  //     try {
  //       const parsedData = JSON.parse(authData);
  //       setIsLoggedIn(!!parsedData.admin?.email);
  //     } catch (error) {
  //       console.error("Error parsing authData from localStorage", error);
  //       setIsLoggedIn(false);
  //     }
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // };

  // useEffect(() => {
  //   checkLoginStatus();
  // }, []);

  const menuItems = [
    { icon: <Home className="w-4 h-4" />, label: 'Home' },
    { icon: <Info className="w-4 h-4" />, label: 'About' },
    { icon: <Calendar className="w-4 h-4" />, label: 'Events' },
    { icon: <Users className="w-4 h-4" />, label: 'Sponsors' },
    // ...(isLoggedIn
    //   ? [
    //       { icon: <List className="w-4 h-4" />, label: 'Get Registration' },
    //       { icon: <LogOut className="w-4 h-4" />, label: 'Logout' },
    //     ]
    //   : [{ icon: <LogIn className="w-4 h-4" />, label: 'Admin Login' }]),
  ];

  // const handleLogout = () => {
  //   localStorage.removeItem("authData");
  //   setIsLoggedIn(false);
  //   window.dispatchEvent(new Event("storage"));
  // };

  const scrollToSection = (section: string) => {
    // if (section === 'Admin Login') {
    //   setIsLoginOpen(true);
    // } else if (section === 'Logout') {
    //   handleLogout();
    // } else if (section === 'Get Registration') {
    //   setIsRegistrationOpen(true);
    // } else {
      const element = document.getElementById(section.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
       <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-2">
        <div className="flex items-center justify-between h-14 md:h-16">
          <div className="flex-shrink-0">
            <img
              src="/images/AbhiyantrixLogo2.png"
              alt="https://vzjmqivzndfloheg.public.blob.vercel-storage.com/AbhiyantrixLogo2-pVB6fkjLJsOcp8ybf5ZRbUOVw2VY36.png"
              width={90}
              height={30}
              className="w-auto h-12 md:h-34"></img>
            
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.label)}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition-colors"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.label)}
                className="text-gray-300 hover:text-blue-400 block px-3 py-2.5 rounded-md text-base font-medium w-full text-left flex items-center space-x-2"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* {isLoginOpen && (
        <LoginPage
          onClose={() => setIsLoginOpen(false)}
          onLoginSuccess={() => {
            checkLoginStatus();
            setIsLoginOpen(false);
          }}
        />
      )} */}

      {/* {isRegistrationOpen && (
        <GetRegistration onClose={() => setIsRegistrationOpen(false)} />
      )} */}
    </nav>
  );
}

