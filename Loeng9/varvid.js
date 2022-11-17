function valjastaRuutjaKuup(x) {
  console.log(x * x)
  console.log(x * x * x)
  //console.log(Math.pow(x, 3))
}

valjastaRuutjaKuup(100)
valjastaRuutjaKuup(25)
valjastaRuutjaKuup(3)

function valjasta(tekst) {
  let valjund = document.getElementById('valjund')
  valjundBlokk.innerHTML += '<div>' + tekst + '</div>'
}

let varv = prompt('sisesta minu lemmikv2rv')

let minuLemmikvarv = 'must'

if (varv === minuLemmikvarv) {
  valjasta('Tore! arvasid ara minu lemmikv2rvi!')
} else {
  valjasta('see ei ole minu lemmikv2rv')
}