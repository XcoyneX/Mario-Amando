function copyEmail() {
  navigator.clipboard.writeText("amando.architect.com");
  alert("Email copied to clipboard!");
}

// [+] Algorithms for endless Logo brand horizontal scroll
const brandSections = document.querySelectorAll(".brand-logo");

brandSections.forEach(section => {
  const clone = section.cloneNode(true); // clone each section
  section.parentElement.appendChild(clone); // append clone after the original
});


function animateCountUp() {
  const counters = document.querySelectorAll(".count");

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const currentCount = +counter.innerText;
      const increment = target / 100;

      if (currentCount < target) {
        counter.innerText = Math.ceil(currentCount + increment);
        // adjust time for faster or slower effect
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
        // ensure final value is accurate;
      }
    };
    updateCount();
  });
}
window.addEventListener("load", animateCountUp);
