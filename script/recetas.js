document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a los elementos relevantes
    const menuIcon = document.getElementById("menu-icon");
    const navlist = document.querySelector('.navlist');

    // Manejar el clic en el ícono del menú
    menuIcon.addEventListener("click", function() {
        // Realizar la solicitud Ajax para obtener el menú
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Actualizar el contenido del menú con la respuesta del servidor
                    navlist.innerHTML = xhr.responseText;
                } else {
                    console.error("Error al cargar el menú");
                }
            }
        };
        // Hacer la solicitud GET al servidor
        xhr.open("GET", "../pages/form.html", true);
        xhr.send();
    });

    // Manejar el desplazamiento de la ventana
    window.onscroll = () => {
        menuIcon.classList.remove('bx-x');
        navlist.classList.remove('open');
    }
});
