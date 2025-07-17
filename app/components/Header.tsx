import {Link} from '@remix-run/react';
import {useCart} from '@shopify/hydrogen-react';
import {useState, useEffect} from 'react';

export function MainHeader() {
  const {totalQuantity} = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent hover:bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 relative">
          {/* Left nav */}
          <nav className="hidden md:flex absolute left-0 h-full items-center space-x-8">
            <Link
              to="/collections/all"
              className="text-black hover:text-black/70 transition-colors duration-200"
            >
              Shop All
            </Link>
            <Link
              to="/pages/our-story"
              className="text-black hover:text-black/70 transition-colors duration-200"
            >
              Our story
            </Link>
          </nav>
          {/* Logo */}
          <div className="flex-shrink-0 flex justify-center w-full">
            <Link to="/" className="text-2xl font-bold text-black">
              DISCIPLINIA
            </Link>
          </div>
          {/* Right side icons */}
          <div className="hidden md:flex absolute right-0 h-full items-center space-x-4">
            <Link
              to="/account"
              className="text-black hover:text-black/70 transition-colors duration-200"
            >
              <span className="sr-only">Account</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </Link>
            <Link
              to="/cart"
              className="text-black hover:text-black/70 transition-colors duration-200 relative"
            >
              <span className="sr-only">Cart</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {totalQuantity !== undefined && totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-black text-white text-xs flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile menu button */}
      <div className="md:hidden flex justify-between items-center px-4 py-2">
        <button
          type="button"
          className="text-black hover:text-black/70"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <Link to="/" className="text-2xl font-bold text-black mx-auto">
          DISCIPLINIA
        </Link>
        {/* Right side icons mobile */}
        <div className="flex items-center space-x-4">
          <Link
            to="/account"
            className="text-black hover:text-black/70 transition-colors duration-200"
          >
            <span className="sr-only">Account</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </Link>
          <Link
            to="/cart"
            className="text-black hover:text-black/70 transition-colors duration-200 relative"
          >
            <span className="sr-only">Cart</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {totalQuantity !== undefined && totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-black text-white text-xs flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              to="/collections/all"
              className="block px-3 py-2 text-black hover:text-black/70 transition-colors duration-200"
            >
              Shop All
            </Link>
            <Link
              to="/pages/our-story"
              className="block px-3 py-2 text-black hover:text-black/70 transition-colors duration-200"
            >
              Our story
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 