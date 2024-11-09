import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: 'New Arrivals', href: '#' },
    { name: 'Earrings', href: '#' },
    { name: 'Necklaces', href: '#' },
    { name: 'Rings', href: '#' },
    { name: 'Bracelets', href: '#' },
    { name: 'Collections', href: '#' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="relative">
      <nav className={`w-full transition-all duration-500 z-40 ${
        isSticky
          ? 'fixed top-0 bg-white/95 backdrop-blur-md shadow-lg'
          : 'relative bg-white'
      }`}>
        <div className="w-full border-b border-gray-100">
          <div className="mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-800 hover:text-gray-600 transition-colors duration-300"
                >
                  <div className="relative w-6 h-5">
                    <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? 'rotate-45 top-2 z-50' : 'rotate-0 top-0'
                    }`} />
                    <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? 'opacity-0' : 'opacity-100 top-2'
                    }`} />
                    <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? '-rotate-45 top-2 z-50' : 'rotate-0 top-4'
                    }`} />
                  </div>
                </button>
              </div>

              {/* Logo and Nav Items - Desktop */}
              <div className="hidden lg:flex items-center space-x-16">
                <h1 className="text-2xl font-serif text-gray-800 tracking-wider">Blissfull</h1>
                <div className="flex space-x-10">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 text-sm font-medium tracking-wide transition-colors duration-300 relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Logo - Mobile */}
              <div className="lg:hidden">
                <h1 className="text-2xl font-serif text-gray-800 tracking-wider">Blissfull</h1>
              </div>

              {/* Search and Cart */}
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <button 
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Fullscreen Overlay */}
      <div className={`fixed inset-0 bg-white transition-opacity duration-500 lg:hidden z-50 ${
        isMobileMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 relative">
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-gray-600 hover:text-gray-900 transition-colors duration-300"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-2xl font-light text-gray-800 hover:text-gray-600 transition-all duration-300 transform ${
                isMobileMenuOpen
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      {isSticky && <div className="h-16" />}
    </div>
  );
};

export default Navbar;
