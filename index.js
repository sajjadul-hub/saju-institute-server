const express=require('express');
const app =express();
const cors =require('cors');
const port =process.env.port  || 5000;

app.use(cors());

const categories=require('./data/categories.json');

app.get('/',(req,res)=>{
    res.send('News APi Running');
})

app.get('/news-categories',(req,res)=>{
    res.send(categories);
})

app.listen(port,()=>{
    console.log('Dragon News Server running on port');
})