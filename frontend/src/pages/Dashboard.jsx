const Dashboard = () => {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-gradient mb-2">کهکشان من</h1>
        <p className="text-on-surface-variant font-body-lg text-body-lg">خلاصه وضعیت سیستم شما در یک نگاه.</p>
      </div>

      {/* 2x2 Analytics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {/* Widget 1: Sessions */}
        <div className="glass-card rounded-2xl p-6 flex flex-col justify-between h-36 hover:bg-surface-container-high/80 transition-all cursor-default border-primary/10 group">
          <div className="flex justify-between items-start">
            <span className="font-label-sm text-label-sm text-on-surface-variant">تعداد جلسات</span>
            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">timer</span>
          </div>
          <div className="font-headline-lg text-headline-lg text-on-surface font-bold">۱۲۴</div>
        </div>

        {/* Widget 2: Focus Time */}
        <div className="glass-card rounded-2xl p-6 flex flex-col justify-between h-36 hover:bg-surface-container-high/80 transition-all cursor-default border-primary/10 group">
          <div className="flex justify-between items-start">
            <span className="font-label-sm text-label-sm text-on-surface-variant">زمان تمرکز</span>
            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">psychology</span>
          </div>
          <div className="font-headline-lg text-headline-lg text-on-surface font-bold">۳۲<span className="text-sm font-normal text-outline ml-1">ساعت</span></div>
        </div>

        {/* Widget 3: Knowledge Base */}
        <div className="glass-card rounded-2xl p-6 flex flex-col justify-between h-36 hover:bg-surface-container-high/80 transition-all cursor-default border-primary/10 group">
          <div className="flex justify-between items-start">
            <span className="font-label-sm text-label-sm text-on-surface-variant">رشد دانش</span>
            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">auto_graph</span>
          </div>
          <div className="font-headline-lg text-headline-lg text-on-surface font-bold flex items-center">
            +۱۵<span className="text-sm font-normal text-tertiary ml-1">%</span>
          </div>
        </div>

        {/* Widget 4: Remaining Tasks */}
        <div className="glass-card rounded-2xl p-6 flex flex-col justify-between h-36 hover:bg-surface-container-high/80 transition-all cursor-default border-primary/10 group">
          <div className="flex justify-between items-start">
            <span className="font-label-sm text-label-sm text-on-surface-variant">تسک‌های باقی‌مانده</span>
            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">fact_check</span>
          </div>
          <div className="font-headline-lg text-headline-lg text-on-surface font-bold">۷</div>
        </div>
      </div>

      {/* Bento Grid for deeper content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Large Card: Recent Insights (Spans 2 columns on desktop) */}
        <div className="md:col-span-2 glass-panel rounded-[2rem] p-8 min-h-[340px] flex flex-col">
          <div className="flex justify-between items-center mb-6 border-b border-outline-variant/30 pb-4">
            <h2 className="font-headline-md text-headline-md text-on-surface">بینش‌های اخیر</h2>
            <button className="text-primary hover:text-primary-fixed-dim transition-colors"><span className="material-symbols-outlined">more_horiz</span></button>
          </div>

          <div className="flex-1 space-y-4">
            {/* List Item */}
            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low transition-colors border border-transparent hover:border-outline-variant/20">
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-on-surface">تحلیل پروژه آلفا تکمیل شد</span>
                <span className="text-sm text-outline">۲ ساعت پیش</span>
              </div>
              <span className="material-symbols-outlined text-primary">analytics</span>
            </div>

            <div className="w-full h-px bg-outline-variant/10"></div>

            {/* List Item */}
            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low transition-colors border border-transparent hover:border-outline-variant/20">
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-on-surface">یادداشت‌های جلسه دپارتمان استخراج شد</span>
                <span className="text-sm text-outline">۵ ساعت پیش</span>
              </div>
              <span className="material-symbols-outlined text-secondary">summarize</span>
            </div>
          </div>
        </div>

        {/* Side Card: Quick Actions or Status */}
        <div className="glass-card rounded-2xl p-6 min-h-[300px] flex flex-col">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-6">وضعیت سیستم</h2>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            {/* Simulated Data Ring */}
            <div className="w-32 h-32 rounded-full border-4 border-surface-container-high border-t-tertiary border-r-tertiary animate-[spin_4s_linear_infinite] flex items-center justify-center">
              <div className="w-28 h-28 rounded-full border-2 border-surface-container-high border-t-tertiary border-r-tertiary animate-[spin_6s_linear_infinite] flex items-center justify-center">
                <div className="w-22 h-22 rounded-full border-2 border-surface-container-high border-b-primary border-l-primary animate-[spin_4s_linear_infinite_reverse]"></div>
              </div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-headline-md text-headline-md text-tertiary">۹۸٪</span>
              <span className="text-xs text-outline">بهینگی</span>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-8">
        <div className="glass-panel rounded-[2rem] p-8 flex flex-col">
          <div className="flex justify-between items-center mb-6 border-b border-outline-variant/30 pb-4">
            <h2 className="font-headline-md text-headline-md text-on-surface">یادآوری‌های آینده</h2>
            <button className="text-secondary hover:text-secondary-fixed-dim transition-colors flex items-center gap-1 font-label-md">
                مشاهده همه
                <span className="material-symbols-outlined text-sm">arrow_back_ios</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card p-4 rounded-xl flex items-center gap-4 hover:bg-surface-container-high transition-colors cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">event_repeat</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-on-surface">جلسه بازبینی هفتگی</span>
                <span className="text-xs text-outline">فردا، ساعت ۱۰:۰۰ صبح</span>
              </div>
            </div>

            <div className="glass-card p-4 rounded-xl flex items-center gap-4 hover:bg-surface-container-high transition-colors cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">assignment_late</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-on-surface">موعد تحویل پروپوزال</span>
                <span className="text-xs text-outline">امروز، ساعت ۱۷:۰۰</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
