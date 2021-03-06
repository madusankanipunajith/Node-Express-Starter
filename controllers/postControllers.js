const Post = require("../models/Post");


exports.getAllPosts = async (req, res, next)=>{
    try {
        const [posts , _] = await Post.findAll();

        res.status(200).json({
            posts
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.createNewPost = async (req, res, next) =>{
   try {
        const {title, body} = req.body;
        let post = new Post(title, body);
        post  = await post.save();

        res.status(201).json({
            message: "post is created successfully"
        })
    
   } catch (error) {
        console.log(error);
        next(error);
   }
}

exports.getPostById = async (req, res, next) =>{
    try {
        const [post , _] = await Post.findById(req.params.id);

        res.status(200).json({post: post[0]});
    } catch (error) {
        console.log(error);
        next(error);
    }
}