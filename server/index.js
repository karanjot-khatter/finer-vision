const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'finer_vision'
});

app.post('/create', (req, res) => {
    const first_name = req.body.first_name;
    const surname = req.body.surname;
    const email_address = req.body.email_address;
    const telephone_number = req.body.telephone_number;
    const gender = req.body.gender;
    const dob = req.body.dob;
    const comments = req.body.comments;

    db.query('INSERT INTO Users (first_name, surname, email_address, telephone_number, gender, dob, comments) VALUES (?, ?, ?, ? ,?, ?, ?)',
     [first_name, surname, email_address, telephone_number, gender, dob, comments ], (error, result) => {
         if (error) {
             console.log(error)
         } else {
            console.log('Values inserted');
         }
     })
})

app.get('/users', (req, res) => {
    db.query('SELECT * from Users', (error, result) => {
        if (error) {
            console.log(error);
        } else {
            res.send(result);
        }
    })
})

app.listen(3001, () => {
    console.log('your server is running on port 3001');
})