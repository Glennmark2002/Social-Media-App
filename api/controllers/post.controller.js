import Post from "../models/post.model.js"
import Comment from "../models/comment.model.js"

export const createPost = async (req, res) => {
  const newPost = new Post(req.body);  

  try {
    
    await newPost.save();
    res.status(200).json('Post Created');   
  } catch (error) {
    res.status(500).json(error);  
  }
}

export const getAllPost = async (req, res) => {

  try {

    const posts = await Post.find().populate('userId', 'username picture').sort({ createdAt: - 1 });   
    res.status(200).json(posts); 
    
  } catch (error) {
    res.status(500).json(error); 
  }
}

export const commentPost = async (req, res) => {

  try {
    const newComment = new Comment({
      postId: req.params.postId,
      userId: req.body.userId,
      text: req.body.text,
    });
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    res.status(500).json(err);
  }
}
export const getComment = async (req, res) => {

  try {
  
    const comments = await Comment.find({ postId: req.params.postId }).populate('userId', 'username picture');
    res.status(200).json(comments);
    
  } catch (error) {
    res.status(500).json(error);
  }

}

export const likePost = async (req, res) => {

  const { id } = req.params;
  const { userId } = req.body;

  try {

    const post = await Post.findById(id);
    if(!post) return res.status(404).send('Post not found');

    if(post.likes.includes(userId)) {
      post.likes = post.likes.filter((like) => like !== userId);
    } else {
      post.likes.push(userId);
    }

    await post.save();
    res.status(200).json({ likes : post.likes});
    
  } catch (error) {
    res.status(500).json({ message : error.message });
  }

}