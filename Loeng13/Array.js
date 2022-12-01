const Butterflys = [
   "./Butterfly.png",
   "./Butterfly-1.png",
   "./Butterfly.png",
   "./Butterfly-1.png",
]

function addPhoto(pictureUrl) {
  const outputBlokk = document.getElementById('output')
  outputBlokk.innerHTML += `
  <div>
  <img src="${pictureUrl}">
  </div>
  `
}

function outputButterflys () {
  addPhoto(Butterflys[0])
  addPhoto(Butterflys[1])
  addPhoto(Butterflys[2])
  addPhoto(Butterflys[3])
}

outputButterflys()