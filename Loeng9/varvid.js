//function valjastaRuutJaKuup(x) {
//  console.log(x * x)
//  console.log(Math.pow(x, 3))
//}

//valjastaRuutJaKuup(100)
//valjastaRuutJaKuup(25)
//valjastaRuutJaKuup(3)

function valjasta(tekst) {
  let valjundBlokk = document.getElementById('valjund')
  valjundBlokk.innerHTML += '<div>' + tekst + '</div>'
}


let varv = prompt('Sisesta enda lemmikvärv')

let minuLemmikvarv = 'must'
let minuTeineLemmik = 'sinine'

if (varv === minuLemmikvarv) {
  valjasta('Tore! Arvasid ära ühe minu lemmikvärvidest!')
}
if (varv === minuTeineLemmik) {
  valjasta('Tore! Arvasid ära ühe minu lemmikvärvidest!')
} else {
  valjasta('See ei ole minu lemmikvärv')
}

