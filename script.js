// Filtro de categorias (sidebar)
const catButtons = document.querySelectorAll('.cat-btn');
const productCards = document.querySelectorAll('.product-card');
const areaTitle = document.getElementById('areaTitle');
const areaCount = document.getElementById('areaCount');

// PERSONALIZAR: os nomes exibidos ao filtrar por categoria
const nomesCategorias = {
  todos: 'Todos os produtos',
  cozinha: 'Cozinha',
  decoracao: 'Decoração',
  papelaria: 'Papelaria',
  presentes: 'Presentes'
};

catButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    catButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cat = btn.dataset.cat;
    let visiveis = 0;

    productCards.forEach(card => {
      const show = cat === 'todos' || card.dataset.cat === cat;
      card.style.display = show ? '' : 'none';
      if (show) visiveis++;
    });

    areaTitle.textContent = nomesCategorias[cat] || 'Produtos';
    areaCount.textContent = `${visiveis} produto${visiveis === 1 ? '' : 's'}`;
  });
});
