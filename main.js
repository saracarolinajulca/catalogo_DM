const botones = document.querySelectorAll(".btnDescripcionProducto");

const modal = document.querySelector(".modalDescripcion");
const modalTitulo = document.querySelector(".modalTitulo");
const modalTexto = document.querySelector(".modalTexto");
const cerrarModal = document.querySelector(".cerrarModal");

botones.forEach(function(boton) {
  boton.addEventListener("click", function() {
    const producto = boton.parentElement;

    const nombre = producto.querySelector(".productoNombre").textContent;
    const descripcion = producto.querySelector(".productoDESCRI").textContent;

    modalTitulo.textContent = nombre;
    modalTexto.textContent = descripcion;

    modal.classList.add("activo");
  });
});

cerrarModal.addEventListener("click", function() {
  modal.classList.remove("activo");
});

modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.classList.remove("activo");
  }
});