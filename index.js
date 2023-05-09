// VARIABLES
const articuloElemento = document.querySelectorAll('[articulo]');

// FUNCIONES 
const abrirAcordeon = (articulo => {
    // MANTENER EL TITULO CON ALTA OPACIDAD
    const titulo = articulo.children[0];
    titulo.classList.toggle("opacidad-alta");

    // ABIR EL ACORDEON
    const arcordeon = articulo.children[1];
    arcordeon.classList.toggle("abrir-acordeon");

    // ROTACION DE LA FLECHA
    titulo.children[0].classList.toggle("rotar-flecha");
})

// EVENT LISTENERS
articuloElemento.forEach(articulo => {
    articulo.addEventListener("click", function(){
        abrirAcordeon(articulo);
    });
})