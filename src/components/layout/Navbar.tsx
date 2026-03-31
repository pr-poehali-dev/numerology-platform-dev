import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const navItems = [
  { path: '/', label: 'Главная' },
  { path: '/calculator', label: 'Калькулятор' },
  { path: '/compatibility', label: 'Совместимость' },
  { path: '/guide', label: 'Справочник' },
  { path: '/articles', label: 'Статьи' },
  { path: '/profile', label: 'Профиль' },
  { path: '/about', label: 'О нас' },
  { path: '/contact', label: 'Контакты' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-purple-800/30 backdrop-blur-md bg-purple-950/60">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">✦</span>
          <span className="font-cinzel text-yellow-300 text-lg font-bold tracking-widest">НУМЕРОС</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link text-xs tracking-widest uppercase ${
                location.pathname === item.path ? 'text-yellow-300' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="lg:hidden text-purple-200 hover:text-yellow-300 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-purple-950/95 backdrop-blur-md border-t border-purple-800/30 py-4">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-6 py-2 nav-link text-xs tracking-widest uppercase ${
                location.pathname === item.path ? 'text-yellow-300' : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
