const Assistant = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-gradient mb-2">دستیار</h1>
        <p className="text-on-surface-variant font-body-lg text-body-lg">چت‌بات هوشمند شخصی شما.</p>
      </div>
      <div className="glass-panel rounded-[2rem] p-8 flex flex-col items-center justify-center min-h-[400px]">
        <span className="material-symbols-outlined text-6xl text-tertiary mb-4">smart_toy</span>
        <h2 className="text-xl font-bold text-on-surface">چگونه می‌توانم کمک کنم؟</h2>
        <p className="text-on-surface-variant mt-2 text-center max-w-md">من دستیار هوشمند شما هستم. می‌توانید سوالات خود را بپرسید.</p>
      </div>
    </div>
  );
};
export default Assistant;
