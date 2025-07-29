function mostrarMensaje() {
  alert("Te amo Miri ❤️");
}

function crearCorazon() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  heart.innerText = "❤️";
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(crearCorazon, 500);
