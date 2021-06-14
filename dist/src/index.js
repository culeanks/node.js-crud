"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
// import Blog from "./models/blog";
// import bodyparser from "body-parser";
// import expressHandleBars from "express-handlebars";
const app = express_1.default();
const port = 3000;
const dbUrl = 'mongodb+srv://anikg:test789@node-tuts.5n21v.mongodb.net/node-test?retryWrites=true&w=majority';
mongoose_1.default.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log("connection success"))
    .catch((err) => console.log(err));
const blogs_1 = __importDefault(require("../routes/blogs"));
app.use('/blogs', blogs_1.default);
app.use(express_1.default.json());
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'blog2',
//         summary: 'summary2',
//         author: 'author2'
//     });
//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// })
// // app.get('/', (req, res) => {
// //     res.send("Hello world!");
// // })
// app.get('/about', (req, res) => {
//     res.send("Welcome to node.js!");
// })
app.listen(port);
//# sourceMappingURL=index.js.map