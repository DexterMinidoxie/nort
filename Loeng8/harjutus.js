// alert('Hello') 
// alert('Hello 2')

//let nimi
//nimi = prompt('sisesta nimi')
//alert ('tere' + nimi)
//console.log(nimi)
//console.log('programm lopetas')

let nimi
let blokk
nimi = prompt('sisesta nimi')
//alert('tere, ' + nimi)
console.log(nimi)
blokk = document.getElementById('valjund')
blokk.innerText = 'tere, ' + nimi

for (let index = 1; index < 11; index ++) {
  console.log('Number: ' + index) 
}

console.log('programm lopetas')
