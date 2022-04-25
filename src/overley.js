(() => {
  const refs = {
    openOverleyBtn: document.querySelector("[data-overley-btn]"),
    overley: document.querySelector("[data-overley]"),
  };

  refs.openOverleyBtn.addEventListener("click", toggleOverley);

  function toggleOverley() {
    refs.overley.classList.toggle("is-open");
  }
})();