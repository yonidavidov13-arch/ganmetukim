import React, { useRef, useState } from "react";

function FAQCarousel() {
  const [current, setCurrent] = useState(0);
  const indexRef = useRef(0);
  const slides = [
    { q: "?מה שעות הפעילות של הגן", a: `שעות הפעילות שלנו 7:30-16:30, ימים א׳–ה׳` },
    { q: "?איזה קבוצות גיל יש בגן", a: `הגן מחולק לשתי קבוצות גיל...` },
    { q: "?מה היחס ילדים לצוות", a: `1:5 בקטנטנים, 1:7 בבוגרים` },
    { q: "?האם הצוות מחזיק בתעודות", a: `כן, כל הצוות מוסמך ומחזיק בעזרה ראשונה.` },
  ];

  return (
    <div className="max-w-3xl mx-auto relative min-h-[260px]">
      <button onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
        className="absolute -left-10 top-1/2 p-3 bg-white shadow rounded-full">‹</button>

      <button onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute -right-10 top-1/2 p-3 bg-white shadow rounded-full">›</button>

      {slides.map((s, i) => (
        <div key={i} className={`absolute inset-0 p-6 bg-white rounded-2xl shadow transition-opacity ${
            i === current ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}>
          <h3 className="font-bold text-xl mb-2">{s.q}</h3>
          <p className="text-lg" dangerouslySetInnerHTML={{ __html: s.a }} />
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <section className="bg-gradient-to-br from-pink-300 to-yellow-200 py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">גן מתוקים</h1>
        <p className="text-lg md:text-xl mb-8">אהבה, התפתחות וחינוך – גן ילדים איכותי לגילאי 0–3 בגבעתיים</p>

        <div className="flex justify-center gap-4">
          <a href="tel:0546336337" className="px-8 py-4 bg-pink-600 text-white rounded-2xl text-lg font-semibold shadow-lg">התקשר עכשיו</a>
          <a href="#lead-form" className="px-8 py-4 bg-white text-pink-600 rounded-2xl text-lg font-semibold shadow-lg border border-pink-600">השארת פרטים</a>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">שאלות נפוצות</h2>
        <FAQCarousel />
      </section>
    </div>
  );
}
