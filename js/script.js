const hide = document.querySelector('.hide')
const button = document.querySelector('.start')
const container = document.querySelector('.container')


button.addEventListener('click', function(){
  container.classList.remove('hide')
  this.classList.toggle('hide')
})



for(let i = 1; i <= 100; i++){

  const creazioneCella = celle();

  creazioneCella.addEventListener('click', function(){
    this.classList.toggle('click')
    console.log(i)
  })

  container.appendChild(creazioneCella)
}







// ///////////////////////////////////////////FUNZIONI/////////////////////////////////////////
function celle(){
  const cellaNuova = document.createElement('div')
  cellaNuova.className = 'cubo'
  return cellaNuova
}