const togglePassword = document.querySelector("#toggle-password");
const Password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
  const type =
    Password.getAttribute("type") === "password" ? "text" : "password";
  console.log(type);
  Password.setAttribute("type", type);
  this.classList.toggle("bi-eye");
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
