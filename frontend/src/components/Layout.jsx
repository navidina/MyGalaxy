import { Outlet, NavLink } from 'react-router-dom';
import { Home, CheckSquare, BookOpen, Clock, MessageSquare, Mic } from 'lucide-react';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 pb-16">
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-4">
        <Outlet />
      </main>

      {/* Floating Action Button for Quick Input */}
      <button className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50">
        <Mic size={24} />
      </button>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 w-full bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <div className="flex justify-around items-center h-16">
          <NavItem to="/" icon={<Home size={24} />} label="خانه" />
          <NavItem to="/tasks" icon={<CheckSquare size={24} />} label="تسک‌ها" />
          <NavItem to="/knowledge" icon={<BookOpen size={24} />} label="دانش" />
          <NavItem to="/log" icon={<Clock size={24} />} label="لاگ" />
          <NavItem to="/assistant" icon={<MessageSquare size={24} />} label="دستیار" />
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
        `flex flex-col items-center justify-center w-full h-full space-y-1 ${
          isActive
            ? 'text-blue-600 dark:text-blue-400'
            : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
        }`
      }
    >
      {icon}
      <span className="text-[10px] font-medium">{label}</span>
    </NavLink>
  );
};

export default Layout;
