const btn = document.getElementById("btn");
const txtEmail = document.getElementById("email");
const icon = document.getElementById("icon");
const lbAlert = document.getElementById("alert");

const Expresiones = {
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
};

const validation = (value) => {
  if (Expresiones.correo.test(value)) {
    icon.classList.remove("icon__error-active");
    lbAlert.classList.remove("footer__alert-active");
  } else {
    icon.classList.add("icon__error-active");
    lbAlert.classList.add("footer__alert-active");
  }
};

btn.addEventListener("click", () => {
  if (txtEmail.value.length > 0) {
    validation(txtEmail.value);
  }
});
