import { app } from './app.js';

// Elimina un producto
async function eliminarItem(IdItems) {
    try {
        await app.eliminarItem(IdItems);
        alert('Producto eliminado con éxito');
    }   catch (error) {
        console.error('Error al eliminar el producto', error);
    }   
    window.location.reload(true);
    
}
export { eliminarItem };