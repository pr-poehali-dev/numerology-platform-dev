import { ReactNode } from 'react';
import Navbar from './Navbar';
import StarField from './StarField';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen relative" style={{ background: 'hsl(260, 40%, 5%)' }}>
      <StarField />
      <Navbar />
      <main className="relative z-10 pt-16">
        {children}
      </main>
      <footer className="relative z-10 border-t border-purple-800/30 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="font-cinzel text-yellow-400 text-lg mb-1">✦ НУМЕРОС ✦</p>
          <p className="text-purple-400 text-xs tracking-widest">НУМЕРОЛОГИЯ · СУДЬБА · ПОЗНАНИЕ</p>
          <p className="text-purple-600 text-xs mt-3">© 2024 Нумерос. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
