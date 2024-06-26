document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");
  const overlay = document.getElementById("overlay");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      navLinks.classList.remove("active");
      overlay.classList.remove("active");
    }
  });
});



// Oculta la barra de navegación cuando el usuario se desplaza hacia abajo y muestra la barra de navegación cuando el usuario se desplaza hacia arriba, pero solo en dispositivos móviles.
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  // Verifica si la anchura de la ventana es menor o igual a 768px
  if (window.innerWidth <= 768) {
    if (window.scrollY > lastScrollY) {
      // El usuario está desplazándose hacia abajo, oculta la barra de navegación
      document.querySelector(".navbar").classList.add("navbar-hidden");
    } else {
      // El usuario está desplazándose hacia arriba, muestra la barra de navegación
      document.querySelector(".navbar").classList.remove("navbar-hidden");
    }
    // Actualiza la posición de desplazamiento anterior
    lastScrollY = window.scrollY;
  }
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      // Verifica si href contiene '#', lo que indica un enlace interno de la página
      if (href.startsWith('#')) {
        // Previene el comportamiento por defecto del enlace
        e.preventDefault();

        // Continúa solo si el elemento de destino existe
        const targetElement = document.querySelector(href);
        if (targetElement) {
          // Determina el valor de offset basado en el ancho de la ventana
          const offset = window.innerWidth <= 768 ? 30 : 120;

          // Calcula la posición del elemento de destino y ajusta por la altura de la barra de navegación
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

          // Desplaza a la posición ajustada
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth' // añade un efecto de desplazamiento suave
          });
        }
      } else {
        // Maneja enlaces que no son internos de la página, si es necesario
      }
    });
  });
});