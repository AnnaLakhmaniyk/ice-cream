(() => {
  const refs = {
    openOverlayBtn1: document.querySelector("[data-overlay-btn1]"),
    overlay1: document.querySelector("[data-overlay1]"),
    openOverlayBtn2: document.querySelector("[data-overlay-btn2]"),
    overlay2: document.querySelector("[data-overlay2]"),
    openOverlayBtn3: document.querySelector("[data-overlay-btn3]"),
    overlay3: document.querySelector("[data-overlay3]"),
  };

  refs.openOverlayBtn1.addEventListener("click", toggleOverlay1);
  refs.openOverlayBtn2.addEventListener("click", toggleOverlay2);
  refs.openOverlayBtn3.addEventListener("click", toggleOverlay3);

  function toggleOverlay1() {
    refs.overlay1.classList.toggle("is-open1");
  }
   function toggleOverlay2() {
    refs.overlay2.classList.toggle("is-open2");
  }
   function toggleOverlay3() {
    refs.overlay3.classList.toggle("is-open3");
  }
})();