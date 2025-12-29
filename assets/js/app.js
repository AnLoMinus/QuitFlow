// QuitFlow minimal interactions
(function(){
  const timerTime = document.getElementById('timerTime');
  const timerHint = document.getElementById('timerHint');
  const timerRing = document.querySelector('.timer__ring');
  const startBtn = document.getElementById('timerStart');
  const resetBtn = document.getElementById('timerReset');
  let timerInterval = null;
  let remaining = 60;

  function renderTimer(){
    if(!timerTime || !timerRing) return;
    timerTime.textContent = remaining.toString().padStart(2,'0');
    const progress = (60 - remaining) / 60 * 360;
    timerRing.style.background = `conic-gradient(var(--primary) ${progress}deg, rgba(255,255,255,.06) ${progress}deg)`;
  }

  function startTimer(){
    if(timerInterval || !timerTime) return;
    timerHint && (timerHint.textContent = '🫁 שאיפה 4 • החזקה 2 • נשיפה 6 — אתה בשליטה');
    timerInterval = setInterval(()=>{
      remaining -= 1;
      if(remaining <= 0){
        remaining = 0;
        clearInterval(timerInterval);
        timerInterval = null;
        timerHint && (timerHint.textContent = '🎉 רגע חשק עבר — שים לב שהרגשת נשארת איתך גם בלי עשן');
      }
      renderTimer();
    }, 1000);
  }

  function resetTimer(){
    remaining = 60;
    clearInterval(timerInterval);
    timerInterval = null;
    timerHint && (timerHint.textContent = '🫁 נשימה: שאיפה 4 • החזקה 2 • נשיפה 6');
    renderTimer();
  }

  startBtn && startBtn.addEventListener('click', startTimer);
  resetBtn && resetBtn.addEventListener('click', resetTimer);
  renderTimer();

  // Build stamp
  const stamp = document.getElementById('buildStamp');
  if(stamp){
    const now = new Date();
    stamp.textContent = `Build: ${now.toLocaleDateString('he-IL')} • ${now.toLocaleTimeString('he-IL',{hour:'2-digit', minute:'2-digit'})}`;
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', (e)=>{
      const target = document.querySelector(anchor.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Reading progress on chapter pages
  const progressBar = document.querySelector('.progress__bar');
  if(progressBar){
    const updateProgress = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const percent = Math.min(100, Math.max(0, (scrollTop / height) * 100));
      progressBar.style.width = `${percent}%`;
    };
    document.addEventListener('scroll', updateProgress, {passive:true});
    updateProgress();
  }

  // Tiny helper: copy headline link on roadmap anchors
  document.querySelectorAll('[data-copy-link]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const url = `${location.origin}${location.pathname}#${btn.dataset.copyLink}`;
      navigator.clipboard?.writeText(url);
      btn.textContent = '✔️ הועתק';
      setTimeout(()=>btn.textContent='🔗 העתק קישור', 1800);
    });
  });
})(); 
