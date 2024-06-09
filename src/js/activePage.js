const navLinks = document.querySelectorAll(".navLink");

// for projects.html

navLinks.forEach((link) => {
  link.classList.remove("active");

  if (window.location.href.includes(link.id) && link.id) {
    link.classList.add("active");
  }
});
