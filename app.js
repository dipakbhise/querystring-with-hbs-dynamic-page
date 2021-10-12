const express = require("express")
const app = express();


app.set("view engine", "hbs")

app.get("/portfoliopage", (req, res)=>{

    res.render("index", {name:req.query.name})
})



app.listen(8000, ()=>{
    console.log("server started at port no. 8000")
})