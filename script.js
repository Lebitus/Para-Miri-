const palabras = ["Preciosa", "Bella", "Guapa", "Encantadora", "Miri", "Mi amor", "Hermosa", "Linda", "Princesa"];

function crearPalabra() {
  const palabra = document.createElement("div");
  palabra.classList.add("word");
  palabra.textContent = palabras[Math.floor(Math.random() * palabras.length)];
  palabra.style.left = Math.random() * 100 + "vw";
  palabra.style.color = Math.random() > 0.5 ? "red" : "pink";
  document.body.appendChild(palabra);

  setTimeout(() => palabra.remove(), 5000);
}

function mostrarMensaje() {
  const mensaje = document.createElement("div");
  mensaje.classList.add("mensaje");
  mensaje.textContent = "Te amo Miri ❤️";
  document.body.appendChild(mensaje);
  setTimeout(() => mensaje.remove(), 2000);
}

setInterval(crearPalabra, 500);
