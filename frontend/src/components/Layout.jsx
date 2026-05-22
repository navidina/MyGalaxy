import { Outlet, NavLink } from 'react-router-dom';
import heroImg from '../assets/hero.png';

const Layout = () => {
  return (
    <>
      {/* TopAppBar */}
      <header className="docked full-width top-0 sticky z-50 flex justify-between items-center w-full px-4 py-4 bg-surface/80 backdrop-blur-lg border-b border-outline-variant/10">
        <button className="text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
        <div className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed-dim">
            مغز دوم
        </div>
        <div className="flex items-center gap-3">
          <button className="text-on-surface-variant hover:text-primary transition-colors relative">
            <span className="material-symbols-outlined text-2xl">notifications</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden border border-primary/30 flex items-center justify-center shadow-[0_0_10px_rgba(46,91,255,0.3)]">
            <img alt="Bot Avatar" className="w-full h-full object-cover" src={heroImg} />
          </div>
        </div>
      </header>

      {/* Side Navigation (Desktop) */}
      <nav className="hidden md:flex fixed top-0 right-0 h-full w-64 glass-panel flex-col py-8 px-4 z-40 border-l border-outline-variant/30">
        <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim mb-12 text-center">مغز دوم</div>
        <div className="flex flex-col gap-2">
          <DesktopNavItem to="/" icon="grid_view" label="داشبورد" exact />
          <DesktopNavItem to="/tasks" icon="check_circle" label="وظایف" />
          <DesktopNavItem to="/knowledge" icon="menu_book" label="دانش" />
          <DesktopNavItem to="/log" icon="history_edu" label="گزارش" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-container-max-width mx-auto px-4 md:px-margin-desktop pt-4 pb-24">
        <Outlet />
      </main>

      {/* FAB for Input */}
      <button className="fixed bottom-20 md:bottom-8 left-6 md:left-8 w-14 h-14 bg-gradient-to-br from-primary-container to-secondary-container rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(46,91,255,0.5)] hover:scale-105 transition-transform z-50" title="ورودی جدید">
        <span className="material-symbols-outlined text-on-primary-container text-3xl">add</span>
      </button>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-surface-container-low/95 backdrop-blur-2xl border-t border-outline-variant/10 z-50 flex justify-around items-center px-2 py-2">
        <MobileNavItem to="/" icon="grid_view" label="داشبورد" exact />
        <MobileNavItem to="/tasks" icon="check_circle" label="وظایف" />
        <MobileNavItem to="/knowledge" icon="menu_book" label="دانش" />
        <MobileNavItem to="/log" icon="history_edu" label="گزارش" />
      </nav>
    </>
  );
};

const DesktopNavItem = ({ to, icon, label, exact, isAssistant }) => (
  <NavLink
    to={to}
    end={exact}
    className={({ isActive }) =>
      `flex flex-row items-center gap-3 rounded-lg px-4 py-3 transition-all ${
        isActive
          ? 'bg-secondary-container text-on-secondary-container cosmic-glow'
          : 'text-on-surface-variant hover:bg-surface-container-low transition-colors'
      } ${isAssistant ? 'mt-auto' : ''}`
    }
  >
    {({ isActive }) => (
      <>
        <span className={`material-symbols-outlined ${!isActive && isAssistant ? 'text-tertiary' : ''}`} style={isActive ? {fontVariationSettings: "'FILL' 1"} : {}}>
          {icon}
        </span>
        <span className="font-label-md text-label-md">{label}</span>
      </>
    )}
  </NavLink>
);

const MobileNavItem = ({ to, icon, label, exact }) => (
  <NavLink
    to={to}
    end={exact}
    className={({ isActive }) =>
      `flex flex-col items-center justify-center transition-all px-2 py-1 flex-1 ${
        isActive
          ? 'text-on-surface bg-surface-container-high rounded-xl mx-1 py-2'
          : 'text-on-surface-variant hover:text-on-surface'
      }`
    }
  >
    {({ isActive }) => (
      <>
        <span className="material-symbols-outlined mb-1" style={isActive ? {fontVariationSettings: "'FILL' 1"} : {}}>
          {icon}
        </span>
        <span className="font-label-sm text-[10px]">{label}</span>
      </>
    )}
  </NavLink>
);

export default Layout;
