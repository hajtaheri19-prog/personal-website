```jsx
import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">درباره من</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <img src="/assets/about.jpg" alt="تصویر درباره حسین" className="w-full md:w-1/3 rounded-2xl shadow-xl hover-scale" loading="lazy" />
          <div className="md:w-2/3">
            <p className="text-lg mb-6 leading-relaxed">
              من حسین، توسعه‌دهنده نرم‌افزار با بیش از ۵ سال تجربه در ساخت اپلیکیشن‌های موبایل و وب هستم. تخصص من در Flutter، Android و طراحی رابط کاربری است. هدفم خلق محصولاتی کاربرپسند و نوآورانه است که تجربه‌ای بی‌نظیر ارائه کنند.
            </p>
            <div className="flex gap-4">
              <a href="/resume.pdf" download className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 hover-glow transition-colors">دانلود رزومه</a>
              <a href="https://linkedin.com" target="_blank" className="bg-gray-600 text-white px-8 py-3 rounded-full hover:bg-gray-700 hover-glow transition-colors">لینکدین</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
```