console.log('Hola');

document.addEventListener("DOMContentLoaded", (event)=> {
    console.log("DOM fully loaded and parsed");

    const iniciarApp = async () => {
        for (let id= 1; id<=20; id++) {
            await fetchDetalleProductos (id);
        }
    }

    iniciarApp();
});

const fetchDetalleProductos = async (id) => {
    const response = await fetch (`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    console.log("Entramos fetch");
    pintarDetalleProductos (data);
}

/*const pintarDetalleProductos = (producto) => {
    let lista_productos = document.getElementById('lista_productos_item');
    let nombre_cosas = document.createElement('div');
    nombre_cosas.innerHTML = `${producto.title} ${producto.price} `;
    lista_productos_item.appendChild(nombre_cosas)
}*/

const pintarDetalleProductos = (producto) => {
    let lista_productos_item = document.getElementById('lista_productos_item');
    let nombre_cosas = document.createElement('div');
    nombre_cosas.classList.add ('card');
    nombre_cosas.innerHTML = `
                    <img src="${producto.image}" alt="">
                    <h4>${producto.title}</h4>
                    <h4>men's clothing</h4>
                    <h4>${producto.price}</h4>`;
    
    
    lista_productos_item.appendChild(nombre_cosas)
}


/*const mostrarcosas = async () => {
    const response = await fetch ("https://rickandmortyapi.com/api/character/5")
    const data = await response.json();
    console.log (data);
    let nombre_cosas = document.getElementById('nombre_cosas');
    nombre_cosas.innerHTML = `${data.name} ${data.status}`;
}


const mostrarUno = () => {
    const rick = {
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "Earth",
          "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
          "name": "Earth",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
          // ...
        ],
        "url": "https://rickandmortyapi.com/api/character/2",
        "created": "2017-11-04T18:50:21.651Z"
      }

      let nombre_cosas = document.getElementById('nombre_cosas');
      nombre_cosas.innerHTML = `${rick.name}`;
}*/