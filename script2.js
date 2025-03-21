console.log('Hola');

document.addEventListener("DOMContentLoaded", (event)=> {
    console.log("DOM fully loaded and parsed");

    const iniciarApp = async () => {
        const response = await fetch (`https://fakestoreapi.com/products/`);
        const lista_productos = await response.json();
        lista_productos.forEach(producto => {
            pintarDetalleProductos(producto);
        });
    }

    iniciarApp();
});


const pintarDetalleProductos = (producto) => {
    let lista_productos_item = document.getElementById('lista_productos_item');
    let nombre_cosas = document.createElement('div');
    nombre_cosas.classList.add ('card');
    nombre_cosas.innerHTML = `
                    <img src="${producto.image}" alt="${producto.tile}">
                    <h4>${producto.title}</h4>
                    <h4>${producto.category}</h4>
                    <h4>${producto.price}</h4>`;
    
    
    lista_productos_item.appendChild(nombre_cosas)
}