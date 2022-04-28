(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtn2: document.querySelector('[data-modal-open2]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    closeAnchor1: document.querySelector('[data-menu-about]'),
    closeAnchor2: document.querySelector('[data-menu-howmade]'),
    closeAnchor3: document.querySelector('[data-menu-ourproducts]'),
    closeAnchor4: document.querySelector('[data-menu-contact]'),

    modal: document.querySelector('[data-modal]'),
    modalClo: document.querySelector('[data-modal-close2]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal2);
  refs.closeAnchor1.addEventListener('click', toggleModal3);
  refs.closeAnchor2.addEventListener('click', toggleModal3);
  refs.closeAnchor3.addEventListener('click', toggleModal3);
  refs.closeAnchor4.addEventListener('click', toggleModal3);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
  function toggleModal2() {
    refs.modalClo.classList.toggle('is-open');
  }
  function toggleModal3() {
    refs.modalClo.classList.toggle('is-open');
     document.body.classList.toggle('menu-open');
  }
})();
