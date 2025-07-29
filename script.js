const container = document.getElementById('caida');

// Crea letras "Te amo" cayendo constantemente
function crearLetra() {
  const div = document.createElement('div');
  div.className = 'letra';
  div.textContent = 'Te amo';
  div.style.left = Math.random() * 100 + 'vw';
  div.style.animationDuration = (4 + Math.random() * 2) + 's';
  container.appendChild(div);
  setTimeout(() => div.remove(), 6500);
}

setInterval(crearLetra, 400);

// Al hacer click: dispersar múltiples "Te amo Miri ❤️"
function clickMensaje() {
  for (let i = 0; i < 15; i++) {
    const msg = document.createElement('div');
    msg.className = 'click-msg';
    msg.textContent = 'Te amo Miri ❤️';
    const dx = (Math.random() - 0.5) * 100 + 'vw';
    const dy = (Math.random() - 0.5) * 100 + 'vh';
    msg.style.setProperty('--dx', dx);
    msg.style.setProperty('--dy', dy);
    msg.style.left = '50vw';
    msg.style.top = '50vh';
    document.body.appendChild(msg);
    msg.addEventListener('animationend', () => msg.remove());
  }
}
