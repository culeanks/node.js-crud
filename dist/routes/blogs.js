"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blog_1 = __importDefault(require("../src/models/blog"));
const router = express_1.default.Router();
// Retrieving all contents
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield blog_1.default.find();
        res.json(blogs);
    }
    catch (err) {
        res.send("Error: " + err);
    }
}));
// Retrieving a content by ID
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield blog_1.default.findById(req.params.id);
        res.json(blog);
    }
    catch (err) {
        res.send("Error: " + err);
    }
}));
// Updating a content by ID
// router.patch('/:id', async (req,res) => {
//     try {
//             const blog = await Blog.findById(req.params.id)
//             blog.title = req.body.title
//             const bg = await blog.save()
//             res.json(bg)
//     }
//     catch(err){
//         res.send("Error: " + err)
//     }
// });
// Creating a new content
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = new blog_1.default({
        title: req.body.title,
        summary: req.body.summary,
        author: req.body.author
    });
    try {
        const bg = yield blog.save();
        res.json(bg);
    }
    catch (err) {
        res.send('Error :' + err);
    }
}));
exports.default = router;
//# sourceMappingURL=blogs.js.map