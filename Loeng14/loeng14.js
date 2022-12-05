const ylesanne1 = {
  kirjeldus: 'Hommikvõimlemine',
  tehtud: true,
  olulisus: 2
}
const ylesanne2 = {
  kirjeldus: 'Praadida mune',
  tehtud: false,
  olulisus: 4
}
const ylesanne3 = {
  kirjeldus: 'Jaluta koera',
  tehtud: false,
  olulisus: 5
}

const ylesanded = [ylesanne1, ylesanne2, ylesanne3]
function valmistaTahekesed(olulisus) {
  let tagasta = ''
  for (let i = 1; i <= olulisus; i++) {
    tagasta += `
    <span class="material-symbols-outlined">
    grade 
    </span>
    `
  }

  return tagasta
}

function naitaYlesanne(ylesanne, index) {
  const valjund = document.getElementById('valjund')
  let isChecked = ""
  if (ylesanne.tehtud) {
  isChecked = "checked=true"
}


const tahekesed = valmistaTahekesed(ylesanne.olulisus)
valjund.innerHTML += `
  <div class="kirjeldus">
      <input type="checkbox" onclick="MuudaCheckboxi(2)" ${isChecked}>
      ${ylesanne.kirjeldus}
      ${tahekesed}
  </div>
`
}

function MuudaCheckboxi() {
  console.log("Muutsin Checkboxi")
  ylesanded[index].tehtud = !ylesanded[index].tehtud
  naitaKoguValjund()
}

function lisaYlesanne() {
  // loe ekraani input elementide v22rtused
  const nimetus = document.getElementById('uus_ylesanne').value
  const olulisus = parseInt(document.getElementById('olulisus').value)
  console.log(nimetus, olulisus)
  //loo ylesane objekt
  const uusYlesanne = {
    kirjeldus: nimetus,
    olulisus,
    tehtud: false,
  }
  console.log(uusYlesanne)

  // lisa uus ylesande objekt ylesannete massiivi
  ylesanded.push(uusYlesanne)
  console.log(ylesanded)
  //joonista uuesti valjund

naitaKoguValjund()
}

function naitaKoguValjund () {
  document.getElementById('valjund').innerHTML = ''
  for (y of ylesanded) {
    naitaYlesanne(y)
  }
}

naitaKoguValjund()