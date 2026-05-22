const Log = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-gradient mb-2">گزارش</h1>
        <p className="text-on-surface-variant font-body-lg text-body-lg">تاریخچه ورودی‌های شما.</p>
      </div>
      <div className="glass-panel rounded-[2rem] p-8 flex flex-col items-center justify-center min-h-[400px]">
        <span className="material-symbols-outlined text-6xl text-outline mb-4">history_edu</span>
        <h2 className="text-xl font-bold text-on-surface">گزارش شما خالی است.</h2>
        <p className="text-on-surface-variant mt-2 text-center max-w-md">تمامی ورودی‌های صوتی و متنی شما با تاریخ و ساعت اینجا لیست خواهند شد.</p>
      </div>
    </div>
  );
};
export default Log;
