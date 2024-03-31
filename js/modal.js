const refsForm = {
 openModalBtnForm: document.querySelector("[data-open-modal]"),
 closeModalBtnForm: document.querySelector("[data-close-modal]"),
 backdropForm: document.querySelector(".backdrop"),
};
refsForm.openModalBtnForm.addEventListener("click", toggleModalForm);
refsForm.closeModalBtnForm.addEventListener("click", toggleModalForm);


function toggleModalForm() {
 refsForm.backdropForm.classList.toggle("is-hidden");
}