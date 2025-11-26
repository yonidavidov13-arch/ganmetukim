import React, { useRef, useEffect, useState } from "react";

function FAQCarousel() {
  const [current, setCurrent] = useState(0);
  const indexRef = useRef(0);
  const slides = [
    {
      q: "?מה שעות הפעילות של הגן",
      a: `שעות הפעילות שלנו 7:30-16:30, ימים א׳–ה׳`
    },
    {
      q: "?איזה קבוצות גיל יש בגן",
      a: `הגן מחולק לשתי קבוצות גיל, כאשר לכל קבוצה יש קומה וחצר נפרדת כדי להבטיח סביבה מותאמת לכל שלב התפתחותי.

• קטנקטנים – קבלה בספטמבר מגיל 7 חודשים ועד 1.3
• קבוצת צעירים + בוגרים – קבלה בספטמבר מגיל 1.4 ועד 3`
    },
    {
      q: "?מה היחס ילדים לצוות",
      a: `בקבוצת הקטנטנים היחס בין ילד למחנכת מטפלת הוא 1:5<br/>בקבוצת הבוגרים היחס בין ילד למחנכת מטפלת הוא 1:7`
    },
    {
      q: "?האם הצוות מחזיק בהכשרות ותעודות מקצועיות",
      a: `כן, כל מחנכת מטפלת בגן עברה קורס מטפלות מוסמך או בעלת תעודת הוראה. בנוסף כולן מחזיקות בהכשרת עזרה ראשונה והתנהלות בטוחה — כחלק מדרישות רישיון משרד החינוך`
    },
    {
      q: "?איך מתבצע תהליך ההסתגלות לילדים חדשים",
      a: `אנחנו עובדים לפי לוח הסתגלות מובנה, שמסייע לילד להכיר את הגן בקצב נעים ובטוח. יחד עם זאת, מובילת הכיתה נמצאת בקשר ישיר וצמוד מולכם לאורך כל התקופה, וככל שצריך — היא מתאימה יחד איתכם את שלבי ההסתגלות לצרכים הספציפיים של הילד.

בימים הראשונים ההורה יכול להישאר בגן, ובהמשך מאריכים את זמן השהות ומצמצמים את נוכחות ההורה, בהתאם לתחושת הביטחון של הילד ולשיקול הצוות. המטרה היא ליצור מעבר רגוע, בטוח ומחבק — גם לילד וגם לכם כהורים`}
    ,
    {
      q: "?האם הגן נמצא תחת פיקוח",
      a: `כן. הגן נמצא תחת פיקוח של משרד החינוך ועומד בדרישות הרשמיות — בטיחות, כוח אדם, ליווי יועצת חינוכית, תנאים פיזיים, תברואה ועוד`
    },
    {
      q: "?האם יש מבשלת שמכינה אוכל במקום",
      a: `כן. בגן יש מבשלת במשרה מלאה שמכינה אוכל חם, טעים וביתי מדי יום.
התפריט מותאם לגיל הילדים ע״י תזונאית`
    },
    {
      q: "?האם אפשר להגיע לסיור היכרות בגן",
      a: `בוודאי, נשמח להזמין אתכם לפגישת הכירות בגן. לראות את החצר, הכיתות, ההפעלות, להכיר את הצוות, להרגיש את האווירה ולשאול את כל השאלות החשובות לכם.
אפשר להשאיר פרטים בטופס באתר או להתקשר ישירות, ונחזור אליכם לתיאום פגישה`
    }
  ];

  return (
    <>
      <div className="max-w-3xl mx-auto relative min-h-[260px]">

      <button
        onClick={() => {
          indexRef.current = (current - 1 + slides.length) % slides.length;
          setCurrent(indexRef.current);
        }}
        className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full text-2xl z-20 hover:bg-gray-100"
      >
        ‹
      </button>


      <button
        onClick={() => {
          indexRef.current = (current + 1) % slides.length;
          setCurrent(indexRef.current);
        }}
        className="absolute -right-10 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full text-2xl z-20 hover:bg-gray-100"
      >
        ›
      </button>


      {slides.map((s, i) => (
        <div
          key={i}
          className={`transition-opacity duration-700 absolute inset-0 p-6 bg-white rounded-2xl shadow text-right ${
            i === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <h3 className="font-bold text-xl mb-2">{s.q}</h3>
          <p className="text-lg" dangerouslySetInnerHTML={{ __html: s.a }}></p>
        </div>
      ))}


      <div className="flex justify-center gap-2 mt-10 relative z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              indexRef.current = i;
              setCurrent(i);
            }}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-pink-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
    </>
  );
}

export default function App() {
  return (
    <div className="font-sans text-gray-800">

      <section className="relative bg-gradient-to-br from-pink-300 to-yellow-200 py-24 px-6 text-center overflow-hidden">
        <h1 className="text-5xl font-bold mb-4 flex items-center justify-center gap-3">גן מתוקים</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          אהבה, התפתחות וחינוך – גן ילדים איכותי לגילאי 3–0 בגבעתיים
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="tel:0546336337"
            className="px-8 py-4 bg-pink-600 text-white rounded-2xl text-lg font-semibold shadow-lg"
          >
            התקשר עכשיו
          </a>
          <a
            href="#lead-form"
            className="px-8 py-4 bg-white text-pink-600 rounded-2xl text-lg font-semibold shadow-lg border border-pink-600"
          >
            השארת פרטים
          </a>
        </div>
      </section>


      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">גן מתוקים – גן ילדים בגבעתיים</h2>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow leading-relaxed text-lg">
          <p className="mb-4 text-right">אם אתם מחפשים גן ילדים איכותי בגבעתיים – גן מתוקים הוא בחירה מצוינת להורים שמחפשים מסגרת חמה, מקצועית ובטוחה לגילאי 0-3. הגן פועל בגבעתיים ומציע סביבה מטופחת, יציבה ומשפחתית עם צוות קבוע שמלווה כל ילד באופן אישי</p>
          <p className="mb-4 text-right">בגן תמצאו מבשלת במשרה מלאה המגישה אוכל חם וביתי מדי יום, חצר משחקים גדולה ובטוחה, וחוגים שבועיים כמו תנועה ומוזיקה – כל מה שהורים צריכים כאשר הם מחפשים גן ילדים בגבעתיים שמספק גם חום ואהבה וגם הקניית הרגלים וערכים</p>
          <p className="text-right">הגן ממוקם ברחוב רמב"ם 16 בגבעתיים, באזור מרכזי ונגיש במיוחד. אתם מוזמנים להגיע לפגישת היכרות, להכיר אותנו – את הצוות, לראות את הכיתות והחצר ופשוט להרגיש בבית</p>
        </div>
      </section>


      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">?מה יש אצלנו בגן</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="flex items-start gap-4 text-right bg-pink-50 p-6 rounded-2xl shadow">
            <span className="text-4xl">👩‍🍳</span>
            <p className="text-lg font-semibold">
              מבשלת במשרה מלאה שמכינה אוכל חם, טעים וביתי כל יום – מותאם לגילאי 0-3
            </p>
          </div>
          <div className="flex items-start gap-4 text-right bg-yellow-50 p-6 rounded-2xl shadow">
            <span className="text-4xl">🎵</span>
            <p className="text-lg font-semibold">
              שני חוגים שבועיים – חוג תנועה וחוג מוזיקה שמעשירים את עולמם של הילדים
            </p>
          </div>
          <div className="flex items-start gap-4 text-right bg-blue-50 p-6 rounded-2xl shadow">
            <span className="text-4xl">👶</span>
            <p className="text-lg font-semibold">
              קבוצות קטנות ואינטימיות – יחס אישי אמיתי לכל ילד ותחושת ביטחון גבוהה
            </p>
          </div>
          <div className="flex items-start gap-4 text-right bg-green-50 p-6 rounded-2xl shadow">
            <span className="text-4xl">🏡</span>
            <p className="text-lg font-semibold">
              חצר גדולה, צבעונית ובטוחה – שמקדמת מיומנויות מוטוריות ופריקת אנרגיה
            </p>
          </div>
          <div className="flex items-start gap-4 text-right bg-purple-50 p-6 rounded-2xl shadow">
            <span className="text-4xl">❤️</span>
            <p className="text-lg font-semibold">
              צוות חם, מקצועי ובעל ניסיון רב בגיל הרך – עם המון סבלנות, הקשבה וחיוך
            </p>
          </div>
          <div className="flex items-start gap-4 text-right bg-orange-50 p-6 rounded-2xl shadow">
            <span className="text-4xl">🏫</span>
            <p className="text-lg font-semibold">
              גן עם רישיון מלא ובפיקוח משרד החינוך
            </p>
          </div>
        </div>
      </section>


      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">?מה ההורים אומרים עלינו</h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow text-center text-lg">
          <p className="mb-4">?רוצים לראות המלצות אמיתיות מהורים על גן מתוקים</p>
          <a
            href="https://www.baderechlagan.co.il/gans/6b0916b98d"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-pink-700 transition"
          >
            לחצו כאן לקריאת ההמלצות
          </a>
        </div>
      </section>


      <section id="lead-form" className="py-16 px-6 bg-white max-w-3xl mx-auto mt-10">
        <h2 className="text-3xl font-bold text-center mb-8">?רוצה לשמור מקום לשנה הקרובה</h2>
        <form
          name="lead-form"
          method="POST"
          data-netlify="true"
          className="space-y-6 bg-gray-50 p-8 rounded-2xl shadow-lg"
        >
          <input type="hidden" name="form-name" value="lead-form" />
          <div>
            <label className="block mb-2 font-semibold">שם מלא</label>
            <input type="text" className="w-full border rounded-xl p-3" name="name" />
          </div>
          <div>
            <label className="block mb-2 font-semibold">טלפון</label>
            <input type="tel" className="w-full border rounded-xl p-3" name="phone" />
          </div>
          <div>
            <label className="block mb-2 font-semibold">גיל הילד</label>
            <input type="text" className="w-full border rounded-xl p-3" name="childAge" />
          </div>
          <button className="w-full bg-pink-600 text-white py-4 rounded-2xl text-lg font-semibold shadow">
            שלחו לי פרטים
          </button>
        </form>
      </section>


      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">שאלות נפוצות</h2>
        <FAQCarousel />
      </section>


      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">המיקום שלנו</h2>
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.962877855634!2d34.80744992457074!3d32.07025277396691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ba5b0e38c99%3A0xdd8291db14efb360!2z15LXnyDXnteq15XXp9eZ150!5e0!3m2!1siw!2sil!4v1764068959960!5m2!1siw!2sil"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>


      <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
        <a
          href="tel:0546336337"
          className="bg-pink-600 text-white px-4 py-3 rounded-full shadow-lg text-lg font-bold"
        >
          📞
        </a>
        <a
          href="https://wa.me/972546336337"
          className="bg-green-500 text-white px-4 py-3 rounded-full shadow-lg text-lg font-bold"
        >
          💬
        </a>
      </div>


      <footer className="py-10 text-center text-sm text-gray-600 bg-white mt-8">
        <p>גן מתוקים • כתובת: רמב"ם 16 גבעתיים • טלפון: 054-6336337</p>
        <p className="mt-2">שעות פעילות: 7:30-16:30</p>
      </footer>
    </div>
  );
}
