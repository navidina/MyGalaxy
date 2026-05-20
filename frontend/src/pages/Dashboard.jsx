import { Bell, CheckCircle2, TrendingUp, BookOpen } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6 pb-20">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">سلام، علی 👋</h1>
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full dark:hover:bg-gray-800">
          <Bell size={24} />
        </button>
      </header>

      {/* Today's Tasks Summary */}
      <section>
        <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">خلاصه امروز</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center">
            <span className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">۴</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">تسک امروز</span>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center">
            <span className="text-3xl font-bold text-green-500 dark:text-green-400 mb-1">۲</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">انجام شده</span>
          </div>
        </div>
      </section>

      {/* Upcoming Reminders / Tasks */}
      <section>
        <div className="flex justify-between items-end mb-3">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">تسک‌های فوری</h2>
          <a href="/tasks" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">همه</a>
        </div>
        <div className="space-y-3">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start gap-3">
            <CheckCircle2 className="text-gray-300 dark:text-gray-600 mt-0.5 shrink-0" size={20} />
            <div>
              <p className="text-gray-800 dark:text-gray-200 font-medium">ارسال گزارش ماهانه به مدیریت</p>
              <p className="text-xs text-red-500 mt-1">امروز - ساعت ۱۶:۰۰</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start gap-3">
            <CheckCircle2 className="text-gray-300 dark:text-gray-600 mt-0.5 shrink-0" size={20} />
            <div>
              <p className="text-gray-800 dark:text-gray-200 font-medium">بررسی رزومه‌های جدید</p>
              <p className="text-xs text-orange-500 mt-1">فردا</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Knowledge */}
      <section>
        <div className="flex justify-between items-end mb-3">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">آخرین دانش ثبت شده</h2>
          <a href="/knowledge" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">همه</a>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen size={16} className="text-purple-500" />
            <h3 className="font-medium text-gray-800 dark:text-gray-200">مفهوم OKR</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            اهداف و نتایج کلیدی (OKR) یک چارچوب هدف‌گذاری برای تعریف و پیگیری اهداف و نتایج آن‌هاست.
          </p>
        </div>
      </section>

      {/* Activity Chart Placeholder */}
      <section>
        <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">فعالیت هفته</h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center h-32">
          <div className="text-center text-gray-400 dark:text-gray-500 flex flex-col items-center">
            <TrendingUp size={32} className="mb-2 opacity-50" />
            <span className="text-sm">نمودار فعالیت در اینجا قرار می‌گیرد</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
