import { Bell, Edit3, Sparkles, CheckCircle2, Circle, Clock, Mic, Send } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6 pb-20 pt-2">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <button className="p-2 text-gray-300 hover:text-white rounded-full">
          <Bell size={24} />
        </button>
        <h1 className="text-2xl font-bold text-[#b4c5ff]">کهکشان من</h1>
        <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden border border-gray-600">
          <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </header>

      {/* New Input Card */}
      <section className="bg-[#15161e] border border-[#2a2b36] rounded-2xl p-5 relative overflow-hidden shadow-lg">
        {/* Starry background effect (simplified) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

        <div className="flex justify-between items-center mb-4 relative z-10">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-white">ورودی جدید</h2>
          </div>
          <Edit3 size={20} className="text-gray-400" />
        </div>

        <div className="relative z-10 flex items-center bg-[#1e202e] border border-[#3a3b46] rounded-xl p-1 pr-4">
          <input
            type="text"
            placeholder="ایده، تسک یا یادداشت جدید..."
            className="bg-transparent border-none outline-none text-white w-full placeholder-gray-400 text-sm"
          />
          <div className="flex gap-2">
            <button className="bg-[#7c3aed] p-2 rounded-lg text-white hover:bg-[#6d28d9] transition-colors">
              <Mic size={18} />
            </button>
            <button className="bg-[#2563eb] p-2 rounded-lg text-white hover:bg-[#1d4ed8] transition-colors">
              <Send size={18} className="rotate-180" /> {/* Rotating to match RTL send direction */}
            </button>
          </div>
        </div>
      </section>

      {/* Smart Recommendations */}
      <section className="bg-[#15161e] border border-[#2a2b36] rounded-2xl p-5 shadow-lg">
        <div className="flex items-center gap-2 mb-4 border-b border-[#3a3b46] pb-3">
          <Sparkles size={20} className="text-[#c084fc]" />
          <h2 className="text-lg font-bold text-white">آخرین توصیه‌های هوشمند</h2>
        </div>

        <div className="bg-[#1e202e] border border-[#3a3b46] rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed text-right">
            با بررسی آخرین جلسات ضبط شده، آقای احمدی در ۱۷ زمینه با شما مخالف بوده است. به نظر می‌رسد نیاز به حل چالش با این فرد دارید.
          </p>
        </div>
      </section>

      {/* Today's Tasks */}
      <section className="bg-[#15161e] border border-[#2a2b36] rounded-2xl p-5 shadow-lg">
        <div className="flex justify-between items-center mb-4 border-b border-[#3a3b46] pb-3">
          <div className="bg-[#7c3aed] text-white text-xs px-3 py-1 rounded-full font-medium">
            3/5 انجام شده
          </div>
          <h2 className="text-lg font-bold text-white">تسک‌های امروز</h2>
        </div>

        <div className="space-y-4">
          <div className="flex justify-end items-center gap-3">
            <p className="text-sm text-gray-500 line-through">بررسی گزارش ماهانه</p>
            <CheckCircle2 size={20} className="text-[#a5b4fc]" />
          </div>

          <div className="flex justify-end items-center gap-3">
            <p className="text-sm text-white">آماده‌سازی ارائه‌ی پروژه X</p>
            <Circle size={20} className="text-gray-500" />
          </div>

          <div className="flex justify-end items-center gap-3">
            <p className="text-sm text-gray-500 line-through">تماس با تیم طراحی</p>
            <CheckCircle2 size={20} className="text-[#a5b4fc]" />
          </div>
        </div>
      </section>

      {/* Upcoming Reminders */}
      <section className="bg-[#15161e] border border-[#2a2b36] rounded-2xl p-5 shadow-lg">
        <div className="flex justify-end items-center gap-2 mb-4 border-b border-[#3a3b46] pb-3">
          <h2 className="text-lg font-bold text-white">یادآوری‌های نزدیک</h2>
          <Clock size={20} className="text-[#2dd4bf]" />
        </div>

        <div className="space-y-3">
          <div className="bg-[#1e202e] border border-[#3a3b46] rounded-xl p-4 flex justify-between items-center">
            <div className="w-2 h-2 rounded-full bg-[#f472b6]"></div>
            <div className="text-right">
              <p className="text-sm font-medium text-white">جلسه هماهنگی تیم</p>
              <p className="text-xs text-gray-500 mt-1">امروز، ۱۴:۰۰</p>
            </div>
          </div>

          <div className="bg-[#1e202e] border border-[#3a3b46] rounded-xl p-4 flex justify-between items-center">
            <div className="w-2 h-2 rounded-full bg-[#60a5fa]"></div>
            <div className="text-right">
              <p className="text-sm font-medium text-white">ارسال پیش‌نویس مقاله</p>
              <p className="text-xs text-gray-500 mt-1">فردا، ۱۰:۰۰</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Dashboard;
