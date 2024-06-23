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

document.addEventListener("DOMContentLoaded", function () {
  const noticias = [
    {
      image: "img/CampeonesDeBoleyball.jpg",
      date: "Lunes, 14 / 06 / 2024",
      title: "CETis 45 CAMPEÓN DE VOLEIBOL VARONIL",
      description:
        "CETis 45 CAMPEÓN DE VOLEIBOL VARONIL en el torneo de la Semana del Estudiante. ",
      link: "https://www.facebook.com/share/p/5PpUyFQjNwfUWY1M/",
      principal: true,
    },
    {
      image: "img/AplicacionesDeLaInteligenciaArtificial.jpg",
      date: "Jueves, 03 / 05 / 2024",
      title: "El crecimeinto de las ofertas de empleo",
      description:
        "El Ing. Carlos Baltazar Oliva,  del Tecnológico Nacional de México Campus Costa Grande, impartió el tema: EL CRECIMIENTO DE LA OFERTA DE LOS EMPLEOS DIGITALES, dentro el marco de la Semana Nacional de Vinculación con el Sector Productivo DGETI 2024.",
      link: "https://www.facebook.com/share/p/UEDMUa3P8ZYXmhob/",
      principal: false,
    },
    {
      image: "img/examenDeDiagnostico.jpg",
      date: "Jueves, 20 / 6 / 2024",
      title: "Exámen de diagnóstico",
      description:
        "El jueves se estará aplicando el examen de diagnóstico a los alumnos de nuevo ingreso, para determinar su nivel de conocimientos en las materias de matemáticas, español e inglés.",
      link: "https://www.facebook.com/share/p/CEYyqFcMqQYw1rRJ/",
      principal: false,
    },
  ];

  const container = document.getElementById("noticias-container");

  noticias.forEach((noticia) => {
    const noticiaElement = document.createElement("div");
    noticiaElement.classList.add("noticia");

    if (noticia.principal) {
      noticiaElement.classList.add("noticia-principal");
    }

    noticiaElement.innerHTML = `
            <img src="${noticia.image}" alt="${noticia.title}">
            <div class="noticia-content">
                <div class="noticia-date">${noticia.date}</div>
                <h2 class="noticia-title">${noticia.title}</h2>
                <p class="noticia-description">${noticia.description}</p>
                <a class="noticia-link" href="${noticia.link}">continuar leyendo</a>
            </div>
        `;

    container.appendChild(noticiaElement);
  });
});


// oculta la barra de navegación cuando el usuario se desplaza hacia abajo y muestra la barra de navegación cuando el usuario se desplaza hacia arriba.
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // El usuario está desplazándose hacia abajo, oculta la barra de navegación
    document.querySelector(".navbar").classList.add("navbar-hidden");
  } else {
    // El usuario está desplazándose hacia arriba, muestra la barra de navegación
    document.querySelector(".navbar").classList.remove("navbar-hidden");
  }
  // Actualiza la posición de desplazamiento anterior
  lastScrollY = window.scrollY;
});