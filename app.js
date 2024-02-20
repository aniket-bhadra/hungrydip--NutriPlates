// console.log("hello")
let slideShow = document.getElementById("slideshow");
let slides = slideShow.getElementsByTagName("img");

let slideshowText = document.getElementById("slideshowText");
let slideTexts = slideshowText.getElementsByTagName("div");

// console.log(slideTexts);

let index = 0;

function nextSlide() {
  //remove
  slides[index].classList.remove("active");
  slideTexts[index].classList.remove("active");
  //indexing formula
  index = (index + 1) % slides.length;
  //add
  slides[index].classList.add("active");
  slideTexts[index].classList.add("active");
}

function prevSlide() {
  //remove
  slides[index].classList.remove("active");
  slideTexts[index].classList.remove("active");
  //indexing formula
  index = (index - 1 + slides.length) % slides.length;
  //add
  slides[index].classList.add("active");
  slideTexts[index].classList.add("active");
}

function menuToggle() {
  let nav = document.getElementById("navbar");
  nav.classList.toggle("active");
}

function descriptionToggle() {
  let allHeadings = document.querySelectorAll(".content .bannerText h2");
  allHeadings.forEach((heading) => {
    heading.classList.toggle("description");
  });
  console.log(allHeadings);
}

let showButtons = document.querySelectorAll(".content .bannerText h2 span");

showButtons.forEach((showButton) => {
  showButton.onclick = function () {
    descriptionToggle();
  };
});
