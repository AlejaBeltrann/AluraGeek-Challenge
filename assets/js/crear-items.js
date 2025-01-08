import { app } from './app.js';

// Crear producto
const formulario = document.querySelector("[data-formulario]");

async function crearItem(evento) {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;   
    const imagen = document.querySelector("[data-imagen]").value;

    try {
        await app.crearItem(nombre, precio, imagen);
        alert ("Producto creado con éxito");    
        
    } catch (error) {   
        console.error("Error al crear el producto", error);
    }    
        window.location.reload(true);
    }

    formulario.addEventListener("submit", evento => crearItem(evento));