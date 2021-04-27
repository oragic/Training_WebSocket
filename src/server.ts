import express, { json } from "express"

//o js reconhece o index automaticamente
import "./database"

const app = express()

const port = 3000


app.get('/', (req, res) =>{
    res.json({message: 'olaaa'})
})

app.post('/', (req, res) =>{
    return res.json({ message: ' Usuário' })
})


app.listen(port, () =>{
    console.log("Server runing in port 3000")
})