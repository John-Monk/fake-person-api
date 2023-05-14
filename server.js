const express = require('express');
const app = express();
const PORT = 3000;
const MongoClient = require('mongodb').MongoClient;

let db,
    dbConnectionStr = '',
    dbName = 'people';

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
.then(client => {
    console.log(`Connected to ${dbName} Database`)
    db = client.db(dbName);
})
.catch(e => console.error(e))

app.listen(PORT, (req, res) => {
    console.log(`Connected to Server on Port ${PORT}`)
});