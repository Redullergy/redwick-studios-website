// Continuity Engine micro-message (typewriter)
(function(){
  const heroInner = document.querySelector('.hero-inner');
  if(!heroInner) return;
  const line = document.createElement('div');
  line.style.color = 'var(--hud)';
  line.style.fontFamily = 'Roboto Mono, monospace';
  line.style.fontSize = '13px';
  line.style.marginTop = '14px';
  heroInner.appendChild(line);

  const messages = [
    'Continuity Engine: SYNTHESIZING WORLD STATE',
    'Continuity Engine: ADAPTING RESOURCES',
    'Continuity Engine: RECORDING PLAYER CHOICES'
  ];
  let i = 0;
  function typeMsg(msg, el, cb){
    el.textContent = '';
    let k = 0;
    const t = setInterval(()=>{
      el.textContent += msg[k++] || '';
      if(k > msg.length){ clearInterval(t); setTimeout(cb, 1400); }
    }, 28);
  }
  function loop(){
    typeMsg(messages[i % messages.length], line, ()=>{ i++; loop(); });
  }
  loop();
})();


// Continuity Engine micro-message (typewriter)
(function(){
  /* ...typewriter code unchanged... */
})();

// ---------- Thumbnail loader (run after DOM is ready) ----------
document.addEventListener('DOMContentLoaded', () => {

  // Initial thumbnail load
  document.querySelectorAll('.feature').forEach(feature => {
    const img = feature.getAttribute('data-img');
    const thumb = feature.querySelector('.feature-thumb');
    if (img && thumb) {
      thumb.style.backgroundImage = `url(${img})`;
      thumb.dataset.loaded = "true";
    }
  });

  // MutationObserver for dynamically added features
  const observer = new MutationObserver(() => {
    document.querySelectorAll('.feature').forEach(feature => {
      const img = feature.getAttribute('data-img');
      const thumb = feature.querySelector('.feature-thumb');
      if (img && thumb && !thumb.dataset.loaded) {
        thumb.style.backgroundImage = `url(${img})`;
        thumb.dataset.loaded = "true";
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });

}); // end DOMContentLoaded
