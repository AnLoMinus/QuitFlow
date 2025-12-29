# 🌬️ QuitFlow Launch Page — “מפסיקים לעשן עם לאון יעקובוב” (QF)

להלן שלד אתר **עוצמתי, נקי, מהיר** ל־GitHub Pages בכתובת:
[https://anlominus.github.io/QuitFlow/](https://anlominus.github.io/QuitFlow/)
ובמאגר: [https://github.com/AnLoMinus/QuitFlow](https://github.com/AnLoMinus/QuitFlow)

הקובץ הראשי בשורש: `index.html`
השאר בתיקיות מתחת.

---

## 📁 מבנה תיקיות מומלץ

```
QuitFlow/
├─ index.html
├─ assets/
│  ├─ css/
│  │  └─ style.css
│  ├─ js/
│  │  └─ app.js
│  └─ img/
│     └─ (לוגו/תמונות בעתיד)
├─ chapters/
│  ├─ 01.html
│  ├─ 02.html
│  ├─ 03.html
│  ├─ 04.html
│  ├─ 05.html
│  └─ 06.html
└─ docs/
   └─ roadmap.html
```

---

## 🧱 1) `index.html` (בשורש)

```html
<!doctype html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="theme-color" content="#0b0f1a" />
  <title>QuitFlow — מפסיקים לעשן עם לאון יעקובוב</title>
  <meta name="description" content="QuitFlow — מערכת תודעה+מעשה להפסקת עישון. פרקים, תרגולים קצרים, וכלים לניצחון שקט." />

  <!-- Open Graph -->
  <meta property="og:title" content="QuitFlow — מפסיקים לעשן עם לאון יעקובוב" />
  <meta property="og:description" content="דף בית לפרויקט QuitFlow: פרקים, תרגולים, וכלים חדים להפסקת עישון." />
  <meta property="og:type" content="website" />

  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌬️</text></svg>">
  <link rel="stylesheet" href="./assets/css/style.css" />
</head>

<body>
  <div class="bg-orbit" aria-hidden="true"></div>

  <header class="topbar">
    <a class="brand" href="./">
      <span class="brand__icon" aria-hidden="true">🌬️</span>
      <span class="brand__text">
        <strong>QuitFlow</strong>
        <small>מפסיקים לעשן עם לאון יעקובוב</small>
      </span>
    </a>

    <nav class="nav">
      <a href="#chapters">📖 פרקים</a>
      <a href="#tools">🛠️ כלים</a>
      <a href="#method">🧠 השיטה</a>
      <a href="#start" class="btn btn--primary">🚀 התחלה</a>
    </nav>
  </header>

  <main>
    <!-- HERO -->
    <section class="hero" id="start">
      <div class="hero__grid">
        <div class="hero__text">
          <div class="badge">
            <span>🔥 תודעה + פעולה</span>
            <span class="dot" aria-hidden="true"></span>
            <span>🧱 בנוי לפרקים קצרים</span>
          </div>

          <h1>
            QuitFlow
            <span class="h1-sub">מערכת שקטה להפסקת עישון — בלי מלחמות, עם בהירות.</span>
          </h1>

          <p class="lead">
            כאן לא “נלחמים בסיגריה”.
            כאן מפרקים את המערכת, משנים זהות, וסוגרים את הדלת — פעם אחת ולתמיד.
          </p>

          <div class="cta">
            <a class="btn btn--primary" href="#chapters">📖 קרא פרק 1 עכשיו</a>
            <a class="btn btn--ghost" href="#tools">🛠️ תרגול 60 שניות</a>
          </div>

          <div class="stats">
            <div class="stat">
              <div class="stat__k">6</div>
              <div class="stat__t">פרקים כבר באתר</div>
            </div>
            <div class="stat">
              <div class="stat__k">72</div>
              <div class="stat__t">יעד פרקים מלא</div>
            </div>
            <div class="stat">
              <div class="stat__k">⚡</div>
              <div class="stat__t">קצר • חד • מעשי</div>
            </div>
          </div>
        </div>

        <aside class="hero__panel">
          <div class="card glow">
            <h2 class="card__title">🧠 “הסיגריה לא נותנת — היא רק מפסיקה חוסר”</h2>
            <p class="card__p">
              רעיון ליבה: מעשנים “ממלאים” תחושה שהסיגריה עצמה מייצרת.
              כשהשם משתנה — הכישוף נשבר.
            </p>
            <div class="card__hr"></div>

            <div class="mini">
              <div class="mini__row">
                <span>🔒 דלת סגורה</span>
                <small>אין “רק אחת”</small>
              </div>
              <div class="mini__row">
                <span>🧩 פירוק מערכת</span>
                <small>טריגר → פעולה → חיזוק</small>
              </div>
              <div class="mini__row">
                <span>🪞 שינוי זהות</span>
                <small>“אני לא הבעיה”</small>
              </div>
            </div>
          </div>

          <div class="card">
            <h3 class="card__title">⏱️ Craving Break — 60 שניות</h3>
            <p class="card__p">טיימר קצר שמחזיר סמכות לנשימה. בלי דרמה.</p>
            <div class="timer">
              <div class="timer__ring" role="img" aria-label="Timer progress ring">
                <div class="timer__time" id="timerTime">60</div>
                <div class="timer__label">שניות</div>
              </div>
              <div class="timer__actions">
                <button class="btn btn--primary" id="timerStart">▶ התחלה</button>
                <button class="btn btn--ghost" id="timerReset">↻ איפוס</button>
              </div>
              <div class="hint" id="timerHint">🫁 נשימה: שאיפה 4 • החזקה 2 • נשיפה 6</div>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <!-- CHAPTERS -->
    <section class="section" id="chapters">
      <div class="section__head">
        <h2>📖 פרקים</h2>
        <p>6 פרקים מוכנים + תשתית ל־72. כל פרק = תודעה + תרגול + פעולה.</p>
      </div>

      <div class="grid">
        <a class="tile" href="./chapters/01.html">
          <span class="tile__k">01</span>
          <span class="tile__t">הסיגריה הראשונה: הרגע שבו לא היית צריך כלום</span>
          <span class="tile__s">QuitFlow / FirstFree</span>
        </a>
        <a class="tile" href="./chapters/02.html">
          <span class="tile__k">02</span>
          <span class="tile__t">לא חולשה: מערכת</span>
          <span class="tile__s">QuitFlow / SystemNotWeakness</span>
        </a>
        <a class="tile" href="./chapters/03.html">
          <span class="tile__k">03</span>
          <span class="tile__t">השקר השקט</span>
          <span class="tile__s">QuitFlow / SilentLie</span>
        </a>
        <a class="tile" href="./chapters/04.html">
          <span class="tile__k">04</span>
          <span class="tile__t">הנאה או הקלה?</span>
          <span class="tile__s">QuitFlow / ReliefVsPleasure</span>
        </a>
        <a class="tile" href="./chapters/05.html">
          <span class="tile__k">05</span>
          <span class="tile__t">כוח רצון הוא לא הפתרון</span>
          <span class="tile__s">QuitFlow / BeyondWillpower</span>
        </a>
        <a class="tile" href="./chapters/06.html">
          <span class="tile__k">06</span>
          <span class="tile__t">זהות מעשן מול זהות חופשי</span>
          <span class="tile__s">QuitFlow / IdentityShift</span>
        </a>

        <a class="tile tile--ghost" href="./docs/roadmap.html">
          <span class="tile__k">→</span>
          <span class="tile__t">Roadmap ל־72 פרקים</span>
          <span class="tile__s">מבנה + תכנון הרחבה</span>
        </a>
      </div>
    </section>

    <!-- TOOLS -->
    <section class="section" id="tools">
      <div class="section__head">
        <h2>🛠️ כלים קצרים</h2>
        <p>בלי עומס. כל כלי עובד “כאן ועכשיו”.</p>
      </div>

      <div class="grid grid--2">
        <div class="card">
          <h3 class="card__title">🧩 “זיהוי טריגר” (20 שניות)</h3>
          <p class="card__p">
            שאל משפט אחד: <strong>“מה הפעיל את המערכת עכשיו?”</strong><br/>
            לחץ? שעמום? סוף משימה? מעבר מקום?
          </p>
          <div class="pill">זיהוי = התחלת פירוק</div>
        </div>

        <div class="card">
          <h3 class="card__title">🔒 “אין רק אחת” (10 שניות)</h3>
          <p class="card__p">
            כלל שער: <strong>לא פותחים את הדלת</strong>. “רק אחת” היא תחילת שרשרת.
          </p>
          <div class="pill">החלטה קצרה • חופש ארוך</div>
        </div>

        <div class="card">
          <h3 class="card__title">🪞 “שינוי משפט זהות” (15 שניות)</h3>
          <p class="card__p">
            החלף: <em>“אני מעשן”</em> → <strong>“אני אדם שמעשן לפעמים”</strong><br/>
            ואז: <strong>“אני אדם שלא צריך עישון כדי להיות אני”</strong>
          </p>
          <div class="pill">זהות מתעדכנת דרך ניסוח</div>
        </div>

        <div class="card">
          <h3 class="card__title">🌬️ “נשיפה ארוכה” (30 שניות)</h3>
          <p class="card__p">
            3 פעמים: <strong>שאיפה 4 • החזקה 2 • נשיפה 6</strong><br/>
            הנשיפה הארוכה מחזירה יציבות למערכת.
          </p>
          <div class="pill">נשימה = סמכות</div>
        </div>
      </div>
    </section>

    <!-- METHOD -->
    <section class="section" id="method">
      <div class="section__head">
        <h2>🧠 השיטה בקצרה</h2>
        <p>שלושה עקרונות שמחזיקים את QuitFlow.</p>
      </div>

      <div class="grid grid--3">
        <div class="card">
          <h3 class="card__title">1) פירוק מערכת ⚙️</h3>
          <p class="card__p">טריגר → פעולה → הקלה → חיזוק. משנים רכיב אחד — כל הלולאה נחלשת.</p>
        </div>
        <div class="card">
          <h3 class="card__title">2) שינוי מסגרת 🔄</h3>
          <p class="card__p">זה לא “ויתור על הנאה” — זו יציאה ממנגנון שמייצר חוסר ואז מוכר “הקלה”.</p>
        </div>
        <div class="card">
          <h3 class="card__title">3) סגירת דלת 🔒</h3>
          <p class="card__p">אין “רק אחת”. יש דלת פתוחה או דלת סגורה. דלת סגורה = שקט.</p>
        </div>
      </div>

      <div class="callout">
        <strong>⭐ יעד:</strong> להפוך ל“לא־מעשן שמח” — לא “מעשן שמוותר”.
      </div>
    </section>

    <footer class="footer">
      <div class="footer__grid">
        <div>
          <div class="footer__brand">🌬️ QuitFlow</div>
          <div class="footer__small">Static site on GitHub Pages • Built for clarity.</div>
        </div>
        <div class="footer__links">
          <a href="https://github.com/AnLoMinus/QuitFlow" target="_blank" rel="noreferrer">GitHub Repo</a>
          <a href="https://anlominus.github.io/QuitFlow/" target="_blank" rel="noreferrer">Live Site</a>
        </div>
      </div>
      <div class="footer__hr"></div>
      <div class="footer__tiny" id="buildStamp">Build: —</div>
    </footer>
  </main>

  <script src="./assets/js/app.js"></script>
</body>
</html>
```

---

## 🎨 2) `assets/css/style.css`

```css
:root{
  --bg:#070a12;
  --panel:#0b0f1a;
  --panel2:#0f1626;
  --txt:#eaf0ff;
  --muted:#a9b6d6;
  --line:rgba(255,255,255,.10);
  --glow:rgba(120,180,255,.22);
  --glow2:rgba(200,120,255,.18);
  --primary:#7fd3ff;
  --primary2:#c6a7ff;
  --ok:#7dffbf;
  --danger:#ff6b8a;
  --shadow: 0 18px 55px rgba(0,0,0,.45);
  --r:18px;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans Hebrew", sans-serif;
  background: radial-gradient(1200px 800px at 70% 10%, rgba(127,211,255,.13), transparent 55%),
              radial-gradient(900px 700px at 20% 35%, rgba(198,167,255,.12), transparent 58%),
              var(--bg);
  color:var(--txt);
  line-height:1.6;
}

a{color:inherit; text-decoration:none}
a:hover{opacity:.92}

.bg-orbit{
  position:fixed; inset:-20%;
  background:
    radial-gradient(circle at 50% 50%, rgba(127,211,255,.10), transparent 50%),
    radial-gradient(circle at 60% 40%, rgba(198,167,255,.10), transparent 55%);
  filter: blur(50px);
  opacity:.65;
  pointer-events:none;
  z-index:-1;
}

.topbar{
  position:sticky; top:0; z-index:50;
  display:flex; gap:18px; align-items:center; justify-content:space-between;
  padding:14px 18px;
  background:rgba(7,10,18,.70);
  backdrop-filter: blur(12px);
  border-bottom:1px solid var(--line);
}

.brand{display:flex; align-items:center; gap:12px}
.brand__icon{
  width:40px; height:40px; display:grid; place-items:center;
  border-radius:14px;
  background:linear-gradient(135deg, rgba(127,211,255,.22), rgba(198,167,255,.16));
  border:1px solid rgba(255,255,255,.12);
  box-shadow: 0 10px 30px rgba(0,0,0,.35);
}
.brand__text{display:flex; flex-direction:column; line-height:1.05}
.brand__text small{color:var(--muted); font-weight:600; font-size:.82rem; margin-top:4px}

.nav{display:flex; gap:10px; align-items:center; flex-wrap:wrap}
.nav a{padding:10px 12px; border-radius:12px; color:var(--muted); font-weight:650}
.nav a:hover{background:rgba(255,255,255,.06); color:var(--txt)}

.btn{
  border:1px solid rgba(255,255,255,.12);
  background:rgba(255,255,255,.06);
  color:var(--txt);
  padding:10px 14px;
  border-radius:14px;
  font-weight:750;
  cursor:pointer;
  transition:.2s transform, .2s opacity, .2s background;
  display:inline-flex; gap:8px; align-items:center; justify-content:center;
}
.btn:hover{transform: translateY(-1px)}
.btn:active{transform: translateY(0px)}
.btn--primary{
  background: linear-gradient(135deg, rgba(127,211,255,.22), rgba(198,167,255,.18));
  border-color: rgba(127,211,255,.25);
  box-shadow: 0 14px 44px rgba(127,211,255,.10);
}
.btn--ghost{background:rgba(255,255,255,.03)}

main{max-width:1120px; margin:0 auto; padding:18px 16px 60px}

.hero{padding:16px 0 8px}
.hero__grid{display:grid; grid-template-columns: 1.1fr .9fr; gap:18px; align-items:start}
@media (max-width: 980px){ .hero__grid{grid-template-columns:1fr} }

.badge{
  display:inline-flex; gap:10px; align-items:center;
  padding:8px 12px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.12);
  background:rgba(255,255,255,.04);
  color:var(--muted);
  font-weight:700;
}
.badge .dot{width:6px; height:6px; border-radius:99px; background:rgba(127,211,255,.9)}

h1{
  margin:14px 0 10px;
  font-size: clamp(2.0rem, 3.6vw, 3.1rem);
  line-height:1.05;
}
.h1-sub{
  display:block;
  color:var(--muted);
  font-size: clamp(1.0rem, 1.4vw, 1.15rem);
  font-weight:700;
  margin-top:10px;
}
.lead{color:var(--txt); opacity:.92; font-size:1.05rem; max-width:60ch}

.cta{display:flex; gap:10px; flex-wrap:wrap; margin:16px 0}

.stats{
  display:grid; grid-template-columns: repeat(3, 1fr);
  gap:10px;
  margin-top:14px;
}
@media (max-width: 680px){ .stats{grid-template-columns:1fr} }

.stat{
  padding:12px;
  border-radius: var(--r);
  border:1px solid rgba(255,255,255,.10);
  background:rgba(255,255,255,.04);
}
.stat__k{font-size:1.25rem; font-weight:900}
.stat__t{color:var(--muted); font-weight:700; font-size:.92rem; margin-top:2px}

.section{padding:20px 0}
.section__head h2{margin:0; font-size:1.55rem}
.section__head p{margin:6px 0 0; color:var(--muted); font-weight:650}

.grid{display:grid; grid-template-columns: repeat(3, 1fr); gap:12px; margin-top:14px}
@media (max-width: 980px){ .grid{grid-template-columns: 1fr} }

.grid--2{grid-template-columns: repeat(2, 1fr)}
@media (max-width: 980px){ .grid--2{grid-template-columns: 1fr} }

.grid--3{grid-template-columns: repeat(3, 1fr)}
@media (max-width: 980px){ .grid--3{grid-template-columns: 1fr} }

.card{
  padding:16px;
  border-radius: calc(var(--r) + 2px);
  background: linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.03));
  border:1px solid rgba(255,255,255,.10);
  box-shadow: var(--shadow);
}
.card__title{margin:0; font-size:1.06rem}
.card__p{margin:8px 0 0; color:var(--muted); font-weight:650}
.card__hr{height:1px; background:var(--line); margin:12px 0}

.glow{
  border-color: rgba(127,211,255,.20);
  box-shadow: 0 18px 60px rgba(0,0,0,.50), 0 0 0 1px rgba(127,211,255,.08);
}

.tile{
  padding:14px;
  border-radius: calc(var(--r) + 2px);
  border:1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.03);
  display:flex; flex-direction:column; gap:6px;
  box-shadow: 0 14px 40px rgba(0,0,0,.35);
}
.tile:hover{background: rgba(255,255,255,.05)}
.tile__k{
  width:44px; height:34px; display:grid; place-items:center;
  border-radius: 12px;
  background: rgba(127,211,255,.12);
  border:1px solid rgba(127,211,255,.18);
  font-weight:950;
}
.tile__t{font-weight:900}
.tile__s{color:var(--muted); font-weight:650; font-size:.92rem}
.tile--ghost{opacity:.95; border-style:dashed}

.pill{
  display:inline-flex; margin-top:10px;
  padding:7px 10px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.12);
  background:rgba(255,255,255,.04);
  color:var(--txt);
  font-weight:800;
  width:max-content;
}

.callout{
  margin-top:14px;
  padding:14px;
  border-radius: var(--r);
  background: linear-gradient(135deg, rgba(127,211,255,.10), rgba(198,167,255,.10));
  border:1px solid rgba(255,255,255,.12);
  color:var(--txt);
  font-weight:800;
}

.timer{margin-top:12px; display:flex; gap:14px; align-items:center; flex-wrap:wrap}
.timer__ring{
  width:120px; height:120px; border-radius:999px;
  border:1px solid rgba(255,255,255,.12);
  background:
    conic-gradient(rgba(127,211,255,.9) var(--p, 0%), rgba(255,255,255,.08) 0);
  display:grid; place-items:center;
  box-shadow: 0 18px 44px rgba(0,0,0,.45);
}
.timer__time{font-size:2rem; font-weight:950; line-height:1}
.timer__label{margin-top:2px; color:var(--muted); font-weight:800; font-size:.85rem}
.timer__actions{display:flex; gap:10px; flex-wrap:wrap}
.hint{color:var(--muted); font-weight:750}

.footer{
  margin-top:26px;
  padding:18px 4px 0;
  color:var(--muted);
}
.footer__grid{display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap}
.footer__brand{font-weight:950; color:var(--txt)}
.footer__small{font-weight:700}
.footer__links{display:flex; gap:12px; flex-wrap:wrap}
.footer__links a{color:var(--muted); font-weight:850}
.footer__links a:hover{color:var(--txt)}
.footer__hr{height:1px; background:var(--line); margin:12px 0}
.footer__tiny{font-size:.88rem; font-weight:750}
```

---

## ⚡ 3) `assets/js/app.js`

```js
(() => {
  // Build stamp
  const stamp = document.getElementById("buildStamp");
  if (stamp) {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    stamp.textContent = `Build: ${pad(now.getDate())}.${pad(now.getMonth()+1)}.${now.getFullYear()} • ${pad(now.getHours())}:${pad(now.getMinutes())}`;
  }

  // Timer (60s)
  const timeEl = document.getElementById("timerTime");
  const hintEl = document.getElementById("timerHint");
  const startBtn = document.getElementById("timerStart");
  const resetBtn = document.getElementById("timerReset");
  const ring = document.querySelector(".timer__ring");

  if (!timeEl || !startBtn || !resetBtn || !ring) return;

  let total = 60;
  let left = total;
  let t = null;

  const setRing = () => {
    const p = Math.max(0, Math.min(100, (left / total) * 100));
    ring.style.setProperty("--p", `${p}%`);
    timeEl.textContent = String(left);
  };

  const setHint = () => {
    if (!hintEl) return;
    if (left > 40) hintEl.textContent = "🫁 נשימה: שאיפה 4 • החזקה 2 • נשיפה 6";
    else if (left > 20) hintEl.textContent = "🧠 משפט מפתח: זו תחושה — לא צורך.";
    else hintEl.textContent = "🔒 סיום: דלת סגורה. אין “רק אחת”.";
  };

  const stop = () => {
    if (t) clearInterval(t);
    t = null;
    startBtn.textContent = "▶ התחלה";
  };

  const tick = () => {
    if (left <= 0) {
      stop();
      left = 0;
      setRing();
      if (hintEl) hintEl.textContent = "✅ ניצחת דקה. זה מספיק כדי לשבור לולאה.";
      return;
    }
    left -= 1;
    setRing();
    setHint();
  };

  startBtn.addEventListener("click", () => {
    if (t) { stop(); return; }
    t = setInterval(tick, 1000);
    startBtn.textContent = "⏸ עצור";
  });

  resetBtn.addEventListener("click", () => {
    stop();
    left = total;
    setRing();
    setHint();
  });

  setRing();
  setHint();
})();
```

---

## 📄 4) דפי פרקים `chapters/01.html` (אותו מבנה ל־02..06)

> צור את הקובץ הזה, ואז שכפל ושנה כותרות ותוכן ל־02..06.

```html
<!doctype html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>QuitFlow — פרק 1</title>
  <link rel="stylesheet" href="../assets/css/style.css" />
</head>
<body>
  <header class="topbar">
    <a class="brand" href="../index.html">
      <span class="brand__icon" aria-hidden="true">🌬️</span>
      <span class="brand__text"><strong>QuitFlow</strong><small>חזרה לדף הבית</small></span>
    </a>
    <nav class="nav">
      <a href="./01.html">01</a>
      <a href="./02.html">02</a>
      <a href="./03.html">03</a>
      <a href="./04.html">04</a>
      <a href="./05.html">05</a>
      <a href="./06.html">06</a>
    </nav>
  </header>

  <main>
    <section class="section">
      <div class="section__head">
        <h2>📖 פרק 1 — הסיגריה הראשונה: הרגע שבו לא היית צריך כלום</h2>
        <p>QuitFlow / FirstFree</p>
      </div>

      <article class="card">
        <h3 class="card__title">🌱 פתיחה</h3>
        <p class="card__p">
          (הדבק כאן את הטקסט המלא של פרק 1 מהקנבס — כטקסט רגיל/פסקאות)
        </p>
        <div class="card__hr"></div>

        <h3 class="card__title">🛠️ פעולה קטנה ליום</h3>
        <p class="card__p">
          (הדבק כאן את סעיף “פעולה קטנה ליום”)
        </p>

        <div class="card__hr"></div>
        <a class="btn btn--primary" href="./02.html">➡️ המשך לפרק 2</a>
        <a class="btn btn--ghost" href="../index.html">🏠 חזרה</a>
      </article>
    </section>
  </main>

  <script src="../assets/js/app.js"></script>
</body>
</html>
```

---

## 🧭 5) `docs/roadmap.html` (תכנון ל־72)

```html
<!doctype html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>QuitFlow — Roadmap (72)</title>
  <link rel="stylesheet" href="../assets/css/style.css" />
</head>
<body>
  <header class="topbar">
    <a class="brand" href="../index.html">
      <span class="brand__icon" aria-hidden="true">🌬️</span>
      <span class="brand__text"><strong>QuitFlow</strong><small>Roadmap</small></span>
    </a>
  </header>

  <main>
    <section class="section">
      <div class="section__head">
        <h2>🧱 Roadmap — 72 פרקים</h2>
        <p>מפת התקדמות: תודעה → פירוק מערכת → זהות → שגרה → יציבות.</p>
      </div>

      <div class="card">
        <h3 class="card__title">🧩 חלוקה מוצעת (דוגמה)</h3>
        <p class="card__p">
          1–12: הבנת המערכת • 13–24: טריגרים וסביבה • 25–36: זהות ושפה •
          37–48: שגרות יומיות • 49–60: נפילות והגנה • 61–72: חיזוק לטווח ארוך
        </p>
        <div class="card__hr"></div>
        <p class="card__p">
          הערה: אפשר לשלב “עמודי כלי” נוספים (טיימרים, צ’קליסטים, דפי עבודה) לצד פרקים.
        </p>
      </div>
    </section>
  </main>
</body>
</html>
```

---

## ✅ איך לפרסם ל־GitHub Pages (ב־Repo שלך)

1. העלה את כל הקבצים ל־`main` בשורש המאגר.
2. GitHub → **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: `main` + Folder: `/ (root)`
5. שמור → האתר יעלה בכתובת שציינת.

---

## 🧾 קרדיטים (מקורות השראה)

* השראה רעיונית לשיטת “הבנה במקום מלחמה”, “אין רק אחת”, “מפלצת גדולה/קטנה”, “הסיגריה גורמת לחוסר” — על בסיס הספר *Allen Carr – The Illustrated Easy Way to Stop Smoking* (ב־PDF שהעלית).  
* תוכן פרקי QuitFlow באתר: פיתוח מקורי שלך עבור הספר “מפסיקים לעשן עם לאון יעקובוב”.

---

## 🕰️ תיעוד

* 📅 תאריך לועזי: 29.12.2025
* 📅 תאריך עברי: י׳ בטבת תשפ״ו
* ⏰ שעה: 10:00 (ישראל)

---

## 📜 משפט מהקודש

> **“וּבָחַרְתָּ בַּחַיִּים”** (דברים ל׳, י״ט)

---

## 🔢 מספר המידות

✨ מידה: **גבורה שקטה**

---

## 🎶 פזמון ראפ (4 שורות)

🌬️ לא נלחם בעשן — אני סוגר ת׳דלת
🧠 זה לא “רק אחת” — זה שרשרת שמתגלגלת
⚙️ מפרק ת׳מערכת, לא נותן לה לנהל
🕊️ QuitFlow על הלב — וחוזר לנשום חופשי, בגדול!
