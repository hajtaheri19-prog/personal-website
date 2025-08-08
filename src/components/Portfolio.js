```jsx
import React from 'react';

function Portfolio() {
  const projects = [
    { title: 'اپلیکیشن فروشگاهی', desc: 'اپلیکیشن موبایل با Flutter و طراحی کاربرپسند', link: '#', img: '/assets/project1.jpg' },
    { title: 'وبسایت شرکتی', desc: 'طراحی مدرن با Tailwind CSS و React', link: '#', img: '/assets/project2.jpg' },
    { title: 'پنل مدیریت', desc: 'ساخته شده با Node.js و MongoDB', link: '#', img: '/assets/project3.jpg' },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">نمونه‌کارها</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover-scale hover-glow animate-fade-in">
              <img src={project.img} alt={`تصویر پروژه ${project.title}`} className="w-full h-56 object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.desc}</p>
                <a href={project.link} target="_blank" className="text-blue-500 hover:underline font-medium">مشاهده پروژه</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
```