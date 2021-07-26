const express = require('express')
const app = express()
const path=require("path");
const exphbs=require("express-handlebars");
const port = 3000

// app.use("/",express.static(path.join(__dirname,"public")));
app.engine("handlebars",exphbs());
app.set("view engine","handlebars")
app.use("/",require("./routes/blog"))
// app.get('/:name', (req, res) => {
//   res.send('Hello Worlds! '+req.params.name)
// })
// console.log("path",__dirname)
// app.get('/about', (req, res) => {
//     // res.json({
//     //     "name":"harry"
//     // })
//     res.sendFile(path.join(__dirname,"/views/Page.html"))
//   })

// app.get("/indexpage",(req,res)=>{
//   res.sendFile(path.join(__dirname,"./views/index.html"))
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
