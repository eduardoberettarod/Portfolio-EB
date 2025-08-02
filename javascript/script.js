const lightbox = document.getElementById('lightbox');
const fechar = document.querySelector('.fechar');

const lbImg = document.getElementById('lb-img');
const lbTitulo = document.getElementById('lb-titulo');
const lbAno = document.getElementById('lb-ano');
const lbDesc = document.getElementById('lb-desc');
const lbLink = document.getElementById('lb-link');
const lbTecnologias = document.getElementById('lb-tecnologias');

document.querySelectorAll('.botao-fullscreen').forEach(btn => {
  btn.addEventListener('click', () => {
    lbImg.src = btn.dataset.img;
    lbTitulo.textContent = btn.dataset.title;

    // Aqui já com mês e ano
    const mesAno = btn.dataset.mesAno || 'Maio 2025';
    lbAno.textContent = `${mesAno}`;

    lbDesc.textContent = btn.dataset.desc;
    lbLink.href = btn.dataset.link;

    // Limpa tecnologias antigas
    lbTecnologias.innerHTML = '';

    // Recebe array JSON das tecnologias
    const tecnologias = JSON.parse(btn.dataset.tecnologias);

    tecnologias.forEach(tech => {
      const span = document.createElement('span');
      span.classList.add('tag-tech');
      span.innerHTML = `${tech.charAt(0).toUpperCase() + tech.slice(1)} <img src="svgs/${tech}.svg" alt="${tech}">`;
      lbTecnologias.appendChild(span);
    });

    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});

fechar.addEventListener('click', () => {
  lightbox.style.display = 'none';
  document.body.style.overflow = '';
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  }
});
