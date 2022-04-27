(() => {
  const refs = {
    openMenuBtn: document.querySelector('.contacts-btn__location'),
    closeMenuBtn: document.querySelector('.map__btn'),
    menu: document.querySelector('.contacts__map'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    document.body.classList.toggle('map-open');
  }
})();
