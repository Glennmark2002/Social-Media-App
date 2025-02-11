import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User',  required: true},
    image:  String,
    desc: { type: String, required: true},
    likes: []
  }, {
    timestamps: true
  }
)

const Post = mongoose.model('Post', postSchema);  
export default Post; 