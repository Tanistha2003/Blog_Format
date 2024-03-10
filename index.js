import express from "express";

const port=3000;
const app=express();

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
  });

app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
 });
 
app.get("/pricing",(req,res)=>{
   res.render("pricing.ejs");
 });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
 