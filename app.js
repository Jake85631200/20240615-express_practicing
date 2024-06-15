// 用require載入express
const express = require("express")
// 可透過app物件使用express method
const app = express()

const port = 3000

// 架設 get method 的 req&res content
app.get("/", (req, res) => {
  res.send("This is a express-server practicing!")
})

app.listen(port, () => {
  console.log(`This website is running osn http://localhost:${port}/`)
})
