const xp = 270;
const xpMax = 500;
const niveau = 1;
const bar = document.querySelector(".xp-bar-fill");
const text = document.querySelector(".xp-bar-text");

const percent = (xp / xpMax) * 100;
bar.style.width = `${percent}%`;
text.textContent = `Niveau ${niveau} — ${xp} / ${xpMax} XP`;
