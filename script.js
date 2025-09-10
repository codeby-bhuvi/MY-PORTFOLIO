// Typing Effect
const text = "Hi, I'm BHUVANA 👩‍💻";
let index = 0;
function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
window.onload = typeEffect;

// Scroll Animation
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const secTop = sec.getBoundingClientRect().top;
    if (secTop < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});

// Fun Contact Button
document.getElementById("contactBtn").addEventListener("click", function() {
  alert("Yay! 🎉 Thanks for saying hi!");
});

