window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.pageYOffset > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });





  const espacio = document.querySelector('.espacio');

  for (let i = 0; i < 800; i++) {
    const asteroide = document.createElement('div');
    asteroide.classList.add('asteroide');
    asteroide.style.left = `${Math.random() * 500}vw`; // Posición aleatoria en el ancho de la pantalla
    asteroide.style.animationDuration = `${Math.random() * 2 + 1}s`; // Duración de la animación aleatoria entre 2 y 7 segundos
    asteroide.style.width = `${Math.random() * 4 + 0.5}px`; // Tamaño aleatorio entre 0.1px y 1px
    asteroide.style.height = `${Math.random() * 4 + 0.5}px`; // Tamaño aleatorio entre 0.1px y 1px
  
    espacio.appendChild(asteroide);
  }
  