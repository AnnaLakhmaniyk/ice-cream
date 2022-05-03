(() => {
  const refs = {
    openMenuBtn: document.querySelector('.contacts-btn__franchise'),
    closeMenuBtn: document.querySelector('.modal-franchise__btn'),
    menu: document.querySelector('.franchise'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    document.body.classList.toggle('map-open');
  }
})();