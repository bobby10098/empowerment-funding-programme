document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".depth").forEach(el => {
    const x = (window.innerWidth / 2 - e.clientX) / 30;
    const y = (window.innerHeight / 2 - e.clientY) / 30;
    el.style.transform = `rotateY(${x}deg) rotateX(${y}deg) translateZ(25px)`;
  });
});
