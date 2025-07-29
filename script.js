const palabras = [
  "Preciosa", "Te amo", "Bella", "Divina", "Hermosa", "Guapa"
];

function crearFrase() {
  const frase = document.createElement("div");
  frase.classList.add("frase");
  frase.innerText = palabras[Math.floor(Math.random() * palabras.length)];
  
  const colores = ["#ff4d6d", "#ff0000"]; // rosa y rojo
  frase.style.color = colores[Math.floor(Math.random() * colores.length)];
  frase.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(frase);

  setTimeout(() => {
    frase.remove();
  }, 5000);
}

setInterval(crearFrase, 800);

function mostrarMensaje() {
  const mensaje = document.createElement("div");
  mensaje.classList.add("frase");
  mensaje.innerText = "Te amo Miri ❤️";
  mensaje.style.color = "#ff4d6d";
  mensaje.style.left = Math.random() * 100 + "vw";
  mensaje.style.top = Math.random() * 100 + "vh";
  document.body.appendChild(mensaje);
  
  setTimeout(() => {
    mensaje.remove();
  }, 3000);
}
