import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './CommentList.css';

const CommentList = (props) => {

    const [videoComment, setVideoComment] = useState([]);

    async function displayVideoComments () {
        let response = await axios.get(
            `http://127.0.0.1:8000/api/comment/${props.currentVideo}/`
        );
        console.log(response.data)
        setVideoComment(response.data)

    }
  useEffect(() => {
    displayVideoComments();
    console.log(videoComment)

}, [])
  
// cleanup comments here
    
    return (
        <div className='displayCommentList'>                                             
            {videoComment.map((videoComment, index)=> {
                return (
                    <div>
                        <p key={index} className='comment'>{videoComment.text}</p>                        
                        </div>

                )
            })}

        </div>
    )

}

export default CommentList;