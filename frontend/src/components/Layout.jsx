import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      {/* TopAppBar */}
      <header className="docked full-width top-0 sticky z-50 flex flex-row-reverse justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 bg-surface/40 backdrop-blur-2xl border-b border-outline-variant/20">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-3xl text-primary dark:text-primary-fixed-dim">notifications</span>
        </div>
        <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">
            مغز دوم
        </div>
        <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant/30">
          <img alt="تصویر پروفایل کاربر" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe0H_4quS2COV6A5eyn8tp7SIDKZKyMpF1JSXaRA6X6e2w5Vl1hGhphGXGIqzrSw1V2-bGPczCqSOxCOIO3L9WDi_kiHnioXnu8uYZlKtN3axOBdehjyp4yc25j39pQ6fD-88MWWm9BWPvOHy_oDYGy1vIlnRjBNo43QGoPKvKIWF39pYPePfVPRuz5TxBCPp-PKR0Jec29wBx1Rmd9wXK1R0QVV0Wz9S9-_tvqVGm0rH3HDtYaBdPwIKv9WvMEsYC1pZ2NulIRuM"/>
        </div>
      </header>

      {/* Side Navigation (Desktop) */}
      <nav className="hidden md:flex fixed top-0 right-0 h-full w-64 glass-panel flex-col py-8 px-4 z-40 border-l border-outline-variant/30">
        <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim mb-12 text-center">مغز دوم</div>
        <div className="flex flex-col gap-2">
          <DesktopNavItem to="/" icon="home" label="خانه" exact />
          <DesktopNavItem to="/tasks" icon="task_alt" label="وظایف" />
          <DesktopNavItem to="/knowledge" icon="menu_book" label="دانش" />
          <DesktopNavItem to="/log" icon="history_edu" label="گزارش" />
          <DesktopNavItem to="/assistant" icon="smart_toy" label="دستیار" isAssistant />
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop pt-8 pb-32">
        <Outlet />
      </main>

      {/* FAB for Input */}
      <button className="fixed bottom-24 md:bottom-8 left-8 w-14 h-14 bg-gradient-to-br from-primary-container to-secondary-container rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(46,91,255,0.5)] hover:scale-105 transition-transform z-50" title="ورودی جدید">
        <span className="material-symbols-outlined text-on-primary-container text-3xl">add</span>
      </button>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-6 left-6 right-6 rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-white/10 shadow-2xl z-50 flex flex-row-reverse justify-around items-center px-4 py-3 cosmic-glow">
        <MobileNavItem to="/" icon="home" label="خانه" exact />
        <MobileNavItem to="/tasks" icon="task_alt" label="وظایف" />
        <MobileNavItem to="/knowledge" icon="menu_book" label="دانش" />
        <MobileNavItem to="/log" icon="history_edu" label="گزارش" />
        <MobileNavItem to="/assistant" icon="smart_toy" label="دستیار" />
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
      `flex flex-col items-center justify-center transition-all ${
        isActive
          ? 'bg-primary text-on-primary rounded-2xl px-5 py-2 scale-100'
          : 'text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors'
      }`
    }
  >
    {({ isActive }) => (
      <>
        <span className="material-symbols-outlined" style={isActive ? {fontVariationSettings: "'FILL' 1"} : {}}>
          {icon}
        </span>
        <span className="font-label-md text-label-md">{label}</span>
      </>
    )}
  </NavLink>
);

export default Layout;
