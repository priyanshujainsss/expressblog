const express=require("express");
const router=express.Router();
const path= require("path");
const blogs=require("../data/blogsdata");
router.get("/",(req,res)=>{
    res.render("blogHome");
})
router.get("/blogs",(req,res)=>{
    res.render("blogPage",{blogs:blogs})
})
router.get("/blogpost/:slug",(req,res)=>{
     const blog=blogs.filter(e=>{
         return e.slug === req.params.slug
     })
    //   console.log(blog)
    //  res.sendFile(path.join(__dirname,"../views/Page.html"))
    //  res.send(blog[0].content)
    res.render("singleBlog",{
        title:blog[0].title,
        content:blog[0].content
    })

})
module.exports=router