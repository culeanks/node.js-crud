// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";
// import config from "../config";
// import bcrypt from "bcryptjs";



// export default function verifyToken(req : Request, res : Response, next : NextFunction) {
//     const bearerHeader = req.headers['authorization'];
//     if(typeof bearerHeader !== 'undefined') {
//       const bearer = bearerHeader.split(' ');
//       const bearerToken = bearer[1];
//       // req.token = bearerToken;
//       next();
//     } else {
//       res.sendStatus(403);
//     }
  
//   }