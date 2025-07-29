const mensajes = ["Preciosa", "Divina", "Hermosa", "Guapa", "Bella", "Mi amor", "Te adoro", "Mi Miri"];

function crearTexto() {
  const texto = document.createElement("div");
  texto.className = "floating";
  texto.innerText = mensajes[Math.floor(Math.random() * mensajes.length)];
  texto.style.left = Math.random() * 100 + "vw";
  texto.style.top = "-30px";
  texto.style.color = Math.random() > 0.5 ? "hotpink" : "white";
  texto.style.fontSize = (Math.random() * 1 + 1.5) + "rem";
  document.body.appendChild(texto);

  setTimeout(() => texto.remove(), 6000);
}

setInterval(crearTexto, 400);

function crearCorazon() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 2000);
}
