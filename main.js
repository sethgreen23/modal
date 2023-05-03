"use strict";

const buttons = document.querySelectorAll(".toggle");
let machine = function (array, callback, type) {
  array.forEach((element) => {
    element.addEventListener(type, callback);
  });
};

function toggleModal(event) {
  let modalContainer = document.querySelector(".modal-box");
  modalContainer.classList.toggle("hidden");
}
machine(buttons, toggleModal, "click");
