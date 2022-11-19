import express from "express";

const app = express()

app.listen({port: 3000}, ()=> {
    console.log('server running')
})

app.get('/', (_req,res) =>{
    res.sendFile(__dirname+"/index.html");
})


