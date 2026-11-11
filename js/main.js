// Menú mobile: abre y cierra el panel y actualiza aria-expanded.
(function () {
  var toggle = document.querySelector(".menu-toggle");
  var panel = document.getElementById("menu-principal");
  if (!toggle || !panel) return;

  var desktop = window.matchMedia("(min-width: 1024px)");

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    panel.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  // Al elegir un link, el menú se cierra
  panel.addEventListener("click", function (event) {
    if (event.target.closest("a")) setOpen(false);
  });

  // Escape cierra el menú y devuelve el foco al botón
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });

  // Si se agranda la pantalla, se reinicia el estado
  desktop.addEventListener("change", function (event) {
    if (event.matches) setOpen(false);
  });
})();
