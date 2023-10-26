import express from "express"
const app = express()
app.use(express.json())

let data = [{name: "an", id: 1},{name: "hoa", id: 2}]

app.get("/api/get",(req,res) => {
    res.json(data)
})

app.post("/api/post",(req,res) => { //thêm 
  let id = data.length +1 
  let NUser = {name: req.body.name}
  data.push(NUser)
  res.json(NUser)
})

app.put("/api/put",(req,res) => {
    if (data.findIndex(item => item.id === req.body.id) < 0) {
        res.json({complete: false})
    }  else {
        let index = data.findIndex(User => User.id === req.body.id)
        data[index].name = req.body.name
        res.json(data[index])
    }
})

app.delete("/api/delete",(req,res) => {
    if(data.findIndex(item => item.id === req.body.id) < 0) {
        res.json({complete: false})
    } else {
        let data = data.findIndex(User => User.id !== req.body.id)
        res.json(data)
    }
})
app.listen(500,() => {
    console.log("đang chạy ở port: " + 500)
})
