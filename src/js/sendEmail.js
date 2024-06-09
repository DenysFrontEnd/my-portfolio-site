import { closeModalhandler } from "./modal";

(function () {
  emailjs.init("EdEHhqkrh47QPGVKz");
})();

const form = document.querySelector("#modalForm");
// const formBtn = document.querySelector("#form__btn");

// console.dir(form);

const sendEmail = () => {
  const templateParams = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // console.log(templateParams);

  emailjs.send("service_cknjun9", "template_4w4291a", templateParams).then(
    function (response) {
      console.log("SUCCESS!" + response.status + response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
  form.reset();
  closeModalhandler();
});

// formBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   sendEmail();
//   form.reset();
//   closeModalhandler();
// });
