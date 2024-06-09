const sections = document.querySelectorAll("section");
// console.log(sections);

const navLinks = document.querySelectorAll(".navLink");
// console.log(navLinks[0].href);

console.log(window.location);

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY + 400;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.href.includes(id)) {
          link.classList.add("active");
        }
      });
    }
  });
};
