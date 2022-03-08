/* js code */
const modal = document.getElementById("exampleModal");
const modalBody = modal.querySelector(".modal-body");
const modalFooter = modal.querySelector(".modal-footer");
const yesBtn = modal.querySelector(".btn-cancel-yes");
let relatedTarget;

modal.addEventListener("show.bs.modal", function (event) {
  // Button that triggered the modal
  relatedTarget = event.relatedTarget;
});

yesBtn.addEventListener("click", (event) => {
  let myModal = bootstrap.Modal.getInstance(modal);
  let successModal = bootstrap.Modal.getOrCreateInstance(document.querySelector("#exampleModal2"));
  myModal.hide();
  successModal.show();
  relatedTarget.parentElement.innerHTML = "Cancelled";

  setTimeout(() => successModal.hide(), 2000);
});
