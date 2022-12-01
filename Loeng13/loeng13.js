const ylesanne1 = {
  kirjeldus: 'Praadida mune',
  tehtud: false,
  olulisus: 4
}

function naitaYlesannet(ylesanne) {
const valjund = document.getElementById('valjund')
valjund.innerHTML = `<div class="kirjeldus">${ylesanne.kirjeldus} </div> `
}


naitaYlesannet(ylesanne1)