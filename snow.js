<script>
  // Enkel snöfalls-animation
  const snow = () => {
    let s = document.createElement('div');
    s.innerHTML = '❄';
    s.style.position = 'fixed';
    s.style.left = Math.random() * 100 + 'vw';
    s.style.top = '-10px';
    s.style.fontSize = Math.random() * 20 + 10 + 'px';
    s.style.opacity = Math.random() * 0.8 + 0.2;
    s.style.pointerEvents = 'none';
    s.style.animation = 'fall ' + (Math.random() * 10 + 10) + 's linear forwards';
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 20000);
  };
  setInterval(snow, 200);
  // CSS för fall-animation
  const style = document.createElement('style');
  style.innerHTML = `@keyframes fall { to { transform: translateY(100vh) rotate(360deg); } }`;
  document.head.appendChild(style);
</script>
