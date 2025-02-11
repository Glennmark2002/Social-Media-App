import React, { useState } from 'react';

function PostModal() {

  const [file, setFile] = useState(null);   
  const [message, setMessage] = useState('');   

  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);  
  }

  const handleUpload = async (e) => {
    e.preventDefault();   

    const res = await fetch('/api/post/upload', {
        
    })

  }

  return (
      <dialog id="modal" className={`modal z-50` }>
        <div className="modal-box w-11/12 max-w-2xl">
          <div className='mb-4'>
            <h3 className="font-bold text-center text-lg">Create Post</h3>
            <form method="dialog">
              <button className='btn btn-ghost rounded-full absolute right-3 top-3 '> 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>  
              </button>
            </form> 
          </div>
          <form onSubmit={handleUpload}>
            {/* <textarea placeholder={`What's on your mind`} className='textarea textarea-bordered textarea-lg h-48 focus:outline-none w-full text-sm md:text-base mb-4' /> */}
            <input type="file" onChange={handleChangeFile} />
            <button className='btn w-full bg-base-300'>  Post  </button>
          </form>
        </div>
    
        <form method="dialog" className="modal-backdrop">
          <button className='cursor-default'></button>
        </form>
      </dialog>
  );
}

export default PostModal;