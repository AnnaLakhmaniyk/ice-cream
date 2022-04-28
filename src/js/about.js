(() => {
    const refs = {
        openModalAboutBtn: document.querySelector("[data-about-open]"),
        openModalAboutBtn2: document.querySelector("[data-about-open2]"),
        closeModalAboutBtn: document.querySelector("[data-about-close]"),
        modalAbout: document.querySelector("[data-about]"),
    };
    refs.openModalAboutBtn.addEventListener("click", toggleModalAbout);
    refs.openModalAboutBtn2.addEventListener("click", toggleModalAbout);
    refs.closeModalAboutBtn.addEventListener("click", toggleModalAbout);
    
    function toggleModalAbout() {
        refs.modalAbout.classList.toggle("is-hidden");
        document.body.classList.toggle('modal-open');
    }
})();