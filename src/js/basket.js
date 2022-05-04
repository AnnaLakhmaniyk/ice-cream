window.addEventListener('click', function (event) {
  const basketItems = document.querySelectorAll('.basket__item');

  let totalPrice = 0;

  basketItems.forEach(function (item) {
    const amountEl = item.querySelector('[data-quantity]');
    const priceEl = item.querySelector('#current-price');

    const currentPrice = Number(parseInt(amountEl.innerText)) * Number(parseInt(priceEl.innerText));

    totalPrice += currentPrice;
  });

  document.querySelector('#total-price').textContent = totalPrice;

  let quantity;

  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    const basketBtnWrap = event.target.closest('.basket__btn-wrap');

    quantity = basketBtnWrap.querySelector('[data-quantity]');
  }

  // пошук кнопки плюс
  if (event.target.dataset.action === 'plus') {
    quantity.innerText = ++quantity.innerText;
  }

  // пошук кнопки мінус
  if (event.target.dataset.action === 'minus') {
    if (parseInt(quantity.innerText) > 0) {
      quantity.innerText = --quantity.innerText;
    }
  }
});

// target

// onclick

// event
