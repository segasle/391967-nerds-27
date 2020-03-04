'use strict';
var link = document.querySelector("#modal");
var modal = document.querySelector("#exampleModal");
var close = document.querySelector("#close");
var name = modal.querySelector("#name");
var email = modal.querySelector("#email");
var form = modal.querySelector("form");
var isStorageSupport = true;
link.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.style.display = 'block';
    name.focus();
});
close.addEventListener('click', function () {
    modal.style.display = 'none';
});
form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value) {
        evt.preventDefault();
        //modal.offsetWidth=modal.offsetWidth;
//        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add("modal-error");
        modal.classList.remove('modal-error');

    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", name.value);
        }
    }
});
