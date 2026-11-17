/**
 * Convocado — Landing TP3 Front End (Grupo 01)
 * Interacciones de navegación activa y control dinámico de desplegables (<details>)
 */

function initConvocadoLanding() {
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
  function syncToggleButtonLabel(button, detailsList) {
    const allOpen = detailsList.length > 0 && detailsList.every((el) => el.open);
    button.textContent = allOpen ? 'Contraer todo' : 'Expandir todo';
    button.setAttribute('aria-expanded', String(allOpen));
  }

  // 3. Configurar botones y escuchar cambios individuales en cada <details>
  toggleButtons.forEach((button) => {
    const targetSectionId = button.getAttribute('data-target');
    const section = document.getElementById(targetSectionId);
    if (!section) return;

    const detailsList = Array.from(section.querySelectorAll('details.custom-details'));
    if (detailsList.length === 0) return;

    // Estado inicial del texto del botón al cargar la página
    syncToggleButtonLabel(button, detailsList);

    // Al hacer clic en el botón: si hay alguno cerrado, abrir todos; si todos están abiertos, cerrarlos todos
    button.addEventListener('click', () => {
      const allOpen = detailsList.every((el) => el.open);
      const shouldOpen = !allOpen;

      detailsList.forEach((el) => {
        el.open = shouldOpen;
      });

      syncToggleButtonLabel(button, detailsList);
    });

    // Si el usuario abre o cierra manualmente un desplegable individual (clic o teclado), sincronizar el botón
    detailsList.forEach((detailEl) => {
      detailEl.addEventListener('toggle', () => {
        syncToggleButtonLabel(button, detailsList);
      });
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initConvocadoLanding);
} else {
  initConvocadoLanding();
}
