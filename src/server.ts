import express from "express"

//o js reconhece o index automaticamente
import "./database"
import { routes } from "./routes"

const app = express()

app.use(express.json())

app.use(routes)

const port = 3000


app.listen(port, () =>{
    console.log("Server runing in port 3000")
})