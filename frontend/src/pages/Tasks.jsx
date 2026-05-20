import { useState } from 'react';
import { Plus, Clock, AlertCircle } from 'lucide-react';

const Tasks = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const tasks = [
    { id: 1, title: 'ارسال گزارش ماهانه به مدیریت', status: 'pending', priority: 'high', deadline: 'امروز ۱۶:۰۰', category: 'کاری' },
    { id: 2, title: 'بررسی رزومه‌های جدید', status: 'pending', priority: 'medium', deadline: 'فردا', category: 'کاری' },
    { id: 3, title: 'خرید اشتراک اینترنت', status: 'done', priority: 'low', deadline: 'دیروز', category: 'شخصی' },
    { id: 4, title: 'جلسه با تیم فنی', status: 'in-progress', priority: 'high', deadline: 'امروز ۱۰:۰۰', category: 'کاری' },
  ];

  const filteredTasks = tasks.filter(task => {
    if (activeTab === 'pending') return task.status === 'pending' || task.status === 'in-progress';
    if (activeTab === 'done') return task.status === 'done';
    return true;
  });

  return (
    <div className="space-y-6 pb-20">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">تسک‌ها</h1>
        <button className="bg-blue-600 text-white p-2 rounded-lg flex items-center gap-1 hover:bg-blue-700 text-sm">
          <Plus size={16} />
          تسک جدید
        </button>
      </header>

      {/* Tabs */}
      <div className="flex bg-gray-200 dark:bg-gray-800 p-1 rounded-xl mb-4">
        <button
          className={`flex-1 py-2 text-sm font-medium rounded-lg text-center ${activeTab === 'pending' ? 'bg-white dark:bg-gray-700 shadow-sm text-blue-600 dark:text-blue-400' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'}`}
          onClick={() => setActiveTab('pending')}
        >
          در جریان
        </button>
        <button
          className={`flex-1 py-2 text-sm font-medium rounded-lg text-center ${activeTab === 'done' ? 'bg-white dark:bg-gray-700 shadow-sm text-green-600 dark:text-green-400' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'}`}
          onClick={() => setActiveTab('done')}
        >
          انجام شده
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {filteredTasks.map(task => (
          <div key={task.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start gap-3 relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-1 h-full ${task.priority === 'high' ? 'bg-red-500' : task.priority === 'medium' ? 'bg-orange-500' : 'bg-gray-300'}`}></div>

            <input
              type="checkbox"
              checked={task.status === 'done'}
              className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
              readOnly
            />

            <div className="flex-1">
              <p className={`font-medium ${task.status === 'done' ? 'text-gray-400 line-through' : 'text-gray-800 dark:text-gray-200'}`}>
                {task.title}
              </p>

              <div className="flex items-center gap-3 mt-2 text-xs text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {task.deadline}
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                  {task.category}
                </span>
                {task.status === 'in-progress' && (
                  <span className="text-blue-500 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                    در حال انجام
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
        {filteredTasks.length === 0 && (
          <div className="text-center text-gray-500 py-10">
            تسکی برای نمایش وجود ندارد.
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
