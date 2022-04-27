(() => {
    const refs = {
         openModalAboutBtn: document.querySelector("[data-about-open]"),
        closeModalAboutBtn: document.querySelector("[data-about-close]"),
        modalAbout: document.querySelector("[data-about]"),
    };
    refs.openModalAboutBtn.addEventListener("click", toggleModalAbout);
    refs.closeModalAboutBtn.addEventListener("click", toggleModalAbout);
    
    function toggleModalAbout() {
        refs.modalAbout.classList.toggle("is-hidden");
    }
})();