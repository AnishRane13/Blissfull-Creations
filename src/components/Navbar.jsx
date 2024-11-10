import { useState, useEffect } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const navItems = [
    {
      name: "New Arrivals",
      href: "#",
      description: "Discover our latest jewelry pieces",
    },
    {
      name: "Earrings",
      href: "#",
      description: "Elegant earrings for every occasion",
    },
    {
      name: "Necklaces",
      href: "#",
      description: "Timeless necklaces and pendants",
    },
    {
      name: "Collections",
      href: "#",
      description: "Explore our curated collections",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setActiveIndex(null);
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="relative">
      <nav
        className={`w-full transition-all duration-500 z-50 ${
          isSticky
            ? "fixed top-0 bg-white/95 backdrop-blur-md shadow-lg"
            : "relative bg-white"
        }`}
      >
        <div className="w-full border-b border-gray-100">
          <div className="mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Mobile Menu Toggle */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="relative w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
                  aria-label="Toggle menu"
                >
                  <div className="relative w-5 h-5">
                    <span
                      className={`absolute w-5 h-0.5 bg-gray-800 transform transition-all duration-300 ease-in-out ${
                        isMobileMenuOpen ? "rotate-45 top-2" : "rotate-0 top-0"
                      }`}
                    />
                    <span
                      className={`absolute w-5 h-0.5 bg-gray-800 transform transition-all duration-300 ease-in-out ${
                        isMobileMenuOpen ? "opacity-0" : "opacity-100 top-2"
                      }`}
                    />
                    <span
                      className={`absolute w-5 h-0.5 bg-gray-800 transform transition-all duration-300 ease-in-out ${
                        isMobileMenuOpen ? "-rotate-45 top-2" : "rotate-0 top-4"
                      }`}
                    />
                  </div>
                </button>
              </div>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center space-x-16">
                <h1 className="text-2xl font-serif text-gray-800 tracking-wider">
                  Blissfull
                </h1>
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

              {/* Mobile Logo */}
              <div className="lg:hidden">
                <h1 className="text-2xl font-serif text-gray-800 tracking-wider">
                  Blissfull
                </h1>
              </div>

              {/* Search */}
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="w-10 h-10 rounded-full  hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
                >
                  <svg
                    className="h-5 w-5 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md border-t border-gray-100 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex items-center border-b border-gray-300">
                <input
                  type="text"
                  placeholder="Search collections..."
                  className="w-full px-3 py-2 text-sm outline-none"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 text-gray-600 hover:text-gray-800"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu - Top Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-all duration-500 lg:hidden z-40 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-x-0 top-0 bg-white transform transition-transform duration-500 ease-in-out ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Mobile Menu Content */}
          <div className="flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-2xl font-serif text-gray-800">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group"
                aria-label="Close menu"
              >
                <svg
                  className="w-5 h-5 text-gray-800 transition-transform duration-300 group-hover:rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto py-8 px-6">
              <div className="grid gap-6">
                {navItems.map((item, idx) => (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() =>
                        setActiveIndex(activeIndex === idx ? null : idx)
                      }
                      className="w-full text-left group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-medium text-gray-800 group-hover:text-gray-600 transition-colors duration-300">
                          {item.name}
                        </span>
                        <span
                          className={`transform transition-transform duration-300 ${
                            activeIndex === idx ? "rotate-180" : "rotate-0"
                          }`}
                        >
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          activeIndex === idx ? "max-h-40 mt-4" : "max-h-0"
                        }`}
                      >
                        <p className="text-gray-600">{item.description}</p>
                        <a
                          href={item.href}
                          className="inline-flex items-center mt-4 text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300"
                        >
                          Explore
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </a>
                      </div>
                    </button>
                    <div
                      className={`absolute bottom-0 left-0 w-full h-px bg-gray-100 transform transition-transform duration-300 ${
                        activeIndex === idx ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100">
              <div className="grid gap-4">
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-300"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Spacer for fixed navbar */}
      {isSticky && <div className="h-16" />}
    </div>
  );
};

export default Navbar;