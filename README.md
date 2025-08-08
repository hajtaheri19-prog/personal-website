```markdown
# وبسایت شخصی حسین

این یک وبسایت شخصی حرفه‌ای است که با استفاده از **React** و **Tailwind CSS** ساخته شده است. این وبسایت شامل بخش‌های مختلفی مثل صفحه اصلی، درباره من، نمونه‌کارها، مهارت‌ها، و فرم تماس است که برای نمایش مهارت‌ها و پروژه‌های یک توسعه‌دهنده طراحی شده.

## ویژگی‌ها
- طراحی ریسپانسیو و سازگار با موبایل
- حالت تاریک/روشن (Dark/Light Mode)
- انیمیشن‌های نرم و جذاب
- فرم تماس تعاملی
- بهینه‌سازی برای SEO
- استفاده از فونت‌های فارسی (وزیرمتن) و انگلیسی (Inter)

## پیش‌نیازها
- **Node.js** (نسخه 16 یا بالاتر)
- **npm** یا **yarn**

## نصب و راه‌اندازی
1. مخزن پروژه را کلون کنید:
   ```bash
   git clone https://github.com/your-username/personal-website.git
   ```
2. به پوشه پروژه بروید:
   ```bash
   cd personal-website
   ```
3. وابستگی‌ها را نصب کنید:
   ```bash
   npm install
   ```
4. Tailwind CSS را پیکربندی کنید:
   ```bash
   npx tailwindcss init -p
   ```
5. پروژه را اجرا کنید:
   ```bash
   npm start
   ```
   پروژه روی `http://localhost:3000` اجرا می‌شود.

## ساختار پروژه
```
personal-website/
├── public/
│   ├── index.html
│   ├── resume.pdf
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   └── manifest.json
├── src/
│   ├── assets/
│   │   ├── profile.jpg
│   │   ├── about.jpg
│   │   ├── project1.jpg
│   │   ├── project2.jpg
│   │   └── project3.jpg
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Portfolio.js
│   │   ├── Skills.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── App.test.js
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## شخصی‌سازی
- **تصاویر**: تصاویر داخل `src/assets/` را با تصاویر خودتان جایگزین کنید.
- **محتوا**: متن‌های داخل کامپوننت‌ها (مثل `About.js` و `Portfolio.js`) را با اطلاعات خودتان ویرایش کنید.
- **لینک‌ها**: لینک‌های شبکه‌های اجتماعی در `Contact.js` را به‌روزرسانی کنید.

## انتشار
برای انتشار پروژه:
1. پروژه را بیلد کنید:
   ```bash
   npm run build
   ```
2. فایل‌های داخل پوشه `build` را روی هاستینگ (مثل Netlify یا Vercel) آپلود کنید.

## تکنولوژی‌ها
- **React**: برای ساخت رابط کاربری
- **Tailwind CSS**: برای استایل‌دهی
- **Vazirmatn & Inter**: فونت‌های فارسی و انگلیسی
- **Picsum**: برای تصاویر placeholder (می‌توانید جایگزین کنید)

## پشتیبانی
اگر سوالی دارید یا به مشکلی برخوردید، با ایمیل your-email@example.com تماس بگیرید یا در GitHub ایشو باز کنید.

---
© ۱۴۰۴ - وبسایت شخصی حسین
```