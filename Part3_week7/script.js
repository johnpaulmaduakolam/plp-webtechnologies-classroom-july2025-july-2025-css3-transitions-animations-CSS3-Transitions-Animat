// part 3: JavaScript Events & Event Handlers

// Get Element

let underlay = document.querySelector(".underlay");
let overlay = document.querySelector(".overlay");
let openModal = document.querySelector(".openbtn");
let cancelBtn = document.querySelector(".cancel-btn");


openModal.addEventListener("click", () => {
    underlay.classList.toggle("show-case");
    overlay.classList.toggle("show-case");


    if (underlay.classList.contains("show-case")) {
        openModal.textContent = "Close Modal"
    } else {
        openModal.textContent = "Open Modal"

    }

});

cancelBtn.addEventListener("click", () => {
    underlay.classList.remove("show-case");
    overlay.classList.remove("show-case");
    openModal.textContent = "Open Modal"
});   