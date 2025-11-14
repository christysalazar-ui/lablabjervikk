const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const yesMessage = document.getElementById("yesMessage");
const noReaction = document.getElementById("noReaction");
const bgMusic = document.getElementById("bgMusic");

// YES BUTTON — Hearts + message + music
yesBtn.addEventListener("click", () => {
  document.querySelector(".container").style.display = "none";
  yesMessage.classList.remove("hidden");

  bgMusic.volume = 0.5;
  bgMusic.play();

  setInterval(createHeart, 300);
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 2000);
}

// NO BUTTON — Moves away + crying reaction
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth * 0.7;
  const y = Math.random() * window.innerHeight * 0.7;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

noBtn.addEventListener("click", () => {
  document.querySelector(".container").style.display = "none";
  noReaction.classList.remove("hidden");
});
