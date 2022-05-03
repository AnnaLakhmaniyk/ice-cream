window.addEventListener('click', function (event) {
  // пошук кнопки плюс
  if (event.target.dataset.action === 'plus') {
    console.log('Plus');

    const basketBtnWrap = event.target.closest('.basket__btn-wrap');
    console.log(basketBtnWrap);

    const quantity = basketBtnWrap.querySelector('[data-quantity]');
    console.log(quantity);

    quantity.innerText = ++quantity.innerText;
  }

  // пошук кнопки мінус
  if (event.target.dataset.action === 'minus') {
    console.log('Minus');

    const basketBtnWrap = event.target.closest('.basket__btn-wrap');
    console.log(basketBtnWrap);

    const quantity = basketBtnWrap.querySelector('[data-quantity]');
    console.log(quantity);

    if (parseInt(quantity.innerText) > 0) {
      quantity.innerText = --quantity.innerText;
    }
  }
});
