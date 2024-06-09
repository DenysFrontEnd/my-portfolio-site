const moreBtn = document.querySelector(".about__moreBtn");
const aboutText = document.querySelector(".about p");

// console.log(aboutText.className.includes("hideText"));
const toggleText = () => {
  if (aboutText.className.includes("hideText")) {
    aboutText.classList.remove("hideText");
    aboutText.classList.add("showText");
  } else {
    aboutText.classList.add("hideText");
    aboutText.classList.remove("showText");
  }
  // console.log(aboutText.classList);
};

moreBtn.addEventListener("click", toggleText);
