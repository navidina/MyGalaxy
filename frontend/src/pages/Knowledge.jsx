import { Search, Tag, Calendar, ExternalLink } from 'lucide-react';

const Knowledge = () => {
  const cards = [
    {
      id: 1,
      title: 'مفهوم OKR',
      summary: 'اهداف و نتایج کلیدی (OKR) یک چارچوب هدف‌گذاری برای تعریف و پیگیری اهداف و نتایج آن‌هاست.',
      source: 'جلسه تیم محصول',
      date: '۱۴۰۲/۰۸/۱۵',
      tags: ['مدیریت', 'بهره‌وری']
    },
    {
      id: 2,
      title: 'تفاوت REST و GraphQL',
      summary: 'در REST برای هر منبع یک اندپوینت داریم اما در GraphQL کلاینت مشخص می‌کند چه دیتایی نیاز دارد.',
      source: 'پادکست برنامه‌نویسی',
      date: '۱۴۰۲/۰۸/۱۲',
      tags: ['فنی', 'توسعه']
    }
  ];

  return (
    <div className="space-y-6 pb-20">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">پایگاه دانش</h1>
        <div className="relative">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="جستجو در دانش‌ها..."
            className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl py-3 pr-10 pl-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-200 shadow-sm"
          />
        </div>
      </header>

      {/* Tags Slider */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <span className="bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm whitespace-nowrap">همه</span>
        <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full text-sm whitespace-nowrap">مدیریت</span>
        <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full text-sm whitespace-nowrap">فنی</span>
        <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full text-sm whitespace-nowrap">ایده‌ها</span>
      </div>

      {/* Knowledge Cards */}
      <div className="space-y-4">
        {cards.map(card => (
          <div key={card.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{card.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
              {card.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {card.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-xs px-2 py-1 rounded-md">
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center text-xs text-gray-500 pt-3 border-t border-gray-100 dark:border-gray-700">
              <span className="flex items-center gap-1">
                <ExternalLink size={14} />
                منبع: {card.source}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {card.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Knowledge;
