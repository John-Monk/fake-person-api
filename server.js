const express = require('express');
const app = express();
const PORT = 3000;
const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');
const path = require('path');

app.use(express.static('public'));

let db,
    dbConnectionStr = '',
    dbName = 'people';

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
.then(client => {
    console.log(`Connected to ${dbName} Database`)
    db = client.db(dbName);
})
.catch(e => console.error(e))

app.get('/api', (req, res) => {
  db.collection('person')
    .find()
    .toArray()
    .then(results => {
      res.json(results);
    })
    .catch(e => {
      res.status(500).json({ error: 'An error occurred.' });
    });
});

app.listen(PORT, (req, res) => {
    console.log(`Connected to Server on Port ${PORT}`)
});