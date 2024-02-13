import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
//const express = 


const app =express()

const db=mysql.createConnection({
    host:"localhost",
    user:"newuser",
    password:"Aa123456!",
    database:"hakaton"
})

// to send from html body
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json("Hello World")
})

app.get("/book",(req,res)=>{
    const q="SELECT * FROM books"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800,()=>{
    console.log("Connect to backend.")
})