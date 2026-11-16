/**
 * Convocado — Landing TP3 Front End (Grupo 01)
 * Interacciones de navegación activa y control dinámico de desplegables (<details>)
 */

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.main-nav .nav-link');
  const sections = document.querySelectorAll('main section[id]');
  const toggleButtons = document.querySelectorAll('.js-toggle-details');

  // 1. Resaltar enlace activo en el Header Sticky al hacer scroll en Desktop
  function updateActiveNavLink() {
    const scrollPos = window.scrollY + 180;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // 2. Actualizar el texto del botón ("Expandir todo" / "Contraer todo") según el estado de la sección
  function syncToggleButtonLabel(button, detailsElements) {
    const allOpen = Array.from(detailsElements).every((el) => el.hasAttribute('open'));
    button.textContent = allOpen ? 'Contraer todo' : 'Expandir todo';
  }

  // 3. Configurar botones y escuchar cambios individuales en cada <details>
  toggleButtons.forEach((button) => {
    const targetSectionId = button.getAttribute('data-target');
    const section = document.getElementById(targetSectionId);
    if (!section) return;

    const detailsElements = section.querySelectorAll('details.custom-details');

    // Estado inicial del texto del botón al cargar la página
    syncToggleButtonLabel(button, detailsElements);

    // Al hacer clic en el botón, expandir o contraer todos y actualizar etiqueta
    button.addEventListener('click', () => {
      const allOpen = Array.from(detailsElements).every((el) => el.hasAttribute('open'));

      detailsElements.forEach((el) => {
        if (allOpen) {
          el.removeAttribute('open');
        } else {
          el.setAttribute('open', '');
        }
      });

      syncToggleButtonLabel(button, detailsElements);
    });

    // Si el usuario abre o cierra manualmente un desplegable individual, sincronizar el botón
    detailsElements.forEach((detailEl) => {
      detailEl.addEventListener('toggle', () => {
        syncToggleButtonLabel(button, detailsElements);
      });
    });
  });
});
