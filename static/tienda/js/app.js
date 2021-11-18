import  {showCar, buyEvent} from '/static/tienda/js/functions.js'
import { queryFunction } from '/static/tienda/js/query.js'


//Creamos los elementos que iran adentro de la tienda.
const create = (dt) => {

  let html =  `
                        <div class="store__products--item" id="${dt.producto}" category="${dt.categoria}">
                          <img class="imgClass" src="/static/tienda/assets/images/products/${dt.categoria}.jpg">
                          <p class="product-name"> <span>${dt.nombre}</span> <br> <span class = "price">$${dt.precio}</span></p>
                          <div class="card-container">${dt.descripcion}
                            <hr>
                            <i class="addCart fas fa-cart-plus fa-3x" id="${dt.producto}"></i>
                          </div>
                        </div>
                      ` 

  document.querySelector('.store__products').innerHTML += html
 buyEvent(dt)
 
}


//Crear un nuevo producto.
const getALL = async () => {
  const URLJSON  = "http://localhost:8000/productos/"

  //Create
  const createApi = () => {
    let options = {
      method: 'POST',
      body: JSON.stringify({
        producto: 'redragon',
        cantidad: 7,
      }),
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
      }
    }
  
    fetch(URLJSON, options)
    .then((resp) => resp.json())
    .then( data => {
      if (data.detail != 'CSRF Failed: CSRF token missing or incorrect.'){
        create(data)
      }
      queryFunction()
    });

  }


//Llamando a mi "API" de productos.
  //Read
  try {

    await fetch(URLJSON)
    .then(async resp => await  resp.json())
    .then( data => {
      createApi()
      data.map(dt => {
        create(dt)
      }) 
    })
    
  }
  catch (error) {
    console.warn(error)
  }
}


document.addEventListener('DOMContentLoaded', getALL)
showCar();

window.onbeforeunload = (e) => {
  sessionStorage.clear()
};
