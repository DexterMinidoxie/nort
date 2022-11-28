let matk1 = {
  nimi: 'Islandi vulkaanide vaatamine',
  osalejaid: 10,
  algusKuupaev: '01.07.2023',
  vabuKohti: 10,
  kirjeldus: "Kolme paevaga umber islandi",
  pildidUrl: "./Hills.png"
}

const matk2 = {
  nimi: 'Kanuumatk umber saaremaa',
  osalejaid: 6,
  algusKuupaev: '01.07.2023',
  vabuKohti: 6,
  kirjeldus: "Kolme paevaga umber saaremaa",
  pildidUrl: "./Hills.png"
}

//objekti kopeerimiseks ei saa teha matk1 = matk2
const matk3 = {...matk2}
const matkad = [matk1, matk2, matk3 ]


function valjastaMatk(retk) {
  let valjund = `
  <div> 
      <img class="matka_pilt" src="${retk.pildidUrl}">
      <h2>${retk.nimi}<h2/>
      <div>${retk.nimi}<div/>
  <div/>

  ` 
  console.log(valjund)
  document.getElementById ('valjund').innerHTML += valjund
}

for(let i=0; i < matkad.length; i++) {
  valjastaMatk(matkad[i])
}