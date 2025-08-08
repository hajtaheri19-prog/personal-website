// فایل: Contact.js

import React, { useState } from 'react';

// می‌توانید این آرایه را برای خوانایی بهتر در بالای کامپوننت نگه دارید
const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.5h-3v-5.5c0-1.378-.112-3.135-1.912-3.135-1.912 0-2.203 1.492-2.203 3.034v5.601h-3v-11h2.881v1.5h.04c.401-.758 1.378-1.557 2.834-1.557 3.03 0 3.587 1.996 3.587 4.595v6.462z"/></svg>, color: 'text-blue-600 hover:text-blue-700' },
  { name: 'GitHub', href: 'https://github.com', icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>, color: 'text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300' },
  { name: 'Instagram', href: 'https://instagram.com', icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 4.441c4.237 0 7.559 3.322 7.559 7.559s-3.322 7.559-7.559 7.559-7.559-3.322-7.559-7.559 3.322-7.559 7.559-7.559zm0 12.668c2.797 0 5.109-2.312 5.109-5.109s-2.312-5.109-5.109-5.109-5.109 2.312-5.109 5.109 2.312 5.109 5.109 5.109zm5.939-13.029c-.978 0-1.772.794-1.772 1.772s.794 1.772 1.772 1.772 1.772-.794 1.772-1.772-.794-1.772-1.772-1.772z"/></svg>, color: 'text-pink-500 hover:text-pink-600' }
];

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    if (!navigator.onLine) {
      setStatus('error');
      setErrorMessage('اتصال اینترنت برقرار نیست. لطفا شبکه خود را بررسی کنید.');
      setTimeout(() => { setStatus('idle'); setErrorMessage(''); }, 5000);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mvgqvrbq", {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // پاک کردن فرم
        setTimeout(() => setStatus('idle'), 5000); // بازگشت به فرم بعد از ۵ ثانیه
      } else {
        setStatus('error');
        setErrorMessage('خطایی در ارسال پیام رخ داد. لطفا بعدا تلاش کنید.');
        setTimeout(() => { setStatus('idle'); setErrorMessage(''); }, 5000);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('یک خطای پیش‌بینی نشده رخ داد. لطفا دوباره امتحان کنید.');
      setTimeout(() => { setStatus('idle'); setErrorMessage(''); }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">تماس با من</h2>
        <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl min-h-[450px] flex flex-col justify-center">
          {status === 'success' ? (
            <div className="text-center animate-fade-in">
              <svg className="mx-auto w-24 h-24 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <h3 className="text-3xl font-bold mt-4 text-gray-800 dark:text-white">ارسال شد!</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">از پیام شما متشکرم. به زودی با شما تماس خواهم گرفت.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="نام شما" required className="w-full p-4 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"/>
              </div>
              <div className="mb-6">
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="ایمیل شما" required className="w-full p-4 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"/>
              </div>
              <div className="mb-6">
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="پیام شما" rows="5" required className="w-full p-4 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"></textarea>
              </div>
              <button type="submit" disabled={status === 'submitting'} className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-lg hover:from-green-600 hover:to-blue-600 transition-all font-semibold text-lg disabled:opacity-50 disabled:cursor-wait">
                {status === 'submitting' ? 'در حال ارسال...' : 'ارسال پیام'}
              </button>
              {status === 'error' && (
                <p className="text-center text-red-500 mt-4 font-semibold">{errorMessage}</p>
              )}
            </form>
          )}
        </div>
        <div className="flex justify-center gap-8 mt-12">
          {socialLinks.map((social) => (
            <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className={`transform hover:scale-110 transition-transform ${social.color}`}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;