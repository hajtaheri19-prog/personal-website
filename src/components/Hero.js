// در ابتدای فایل Hero.js
import React, { useState, useEffect } from 'react';

// عکس‌ها را برای بهینه‌سازی بهتر import کنید
import profilePic from '../assets/profile.jpg'; // آدرس عکس پروفایل
import heroBg1 from '../assets/hero-bg1.jpg';   // آدرس پس‌زمینه اول
import heroBg2 from '../assets/hero-bg2.jpg';   // آدرس پس‌زمینه دوم
import heroBg3 from '../assets/hero-bg3.jpg';   // آدرس پس‌زمینه سوم

const backgroundImages = [heroBg1, heroBg2, heroBg3];

function Hero() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 7000); // هر ۷ ثانیه عکس عوض می‌شود

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      {/* کانتینر برای نمایش و انیمیشن پس‌زمینه‌ها */}
      {backgroundImages.map((bg, index) => (
        <div
          key={index}
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-2000 ease-in-out"
          style={{
            backgroundImage: `url(${bg})`,
            opacity: index === currentBgIndex ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* محتوای اصلی بخش Hero */}
      <div className="container mx-auto px-4 text-center z-10 animate-fade-in">
        
        {/* بخش جدید: عکس پروفایل با انیمیشن تپش */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-teal-500 opacity-75 animate-pulse"></div>
          <img src={profilePic} alt="عکس پروفایل حسین" className="relative w-full h-full rounded-full shadow-2xl border-4 border-white/20 object-cover" />
        </div>

        <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">سلام، من حسین هستم</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">توسعه‌دهنده‌ای خلاق با تخصص در Flutter، Android و طراحی UI/UX، آماده برای خلق تجربه‌های دیجیتال بی‌نظیر</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="#contact" className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 hover-glow transition-colors text-lg font-semibold">تماس با من</a>
          <a href="#portfolio" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-green-600 transition-colors text-lg font-semibold">نمونه‌کارها</a>
        </div>
      </div>
    </section>
  );
}

export default Hero; // فایل را export کنید تا در جای دیگر قابل استفاده باشد