const conceptDetails = {
  brand: 'NOVA PACK',
  city: '\u041d\u043e\u0432\u043e\u0433\u0440\u0430\u0434',
  region: '\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433',
  address: '\u0443\u043b. \u041b\u0443\u043d\u043d\u0430\u044f, 17',
  phone: '+7 (000) 000-00-00',
  phone2: '+7 (000) 000-00-01',
  phone_href: 'tel:+70000000000',
  phone2_href: 'tel:+70000000001',
  copyright_year: '2026',
  customer_name: '\u0410\u043d\u043d\u0430 \u0414\u0435\u043c\u043e\u0432\u0430',
  customer_company: '\u041e\u041e\u041e \u00ab\u0421\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u041b\u0438\u0441\u0442\u00bb',
};

const applyConceptDetails = () => {
  const fillTokens = (value) => value.replace(/\{\{([a-z_]+)\}\}/g, (token, key) => conceptDetails[key] ?? token);
  const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
  let textNode;
  while ((textNode = walker.nextNode())) textNode.nodeValue = fillTokens(textNode.nodeValue);
  document.querySelectorAll('*').forEach((element) => {
    Array.from(element.attributes).forEach((attribute) => {
      const value = fillTokens(attribute.value);
      if (value !== attribute.value) element.setAttribute(attribute.name, value);
    });
  });
};
document.addEventListener('DOMContentLoaded', () => {
  applyConceptDetails();
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
