#JS
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => section.style.display = "none");

  function showSection(id) {
    sections.forEach(section => section.style.display = "none");
    const target = [...sections].find(sec => sec.querySelector("h2").textContent.replace(/\s+/g, '') === id.replace('#', '').replace(/\s+/g, ''));
    if (target) target.style.display = "block";
  }

  document.querySelectorAll(".nav-buttons button").forEach(button => {
    button.addEventListener("click", () => showSection(button.getAttribute("onclick").match(/#.*'/)[0].replace("'", "")));
  });
});
