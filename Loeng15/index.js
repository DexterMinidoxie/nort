const express = require('express')
const app = express()

function tervitus(req, res) {
    res.end("Tervitused koigile!")
}

function tervitusHtml(req, res) {
    const kuupaev = new Date()
    let tund = kuupaev.getHours()
    console.log('tund', tund)

    let tervitus = "Tere hommikust"
    if (tund > 12) {
      tervitus = "Toredat pealelounat"
    }
    if (tund > 19 ) {
      tervitus = "Ilusat ohtut"
    }
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          <h1> Tervitused Koigile! </h1>
          <div>${tervitus}</div>
      </body>
      </html>
    `)
}

function tervitusAndmed(req, res) {
  const kuupaev = new Date()
    let tund = kuupaev.getHours()
    console.log('tund', tund)

    let tervitus = "Tere hommikust"
    if (tund > 12) {
      tervitus = "Toredat pealelounat"
    }
    if (tund > 19 ) {
      tervitus = "Ilusat ohtut"
    }
  const vastus = {
    tervitusPeamine: "Tervitused koigile",
    detailid: tervitus,
  }
  res.json(vastus)
}

app.get('/', tervitus)
app.get('/tervitus', tervitusHtml)
app.get('/api/tervitus', tervitusAndmed)


app.listen(80)