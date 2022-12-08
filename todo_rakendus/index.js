const express = require('express')

const app = express();

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

function peamine(req, res) {
    res.end('kasuta api endpointi')
}

function tagastaYlesanded(req, res) {
    res.json(ylesanded)
}

app.get('/', peamine)

app.get('/api/ylesanded', tagastaYlesanded)

app.listen(3000)