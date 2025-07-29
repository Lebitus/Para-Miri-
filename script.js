const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

function createHeart(x, y) {
  hearts.push({
    x,
    y,
    size: Math.random() * 20 + 20,
    alpha: 1,
    dx: (Math.random() - 0.5) * 2,
    dy: Math.random() * -2 - 1,
    text: "Te Amo 💖"
  });
}

function drawHeart(heart) {
  ctx.globalAlpha = heart.alpha;
  ctx.fillStyle = "hotpink";
  ctx.font = `${heart.size}px Arial`;
  ctx.fillText(heart.text, heart.x, heart.y);
  ctx.globalAlpha = 1;
}

function updateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart, index) => {
    heart.x += heart.dx;
    heart.y += heart.dy;
    heart.alpha -= 0.01;
    if (heart.alpha <= 0) {
      hearts.splice(index, 1);
    } else {
      drawHeart(heart);
    }
  });
}

canvas.addEventListener("click", (e) => {
  for (let i = 0; i < 10; i++) {
    createHeart(e.clientX, e.clientY);
  }
});

function animate() {
  updateHearts();
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
