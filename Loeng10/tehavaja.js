const ylesanded = [
  'pese hambad ja nagu',
  'toida kassi',
  'prae muna',
  'loe hommikusi uudiseid',
  'jaluta koera'
]

function lisaValjund(tekst) {
    const valjundBlokk = document.getElementById('valjund')
    valjundBlokk.innerHTML += `
    <div>
      <input type="checkbox">
      ${tekst}
    </div>
    `

} 

function lisaYlesanne() {
  const ylesanneHtml = document.getElementById('sisend')
  ylesanded.push(ylesanneHtml.value)
  document.getElementById('valjund').innerHTML =''
  valjastusVarvid()
}

function valjastaVarvid() {
  for (let index=0; index < ylesanded.length; index++ )  {
      lisaValjund(ylesanded[index])
  } 
} 

valjastaVarvid()