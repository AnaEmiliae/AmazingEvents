
let inputText = ''
//Traer dinamicamente las cards
const card = document.getElementById('card_index')

console.log(card_index)

function show_cards(arrayCards, container){
let fragment = document.createDocumentFragment()
container.innerHTML = " "
if (inputText != "" && arraySearch.length == 0) {
  let div = document.createElement('div')
    div.classList.add("card")
    div.style.width = "18rem"
    div.innerHTML = `<h5 class="card-title">No se encuentran coicidencias<h5>`
    container.appendChild(div)
}

for (let element of arrayCards){
    let div = document.createElement('div')
    div.classList.add("card")
    div.style.width = "18rem"
    div.innerHTML = `<div class="card">
    <img src=${element.image} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.description}</p>
      <div class="button d-flex flex-row-reverse">
        <a href="./details.html?id=${element._id}" class="btn btn-danger">Price</a>
      </div>
    </div>
    </div>`

    fragment.appendChild(div)
}
container.appendChild(fragment)
}
show_cards(data.events, card)


// contenedor de checkbox

const navCheckbox = document.getElementById('checkbox')

// Traer dinamicamente las caterogias de los checkbox

function checkbox (array){
  let array_categories = array.map(function(array) {return array.category});
  let new_categorys = [...new Set (array_categories)]
  console.log(new_categorys)

  let fragment= document.createDocumentFragment()

  for (let element of new_categorys){
    let div = document.createElement('div')
    div.classList.add ("form-check")
    div.innerHTML = `<input class="form-check-input" type="checkbox" value=${element} id=${element}>
    <label class="form-check-label text-light" for="flexCheckIndeterminate">${element}</label>`
  
  console.log(element);
  fragment.appendChild (div)
  }

  navCheckbox.appendChild(fragment)
}


//funcion busqueda checkbox

checkbox(data.events)

let checkboxs = document.querySelectorAll('input[type= checkbox]')
console.log(checkboxs);
checkboxs.forEach(checkbox => {checkbox.addEventListener('change', ()=>{
  inputsChequeados = Array.from(checkboxs).filter(checkbox => checkbox.checked).map(input => input.value)
  console.log(inputsChequeados);
  filtrosCruzados(data.events)}
)})
function verificarSeleccion(arrayString, arrayDeObjectos) {
  if(arrayString.lenght == 0) return arrayDeObjectos

  let eventosFiltrados = arrayDeObjectos.filter(evento => arrayString.includes(evento.category))
  return eventosFiltrados
  console.log(eventosFiltrados);
}

//Evento Search 
let inputsChequeados = []
let arraySearch = []

const search_input = document.getElementById("search_input")
console.log(search_input);

search_input.addEventListener('keyup', () => {
  inputText = search_input.value
  filtrosCruzados(data.events)
})

function texto(valor, arrayDeObjectos) {
  if(valor == "") return arrayDeObjectos 
  return arrayDeObjectos.filter(elemento => elemento.name.toLowerCase().includes(valor.toLowerCase().trim()))
}

// Filtros cruzados 
function filtrosCruzados(array) {
  let nuevaSeleccion = verificarSeleccion(inputsChequeados,array)
  console.log(nuevaSeleccion)

  arraySearch = texto(inputText,nuevaSeleccion)
  console.log(arraySearch);
  show_cards(arraySearch, card)

}

