const playGame = document.querySelector('.action')
const sign = document.querySelector('#costum-sign')
const tiles = document.querySelector('#total-tiles')
// const shiping = document.querySelector('#shipping')
const grandTotal = document.querySelector('#grand-total')
const greeting = document.querySelector('.user')

playGame.addEventListener('click', update)
let perTile = 7
let shipingCost = 7
function update(){
   let userInfo = prompt('please enter you name')
   let totalTiles = prompt('please enter the totals tiles you want')
   result = perTile * totalTiles + shipingCost;
   greeting.textContent = 'hello '+ userInfo +' this is your shipping total cost'
   tiles.textContent = totalTiles
   sign.textContent = userInfo;
   grandTotal.textContent = result;

}
