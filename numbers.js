const counters = document.querySelectorAll(".counter");
const membersSection = document.querySelectorAll(".members-section");

document.addEventListener("scroll", function () {
  const clientHeight = document.documentElement.clientHeight;
  const membersSectionY = membersSection.getBoundingClientRect().y;

  if (clientHeight > membersSectionY) {
  }
});

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 30);
    } else {
      counter.innerText = target + "+";
    }
  };
  updateCounter();
});

const counterBign = document.querySelectorAll(".counter-bn");

counterBign.forEach((counterBn) => {
  counterBn.innerText = "0";

  const updateCounterBn = () => {
    const targetBn = +counterBn.getAttribute("data-target");
    const b = +counterBn.innerText;

    const incrementBn = targetBn / 100;

    if (b < targetBn) {
      counterBn.innerText = `${Math.ceil(b + incrementBn)}`;
      setTimeout(updateCounterBn, 10);
    } else {
      counterBn.innerText = targetBn + "+";
    }
  };
  updateCounterBn();
});
