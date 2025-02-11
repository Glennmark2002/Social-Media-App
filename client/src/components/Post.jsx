import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Comments from './Comments';
import Comment from './Comment';

function Post({ post }) {

  const { currentUser } = useSelector((state) => state.user);
  const [likes, setLikes] = useState(post.likes.length);
  const [liked, setLiked] = useState(post.likes.includes(currentUser._id));
  const [comments, setComments] = useState([]);
  const [commenSection, setCommentSection] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const handleOpenComment = () => setIsCommentOpen(prev => !prev);
  const toggleCommentSection = () => setCommentSection(prev => !prev)

  const handleLike = async () => {

    const res = await axios.put(`https://social-media-app-gje5.vercel.app/api/post/${post._id}/like`, { userId : currentUser._id });  
    setLikes(res.data.likes.length);
    setLiked(res.data.likes.includes(currentUser._id));
  }

  const fetchComments = async () => {

    const res = await axios.get(`https://social-media-app-gje5.vercel.app/api/post/comment/${post._id}`);
    // const res = await axios.get(`http://localhost:3000/api/post/comment/${post._id}`);
    console.log(res.data)
    setComments(res.data);
  }

  useEffect(() => {
    fetchComments();
  }, [])

  return (
    <div className='h-auto bg-base-100 rounded-xl flex flex-col p-4 mb-4 gap-4'>

      <div className='flex'>
        <img src={post.userId.picture } className='h-12 w-12 rounded-full' />
        <p className='pl-4 font-medium'> {post.userId.username} </p>
      </div>

      <div className='rounded-xl overflow-hidden flex'>
        { post.image && <img src={post.image} /> }
      </div>

      <div className='rounded-xl flex'>
        <p> { post.desc } </p>
      </div>

      <div className='flex justify-between px-2'>
        <div className='flex'>
          {likes ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg> : ''}
          <p className='pl-2'> {likes ? likes : ''} </p>
        </div>

        <div className='flex' >

        {comments != 0 ?
        <a className='flex cursor-pointer' onClick={toggleCommentSection}>
          <p className='pr-2'> { comments.length } </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </a>
        : '' }
        
      </div>
      </div>

      <div className='px-2 grid grid-cols-2'>
        <div onClick={handleLike} className='btn btn-ghost'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
          <p>Like</p>
        </div>
        <div className='btn btn-ghost' onClick={handleOpenComment}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          <p>Comment</p>
        </div>
      </div>

      {isCommentOpen && <Comment fetchComments={fetchComments} currentUser={currentUser} post={post} />}
      {commenSection && comments.map(comment => <Comments key={comment._id} comment={comment} /> )}

    </div>
  );
}

export default Post;
