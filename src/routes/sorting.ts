import express from "express";
import Blog from "../models/blog";
//import pagination from "../pagination.func";
const sort = express.Router();

//Sorting by author - ASC
sort.get('/author/asc', async (req,res) => {
    try{
        const blogs = await Blog.find({}).sort({author : 1})
        res.send(blogs)
    } catch(err){
        res.send("Error : " + err)
    }
});

//Sorting by author - DESC
sort.get('/author/desc', async (req,res) => {
    try{
        const blogs = await Blog.find({}).sort({author : -1})
        res.send(blogs)
    } catch(err){
        res.send("Error : " + err)
    }
});

//Sorting by title - ASC
sort.get('/title/asc', async (req,res) => {
    try{
        const blogs = await Blog.find({}).sort({title : 1})
        res.send(blogs)
    } catch(err){
        res.send("Error : " + err)
    }
});

//Sorting by title - DESC
sort.get('/title/desc', async (req,res) => {
    try{
        const blogs = await Blog.find({}).sort({title : -1})
        res.send(blogs)
    } catch(err){
        res.send("Error : " + err)
    }
});


export default sort;