const callback = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".js-show-on-scroll");
targets.forEach(function (target) {
  observer.observe(target);
});

const nextButton = document.querySelector("#next");

setInterval(() => {
  if (nextButton == null) return;
  nextButton.click();
}, 2500);