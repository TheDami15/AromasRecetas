/*MÉTODO EN JS PARA EL HEADER DEL MENÚ*/
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 80);
});

// MENU
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}


//SCROLL
const sr = ScrollReveal({
  origin: 'top',
  distance: '85px',
  duration: 2200,
  reset: true
})


sr.reveal ('.container',{delay:400});

sr.reveal ('.middle-text',{});
sr.reveal ('.row-btn,.shop-content',{delay:200});

sr.reveal ('.review-content,.contact',{delay:200});





class Tienda {
  constructor() { //Objeto predefinido
    this.nombre = "Aromas&Recetas";
    this.direccion = "Aromas&Recetas@gmail.com";
    this.productos = [];
  }

  agregarProducto = (nombre, precio, cantidad) => {
    try {
      if (typeof nombre !== 'string' || typeof precio !== 'number' || typeof cantidad !== 'number' || cantidad < 0 || precio < 0) {
        throw new Error("Los datos del producto son inválidos.");
      }

      const producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
      };

      this.productos.push(producto);
      // Expresión regular replace
      const patron = /Aromas/;
      const nuevaCadena = "Aromas.".replace(patron, "Aromas&Recetas");
      console.log(nombre + " ha sido agregado a " + nuevaCadena);
    } catch (error) {
      console.error("Error al agregar producto: " + nombre, error.message);
    }
  }

  mostrarProductos = () => {
    console.log("Productos en " + this.nombre + ":");
    if (this.productos.length === 0) {
      console.log("No hay productos disponibles.");
    } else {
      // Utilizando una función flecha en lugar de la función anónima
      this.productos.forEach(producto => { //ForEach
        console.log("Nombre: " + producto.nombre + ", Precio: $" + producto.precio + ", Cantidad: " + producto.cantidad);
        alert("Nombre: " + producto.nombre + ", Precio: $" + producto.precio + ", Cantidad: " + producto.cantidad);
      });
    }
  }
}

  
  class TiendaOnline extends Tienda {
    constructor(nombre, direccion, paginaWeb) {
      super(nombre, direccion);
      this.paginaWeb = paginaWeb;
    }
  
    // Método específico para TiendaOnline
    procesarPedido() {
      console.log("Pedido procesado en " + this.nombre);
    }
  }
  
  // Crear una instancia de TiendaOnline
  const tiendaOnline1 = new TiendaOnline("Aromas&Recetas Online", "Las Pamas de Gran Canaria", "Aromas&Recetas@gmail.com");
  
  // Agregar productos a la tienda en línea
  tiendaOnline1.agregarProducto("Almendra 200gr", 1.3, 89);
  tiendaOnline1.agregarProducto("Azucar 500gr", 0.75, 45);
  tiendaOnline1.agregarProducto("Chocolate 100gr", 1.40, 200);
  tiendaOnline1.agregarProducto("Galletas 250gr", 2.40, 100);
  tiendaOnline1.agregarProducto("Harina 1kg", 2.50, 200);
  tiendaOnline1.agregarProducto("Leche 2L", 3.55, 40);
  tiendaOnline1.agregarProducto("Esencia de Vanilla", 3.20, 210);
  tiendaOnline1.agregarProducto("Mantequilla 250gr", 3.65, 200);
  tiendaOnline1.agregarProducto("Miel 200gr", 2.30, 50);
  tiendaOnline1.agregarProducto("Nueces 200gr", 1.4, 90);
  tiendaOnline1.agregarProducto("Yogur 500gr", 2.70, 102);
  // Mostrar productos en la tienda en línea
  // tiendaOnline1.mostrarProductos();
  
  // Procesar un pedido en la tienda en línea
  tiendaOnline1.procesarPedido();

    // Agregar evento de clic al botón
    const mostrarProductosBtn = document.getElementById("mostrarProductosBtn");
    mostrarProductosBtn.addEventListener("click", function(event) {
      // Evitar que el enlace provoque una navegación
      event.preventDefault();
      
      // Llamar al método mostrarProductos de la instancia de la clase Tienda
      tiendaOnline1.mostrarProductos();
    });