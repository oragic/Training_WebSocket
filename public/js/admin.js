

const socket = io()

let connectionUsers = []

socket.on("admin_list_all_users", (connections)=>{
    
    connectionUsers = connections
    document.getElementById("list_users").innerHTML = ""
    
    let template = document.getElementById("template").innerHTML

    connections.forEach(connection =>{
        
        const rendered = Mustache.render(template,{
            email: connection.user.email,
            id: connection.socket_id
        })
        document.getElementById("list_users").innerHTML += rendered
    })
})

function call(id){
    const connection = connectionUsers.find(
        (connection) => connection.socket_id === id)

    const template = document.getElementById("admin_template").innerHTML

    const rendered = Mustache.render(template,{
        email:connection.user.email,
        id: connection.user_id
    })

    document.getElementById("supports").innerHTML += rendered
}
