import { useState } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';

const Assistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: 'سلام علی! من دستیار هوشمند تو هستم. چطور می‌تونم امروز کمکت کنم؟ می‌تونی درباره تسک‌ها، جلسات قبلی یا دانش‌هایی که ذخیره کردی ازم بپرسی.',
      time: '۱۰:۰۰'
    },
    {
      id: 2,
      sender: 'user',
      text: 'هفته گذشته چه تسک‌هایی داشتم که هنوز انجام نشده؟',
      time: '۱۰:۰۵'
    },
    {
      id: 3,
      sender: 'ai',
      text: 'بر اساس اطلاعات لاگ شده، شما ۲ تسک ناتمام از هفته گذشته دارید:\n۱. بررسی رزومه‌های جدید (اولویت متوسط)\n۲. تمدید دامنه سایت (اولویت بالا)\n\nمی‌خواهید برای این موارد یادآوری تنظیم کنم؟',
      time: '۱۰:۰۶'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    setMessages([...messages, {
      id: Date.now(),
      sender: 'user',
      text: inputValue,
      time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' })
    }]);
    setInputValue('');
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] pb-20">
      <header className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
          <Bot className="text-blue-600 dark:text-blue-400" size={24} />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">دستیار هوشمند</h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
            <Sparkles size={12} className="text-yellow-500" />
            متصل به داده‌های شما
          </p>
        </div>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        {messages.map(msg => (
          <div key={msg.id} className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'mr-auto flex-row-reverse' : 'ml-auto'}`}>
            <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 ${msg.sender === 'user' ? 'bg-gray-200 dark:bg-gray-700' : 'bg-blue-100 dark:bg-blue-900'}`}>
              {msg.sender === 'user' ? <User size={16} className="text-gray-600 dark:text-gray-300" /> : <Bot size={16} className="text-blue-600 dark:text-blue-400" />}
            </div>
            <div className={`rounded-2xl p-3 ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-tr-sm' : 'bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-sm shadow-sm'}`}>
              <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.text}</p>
              <span className={`text-[10px] mt-1 block text-left ${msg.sender === 'user' ? 'text-blue-200' : 'text-gray-400'}`}>
                {msg.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="mt-4 relative">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="از دستیار خود بپرسید..."
          className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full py-3 pr-4 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-200 shadow-sm"
        />
        <button
          onClick={handleSend}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          <Send size={16} className="transform rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default Assistant;
