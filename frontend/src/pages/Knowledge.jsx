const Knowledge = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-gradient mb-2">دانش</h1>
        <p className="text-on-surface-variant font-body-lg text-body-lg">پایگاه دانش شخصی شما.</p>
      </div>
      <div className="glass-panel rounded-[2rem] p-8 flex flex-col items-center justify-center min-h-[400px]">
        <span className="material-symbols-outlined text-6xl text-outline mb-4">menu_book</span>
        <h2 className="text-xl font-bold text-on-surface">پایگاه دانش در حال ساخت است.</h2>
        <p className="text-on-surface-variant mt-2 text-center max-w-md">اطلاعات مهم از صحبت‌های شما استخراج و اینجا ذخیره می‌شود.</p>
      </div>
    </div>
  );
};
export default Knowledge;
