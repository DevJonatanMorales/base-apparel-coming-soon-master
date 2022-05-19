const btn = document.getElementById("btn");
const txtEmail = document.getElementById("email");
const icon = document.getElementById("icon");
const lbAlert = document.getElementById("alert");

const Expresiones = {
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
};

function classActive() {
  icon.classList.add("icon__error-active");
  lbAlert.classList.add("footer__alert-active");
}

function classDesactive() {
  icon.classList.remove("icon__error-active");
  lbAlert.classList.remove("footer__alert-active");
}

const validation = (value) => {
  if (Expresiones.correo.test(value)) {
    classDesactive();
  } else {
    classActive();
  }
};

btn.addEventListener("click", () => {
  if (txtEmail.value.length > 0) {
    validation(txtEmail.value);
  } else {
    classDesactive();
  }
});
