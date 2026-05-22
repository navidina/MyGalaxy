const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-md mx-auto">

      {/* Quick Input Box */}
      <div className="flex items-center bg-surface-container-low rounded-2xl border border-outline-variant/20 p-2 shadow-sm">
        <button className="w-10 h-10 bg-primary/20 text-primary rounded-xl flex items-center justify-center ml-2">
          <span className="material-symbols-outlined">send</span>
        </button>
        <input
          type="text"
          placeholder="چیزی بنویس یا بگو... (مثلاً: قرار ملاقات ف"
          className="flex-1 bg-transparent text-on-surface outline-none text-sm font-label-md px-2 placeholder-on-surface-variant/70"
        />
        <div className="w-10 h-10 flex items-center justify-center text-on-surface-variant cursor-pointer">
          <span className="material-symbols-outlined">edit</span>
        </div>
      </div>

      {/* AI Insight Card */}
      <div className="glass-panel rounded-2xl p-5 border border-outline-variant/30 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center shadow-inner">
            <span className="material-symbols-outlined text-primary text-xl">psychology</span>
          </div>
          <h2 className="font-headline-sm text-sm font-bold text-on-surface">بینش هوش مصنوعی: بهینه‌سازی جریان کاری</h2>
        </div>
        <p className="text-sm text-on-surface-variant leading-relaxed text-justify px-1">
          بر اساس تحلیل هفته گذشته، اوج تمرکز شما بین ساعت <strong className="text-on-surface">۹ تا ۱۱ صبح</strong> است. پیشنهاد می‌شود وظایف سنگین پروژه «آلفا» را به این بازه منتقل کنید تا <strong className="text-secondary">۲۰٪ بازدهی</strong> بیشتری داشته باشید.
        </p>
        <div className="flex justify-end gap-3 mt-1">
          <button className="px-4 py-2 rounded-lg bg-surface-container-highest text-on-surface text-xs font-label-sm border border-outline-variant/20 hover:bg-surface-container-highest/80 transition-colors">
            تحلیل زمانی
          </button>
          <button className="px-4 py-2 rounded-lg bg-surface-container-highest text-on-surface text-xs font-label-sm border border-outline-variant/20 hover:bg-surface-container-highest/80 transition-colors">
            توصیه اولویت‌بندی
          </button>
        </div>
      </div>

      {/* Task Lists Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 mb-1 px-1">
          <span className="material-symbols-outlined text-on-surface">list</span>
          <h2 className="font-headline-sm text-sm font-bold text-on-surface">لیست‌های وظایف</h2>
        </div>

        {/* Overdue Card */}
        <div className="glass-panel rounded-2xl p-0 border border-error/30 overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-error/5 border-b border-error/10">
            <h3 className="text-sm font-bold text-error">منقضی شده (Overdue)</h3>
            <span className="w-6 h-6 rounded-full bg-error/20 text-error text-xs flex items-center justify-center font-bold">۳</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-error"></div>
                <span className="text-sm text-on-surface">ارسال پروپوزال نهایی مشتری</span>
              </div>
              <span className="text-xs text-error">دیروز</span>
            </div>
            <div className="flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-error"></div>
                <span className="text-sm text-on-surface">پرداخت فاکتور سرور</span>
              </div>
              <span className="text-xs text-error">۲ روز پیش</span>
            </div>
          </div>
        </div>

        {/* Upcoming Card */}
        <div className="glass-panel rounded-2xl p-0 border border-primary/20 overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-primary/5 border-b border-primary/10">
            <h3 className="text-sm font-bold text-primary">آتی (Upcoming)</h3>
            <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold">۱۲</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm text-on-surface">جلسه بازبینی تیم فنی</span>
              </div>
              <span className="text-xs text-outline">امروز، ۱۴:۰۰</span>
            </div>
            <div className="flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm text-on-surface">بررسی گزارش ماهانه مالی</span>
              </div>
              <span className="text-xs text-outline">فردا</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Knowledge Findings */}
      <div className="flex flex-col gap-4 mt-2">
        <div className="flex items-center gap-2 mb-1 px-1">
          <span className="material-symbols-outlined text-on-surface">menu_book</span>
          <h2 className="font-headline-sm text-sm font-bold text-on-surface">آخرین یافته‌های دانش</h2>
        </div>

        {/* Knowledge Card 1 */}
        <div className="glass-panel rounded-2xl p-5 border border-outline-variant/20 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">lightbulb</span>
              <h3 className="text-sm font-bold text-on-surface">تکنیک‌های یادگیری عمیق</h3>
            </div>
            <span className="text-xs text-outline">۱۰ دقیقه پیش</span>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed text-justify">
            استفاده از الگوریتم‌های جدید در پیش‌بینی رفتار کاربر می‌تواند دقت سیستم را تا ۱۵ درصد افزایش دهد. منابع اصلی در گیت‌هاب موجود است...
          </p>
          <div className="flex gap-2 mt-2 justify-end">
            <span className="px-3 py-1 rounded-md bg-surface-container-high text-on-surface text-[10px] border border-outline-variant/10">#تحقیق</span>
            <span className="px-3 py-1 rounded-md bg-surface-container-high text-on-surface text-[10px] border border-outline-variant/10">#هوش_مصنوعی</span>
          </div>
        </div>

        {/* Knowledge Card 2 */}
        <div className="glass-panel rounded-2xl p-5 border border-outline-variant/20 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-on-surface text-lg">description</span>
              <h3 className="text-sm font-bold text-on-surface">خلاصه جلسه معماری</h3>
            </div>
            <span className="text-xs text-outline">دیروز</span>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed text-justify">
            تصمیم گرفته شد که از میکروسرویس‌های توزیع‌شده برای مقیاس‌پذیری بهتر استفاده کنیم. داکیومنت کامل در Notion آپدیت شد.
          </p>
          <div className="flex gap-2 mt-2 justify-end">
            <span className="px-3 py-1 rounded-md bg-surface-container-high text-on-surface text-[10px] border border-outline-variant/10">#معماری</span>
            <span className="px-3 py-1 rounded-md bg-surface-container-high text-on-surface text-[10px] border border-outline-variant/10">#تکنولوژی</span>
          </div>
        </div>

        {/* Show all Button */}
        <button className="w-full py-3 mt-2 rounded-xl border border-dashed border-outline-variant/30 text-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors">
          مشاهده همه کارت‌های دانش
        </button>
      </div>

    </div>
  );
};

export default Dashboard;
