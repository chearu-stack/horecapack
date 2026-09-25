document.addEventListener('DOMContentLoaded', () => {
  const cartCount = document.querySelector('.badge');
  const addButtons = document.querySelectorAll('.add, [data-add-to-cart]');
  addButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (cartCount) cartCount.textContent = Number(cartCount.textContent || 0) + 1;
      button.textContent = '✓';
      button.setAttribute('aria-label', 'Товар добавлен');
      setTimeout(() => { button.textContent = '+'; }, 1000);
    });
  });

  const search = document.querySelector('.search input');
  if (search) search.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && search.value.trim()) {
      event.preventDefault();
      alert(`Демонстрация поиска: ${search.value.trim()}`);
    }
  });
});
