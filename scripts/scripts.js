function copyEmail() {
  navigator.clipboard.writeText("amando.architect.com");
  alert("Email copied to clipboard!");
}

// [+] Algorithms for endless Logo brand horizontal scroll
const brandContainer = document.querySelector(".brand-logo");
const brandClone = brandContainer.cloneNode(true);
document.querySelector(".brand").appendChild(brandClone);

// [+] Algorithms for next and previous buttons
let next = document.querySelector(".next");
let previous = document.querySelector(".prev");
let slider = document.querySelector(".slider");

next.addEventListener("click", function () {
  let slides = document.querySelectorAll(".slides");
  slider.appendChild(slides[0]);
});

previous.addEventListener("click", function () {
  let slides = document.querySelectorAll(".slides");
  slider.prepend(slides[slides.length - 1]);
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
