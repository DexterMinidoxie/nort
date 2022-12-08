const express = require('express')

const app = express();

const matk1 = {
  nimetus: 'Rabamatk Saaremaal',
  osalejaid: 12,
  kuupaev: '2022-05-15',
  registreerunud: 5,
  kirjeldus: 'Rabas matkamine bla bla',
}
const matk2 = {
  nimetus: 'Rattamatk Virumaal',
  osalejaid: 12,
  kuupaev: '2022-12-02',
  registreerunud: 4,
  kirjeldus: 'Rattaga matkamine bla bla',
}
const matk3 = {
  nimetus: 'Jalgsimatk Tartumaal',
  osalejaid: 20,
  kuupaev: '2021-08-01',
  registreerunud: 2,
  kirjeldus: 'Jalgsi matkamine bla bla',
}

const matkad = [matk1, matk2, matk3]

function peamine(req, res) {
    res.end('kasuta api endpointi')
}

function tagastaMatkad(req, res) {
    res.json(matkad)
}

app.get('/', peamine)

app.get('/api/Matkad', tagastaMatkad)

app.listen(3000)