const subscribeModal = document.getElementById("subscribe-modal");
const btnClose = document.querySelector(".modal__close_times");

document.addEventListener('DOMContentLoaded', () => {
    if (document.cookie.length == 0) {
    subscribeModal.classList.add("modal_active");
    }
  });

  btnClose.addEventListener("click", () => {
    subscribeModal.classList.remove("modal_active");
    document.cookie = 'info=closed';
  });
