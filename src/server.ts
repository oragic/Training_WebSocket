import { http } from "./http"
import "./websocket/client"

const port = 3333

http.listen(port, () =>{
    console.log("Server runing in port 3333")
})