var button = document.querySelector(".contacts-button");
var modal = document.querySelector(".modal-feedback");
var wrapper = document.querySelector(".modal-feedback-wrapper");
var form = modal.querySelector("form");
var close = document.querySelector(".modal-close");
var login = modal.querySelector("[name = feedback-name]");
var mail = modal.querySelector("[name = feedback-email");
var storage = localStorage.getItem("feedback-name");


button.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  wrapper.classList.add("modal-show-wrapper");
  if (storage) {
    login.value = storage;
    mail.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  wrapper.classList.remove("modal-show-wrapper");
  modal.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !mail.value) {
    evt.preventDefault();
    modal.classList.add("modal-error");
  } else {
    localStorage.setItem("feedback-name", login.value);
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
    }
    if (wrapper.classList.contains("modal-show-wrapper")) {
      wrapper.classList.remove("modal-show-wrapper");
    }
  }
});
