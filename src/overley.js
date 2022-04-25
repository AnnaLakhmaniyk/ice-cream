(() => {
  const refs = {
    openOverleyBtn1: document.querySelector("[data-overley-btn1]"),
    overley1: document.querySelector("[data-overley1]"),
    openOverleyBtn2: document.querySelector("[data-overley-btn2]"),
    overley2: document.querySelector("[data-overley2]"),
    openOverleyBtn3: document.querySelector("[data-overley-btn3]"),
    overley3: document.querySelector("[data-overley3]"),
  };

  refs.openOverleyBtn1.addEventListener("click", toggleOverley1);
  refs.openOverleyBtn2.addEventListener("click", toggleOverley2);
  refs.openOverleyBtn3.addEventListener("click", toggleOverley3);

  function toggleOverley1() {
    refs.overley1.classList.toggle("is-open1");
  }
   function toggleOverley2() {
    refs.overley2.classList.toggle("is-open2");
  }
   function toggleOverley3() {
    refs.overley3.classList.toggle("is-open3");
  }
})();