import { useState } from "react";
import axios from 'axios';

function Comment({ ref, post, currentUser, fetchComments }) {

  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);

  const handleTextInput = async () => {

    // axios.post(`http://localhost:3000/api/post/${post._id}`, { text, userId : currentUser._id });
    await axios.post(`https://social-media-app-gje5.vercel.app/api/post/${post._id}`, { text, userId : currentUser._id });
    setText('');
    let textArea = document.getElementById(post._id);
    textArea.value = '';
    fetchComments();
  }

  return (
    <div>
      <textarea id={post._id}  ref={ref} onChange={handleChange} placeholder='Write a comment' className='textarea textarea-bordered  textarea-lg focus:outline-none w-full text-sm md:text-base ' />
      <button className='btn btn-ghost' onClick={handleTextInput}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
      </button>
    </div>
  );
}

export default Comment;
