import express from "express";
import Blog from "../models/blog";
import pagination from "../pagination.func";
//import verifyToken from "../middleware/auth-middleware";
const router = express.Router();


//Create
// Creating a new content
router.post('/', async (req, res) => {
    const blog = new Blog({
        title: req.body.title,
        summary: req.body.summary,
        author: req.body.author
    })
    try {
        const bg = await blog.save()
        res.send(bg)
    } catch (err) {
        console.log('Error :' + err)
        res.send('Error :' + err)
    }
});


//Retrieve
// Retrieving all contents
router.get('/', async (req, res) => {
    try {
        if (req.query.page && req.query.limit) {
            const data = await pagination(req)
            res.json(data);
        } else {
            const blogs = await Blog.find()
            res.json(blogs)
        }
    }
    catch (err) {
        res.send("Error: " + err)
    }
});

// Retrieving a content by ID
router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
        res.json(blog)
    }
    catch (err) {
        res.send("Error: " + err)
    }
});

//Retrieving a content by title
router.get('/:title', async (req, res) => {
    try {
        const blog = await Blog.find({ "title": req.params.title });
        res.json(blog)
    }
    catch (err) {
        res.send("Error: " + err)
    }
});

//Retrieving a content by author
router.get('/:author', async (req, res) => {
    try {
        const blog = await Blog.find({ "author": req.params.author });
        res.json(blog)
    }
    catch (err) {
        res.send("Error: " + err)
    }
});


//Update
//Updating a content while searching by ID
router.patch('/:id', async (req, res) => {
    try {
        const result = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(result)
    }
    catch (err) {
        res.send("Error: " + err)
    }
});

//Updating a content while searching by title
router.patch('/:title', async (req, res) => {
    try {
        const result = await Blog.findOneAndUpdate({ "title": req.params.title }, req.body, { new: true })
        res.send(result)
    }
    catch (err) {
        res.send("Error: " + err)
    }
});

//Updating a content while searching by author
router.patch('/:author', async (req, res) => {
    try {
        const result = await Blog.findOneAndUpdate({ "author": req.params.author }, req.body, { new: true })
        res.send(result)
    }
    catch (err) {
        res.send("Error: " + err)
    }
});


//Delete
//Deleting a content by ID
router.delete('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
        await blog.remove()
        res.send("blog deleted")
    } catch (err) {
        res.send("Error :" + err)
    }
});

//Deleting a content by title
router.delete('/:title', async (req, res) => {
    try {
        const blog = await Blog.findOne({ "title": req.params.title })
        await blog.remove()
        res.send("blog deleted")
    } catch (err) {
        res.send("Error :" + err)
    }
});

//Deleting a content by author
router.delete('/:author', async (req, res) => {
    try {
        const blog = await Blog.findOne({ "author": req.params.author })
        await blog.remove()
        res.send("blog deleted")
    } catch (err) {
        res.send("Error :" + err)
    }
});

//Deleting all blogs
router.delete('/', async (req, res) => {
    try {
        const blogs = await Blog.find().deleteMany({})
        //await blogs.deleteMany({})
        res.send("All blogs deleted")
    } catch (err) {
        res.send("Error :" + err)
    }
});

export default router;


