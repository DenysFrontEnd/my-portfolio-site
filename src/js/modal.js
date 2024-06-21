const openModalBtn = document.querySelector(".about__btn");
const modal = document.querySelector("#modal");
const backDrop = document.querySelector("#modalBackDrop");
const body = document.body;

const closeBtn = document.querySelector(".modal__close");

const openModalHendler = () => {
  modal.classList.add("modal__visible");

  setTimeout(() => {
    backDrop.classList.add("modal__backDrop-visible");
  }, 100);

  body.style.overflowY = "hidden";
};

export const closeModalhandler = () => {
  backDrop.classList.remove("modal__backDrop-visible");

  setTimeout(() => {
    modal.classList.remove("modal__visible");
    body.style.overflowX = "hidden";
    body.style.overflowY = "auto";
  }, 1000);
};

const closeOnBackDrop = (e) => {
  if (e.target === e.currentTarget) {
    closeModalhandler();
  }
  //   console.log(e.target);
  //   console.log(e.currentTarget);
};

const closeModalByescape = (e) => {
  if (e.code === "Escape") {
    closeModalhandler();
  } else {
    return;
  }
};

openModalBtn.addEventListener("click", openModalHendler);

closeBtn.addEventListener("click", closeModalhandler);

backDrop.addEventListener("click", closeOnBackDrop);

document.addEventListener("keydown", closeModalByescape);
