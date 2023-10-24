import express from "express"
const app = express()

let data = {name: "An", age: 17}

app.get("/api/call",(req,resp) => {
    resp.send(data)
}) 
app.listen(500,() => {
    console.log("Đây là port: " + 500)
})