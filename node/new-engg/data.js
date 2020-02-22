const express = required('express')
const mysql = require('mysql')

const com = mysql.createConnection({
    'host': 'localhost',
    'username': 'root',
    'password': 'root'
})

com.connect(err) => {
    if (err)
    {
        console.log(err.message);
    }
    else 
    {
        console.log('successfuly connected');
    }
}