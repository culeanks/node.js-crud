import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
//import verifyToken from "./middleware/auth-middleware";
//import config from "./config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
const port = 3000;
const dbUrl = 'mongodb+srv://anikg:test789@node-tuts.5n21v.mongodb.net/node-test?retryWrites=true&w=majority';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("connection success"))
  .catch((err) => console.log(err));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

import blogsRouter from "./routes/blogs";
app.use('/blogs', blogsRouter);

import sortRouter from "./routes/sorting";
app.use('/blogs/sort', sortRouter);

//Request a token,
// app.get("/token", (req, res) => {
//   const payload = {
//     name: "Anik",
//     scopes: "blogs : read"
//   };

//   const token = jwt.sign(payload, 'config.JWT_SECRET');
//   res.send(token);
// });

app.listen(port);