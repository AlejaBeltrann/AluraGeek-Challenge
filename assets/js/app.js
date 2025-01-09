// Obtiene la lista de productos
async function listaProductos() {
  const conexion = await fetch("https://api-fake-rm.vercel.app/productos");
  const item = await conexion.json();

  return item;
}
// Obtiene un producto por su id
async function crearItem(nombre, precio, imagen, id) {
  const conexion = await fetch("https://api-fake-rm.vercel.app/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nombre: nombre,
      precio: precio,
      imagen: imagen,
      id: id
    })
    // Si la conexión no es exitosa, lanza un error

  });

  if (!conexion.ok) {
    throw new Error("No se pudo crear el producto");
  }


  const item = await conexion.json();
  return item;
}

async function eliminarItem(IdItems) {
  try {
    const conexion = await fetch(`https://api-fake-rm.vercel.app/productos/${IdItems}`, {
      method: "DELETE"
    });
    const data = await conexion.json();
    console.log(data);
  }
  catch (error) {
    console.error("No se pudo eliminar  el producto");
    throw error;
  }
}

async function buscarItem(busqueda) {
  const conexion = await fetch(`https://api-fake-rm.vercel.app/productos?q=${busqueda}`);
  const item = await conexion.json();
  return item;
}

export const app = {
  listaProductos,
  crearItem,
  eliminarItem,
  buscarItem
};
