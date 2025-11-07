// 🌌 Parallax background effect
window.addEventListener("scroll", () => {
  const bg = document.querySelector(".connect-bg");
  if (!bg) return;
  const scrollY = window.scrollY;
  bg.style.transform = `translateY(${scrollY * 0.2}px)`; // smaller = slower = more premium
});
