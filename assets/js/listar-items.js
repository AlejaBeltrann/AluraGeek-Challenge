import { app } from './app.js';
import { eliminarItem } from './eliminar-item.js';

// Obtiene la lista de productos
const lista = document.querySelector("[data-productos]");

export default function cardsProductos(nombre, precio, imagen, id) {
    const item = document.createElement("li");
    item.className = "contenido-items-items";
    item.innerHTML = `
    <div>
        <img class="contenido-items-imagen" src="${imagen}" alt="">
        <h3 class="contenido-items-titulo">${nombre}</h3>  
        <div class="contenido-items-valor-eliminar">
            <h2 class="contenido-items-valor"><strong>$ ${precio}</strong></h2>
            <button id="${id}" data-eliminar>
                <a><img src="./assets/img/papelera.png" alt="Eliminar producto"></a>
            </button>
        </div>
    </div>`;
    return item;
}

// Lista los productos
async function listaProductos() {
    try {
        const listaapp = await app.listaProductos();
        if(listaapp.length > 0) {
            listaapp.forEach(elemento => {
                lista.appendChild(cardsProductos(elemento.nombre, elemento.precio, elemento.imagen, elemento.id));
            });

        const botonEliminar = document.querySelectorAll("[data-eliminar]");
        botonEliminar.forEach(boton => {
            boton.addEventListener("click", () => eliminarItem(boton.id))
            });
        } else {
            lista.innerHTML = `<h2 class="mensaje-error">No hay productos</h2>`;
        }
        } catch (error) {
           lista.innerHTML = `<h2 class="mensaje-error">No se pudo cargar el producto</h2>`;
            console.error("Error al cargar el producto", error);
        }
    }
listaProductos();