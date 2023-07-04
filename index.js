const express = require('express');
require('dotenv').config()

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.post('',(req,res)=>{
    res.send('hello')
})

app.post('/query',(req,res)=>{
    let name = req.query.name;
    let age = req.query.age;
    res.status(200).send({name,age})
})
app.post('/parameter/:name/:age',(req,res)=>{
    let name = req.params.name;
    let age = req.params.age;
    res.status(200).send({name,age})
})
app.post('/body',(req,res)=>{
    let name = req.body.name;
    let age = req.body.age;
    res.status(200).send({name,age})
})


app.listen(PORT, ()=>{
    console.log('server started at port 3000');
})

