import { Outlet, NavLink } from 'react-router-dom';
import { Home, CheckSquare, BookOpen, Clock, MessageSquare, Mic } from 'lucide-react';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen bg-[#1a1b26] pb-16">
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-4">
        <Outlet />
      </main>

      {/* Floating Action Button for Quick Input */}
      <button className="fixed bottom-20 left-4 bg-[#6b46c1] text-white p-4 rounded-full shadow-[0_0_15px_rgba(107,70,193,0.6)] hover:bg-[#5a3ca6] transition-colors z-50">
        <Mic size={28} />
      </button>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 w-full bg-[#15161e] border-t border-[#2a2b36] shadow-[0_-2px_10px_rgba(0,0,0,0.5)]">
        <div className="flex justify-around items-center h-16">
          <NavItem to="/" icon={<Home size={20} />} label="خانه" />
          <NavItem to="/tasks" icon={<CheckSquare size={20} />} label="وظایف" />
          <NavItem to="/knowledge" icon={<BookOpen size={20} />} label="دانش" />
          <NavItem to="/log" icon={<Clock size={20} />} label="گزارش" />
          <NavItem to="/assistant" icon={<MessageSquare size={20} />} label="دستیار" />
        </div>
      </nav>
    </div>
  );
};

const NavItem = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center justify-center h-14 w-14 rounded-2xl ${
          isActive
            ? 'bg-[#2d1b4e] text-white'
            : 'text-gray-400 hover:text-white'
        }`
      }
    >
      {icon}
      <span className="text-[10px] font-medium mt-1">{label}</span>
    </NavLink>
  );
};

export default Layout;
