import { Mic, Type, Star, Filter } from 'lucide-react';

const Log = () => {
  const logs = [
    {
      id: 1,
      type: 'voice',
      content: 'امروز تو جلسه با تیم فنی تصمیم گرفتیم که مهاجرت به سرور جدید رو تا آخر ماه انجام بدیم. یادم باشه که داکیومنت‌ها رو فردا آپدیت کنم.',
      date: 'امروز ۱۰:۳۰',
      duration: '0:45',
      labels: ['تسک', 'دانش'],
      starred: true
    },
    {
      id: 2,
      type: 'text',
      content: 'خرید اشتراک یکساله اینترنت',
      date: 'دیروز ۱۸:۴۵',
      labels: ['تسک'],
      starred: false
    },
    {
      id: 3,
      type: 'voice',
      content: 'یه ایده جدید برای کمپین مارکتینگ: می‌تونیم برای کاربرای قدیمی یه کد تخفیف اختصاصی با پیامک بفرستیم.',
      date: 'دوشنبه ۱۴:۰۰',
      duration: '0:15',
      labels: ['ایده'],
      starred: false
    }
  ];

  return (
    <div className="space-y-6 pb-20">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">لاگ ورودی‌ها</h1>
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg dark:hover:bg-gray-800 flex items-center gap-2">
          <Filter size={20} />
        </button>
      </header>

      {/* Timeline */}
      <div className="relative border-r-2 border-gray-200 dark:border-gray-700 pr-6 space-y-8 my-6 mr-3">
        {logs.map(log => (
          <div key={log.id} className="relative">
            {/* Timeline dot/icon */}
            <div className="absolute -right-[35px] bg-white dark:bg-gray-900 p-1 rounded-full border-2 border-gray-200 dark:border-gray-700">
              {log.type === 'voice' ? (
                <div className="bg-blue-100 dark:bg-blue-900 p-1.5 rounded-full text-blue-600 dark:text-blue-400">
                  <Mic size={14} />
                </div>
              ) : (
                <div className="bg-green-100 dark:bg-green-900 p-1.5 rounded-full text-green-600 dark:text-green-400">
                  <Type size={14} />
                </div>
              )}
            </div>

            {/* Content Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-gray-500 font-medium">{log.date}</span>
                <button className={`text-gray-400 hover:text-yellow-500 transition-colors ${log.starred ? 'text-yellow-500 fill-current' : ''}`}>
                  <Star size={16} />
                </button>
              </div>

              {log.type === 'voice' && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2 flex items-center gap-3 mb-3">
                  <button className="bg-blue-600 text-white p-1.5 rounded-full">
                    <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent ml-0.5"></div>
                  </button>
                  <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-blue-500"></div>
                  </div>
                  <span className="text-xs text-gray-500">{log.duration}</span>
                </div>
              )}

              <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed mb-3">
                {log.content}
              </p>

              <div className="flex gap-2">
                {log.labels.map(label => (
                  <span key={label} className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded-md">
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Log;
