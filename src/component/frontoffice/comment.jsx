import React, { useEffect, useState, useCallback } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faReply } from '@fortawesome/free-solid-svg-icons';
import { AiFillWechat } from "react-icons/ai";

import './CommentComponent.css'; // Import the stylesheet

const CommentComponent = () => {
  const profileImageUrl = `/malak.png`; // Relative path to the profile image in the public folder

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [replyInput, setReplyInput] = useState('');
  const [replyCommentId, setReplyCommentId] = useState(null);
  const [replies, setReplies] = useState({}); // State to store replies for each comment
  const socket = io('http://localhost:3002');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:3000/comment');
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();

    socket.on('newComment', (comment) => {
      setComments((prevComments) => [...prevComments, comment]);
    });

    socket.on('connect_error', (error) => {
      console.error('WebSocket connection error:', error);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const fetchReplies = async (commentId) => {
    try {
      const response = await axios.get(`http://localhost:3000/comment/${commentId}/replies`);
      setReplies((prevReplies) => ({ ...prevReplies, [commentId]: response.data }));
    } catch (error) {
      console.error('Error fetching replies:', error);
    }
  };

  const handleCommentSubmit = useCallback(async () => {
    try {
      const response = await axios.post('http://localhost:3000/comment', {
        commentaire: newComment,
      });

      socket.emit('comment', response.data);
      setNewComment('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  }, [socket, newComment]);

  const handleInputChange = useCallback((e) => {
    setNewComment(e.target.value);
  }, []);

  const handleReplyClick = useCallback(
    async (comment) => {
      try {
        const response = await axios.post(`http://localhost:3000/reply/${comment._id}`, {
          contentreply: replyInput,
          comment: comment
        });

        socket.emit('comment', response.data);
        setReplyInput('');
        setReplyCommentId(null);
      } catch (error) {
        console.error('Error adding reply:', error);
      }
    },
    [socket, replyInput]
  );

  return (
    <div className="comment-sidebar">
      <div className="comment-container">
        <div className="comment-input">
          <input
            type="text"
            value={newComment}
            onChange={handleInputChange}
            placeholder="Add a new comment"
          />
          <button className="submit-button" onClick={handleCommentSubmit}>
            <FontAwesomeIcon icon={faComment} />
          </button>
        </div>
        <div className="comment-list">
          <ul>
            {comments.map((comment) => (
              <li key={comment._id} className="comment-card">
                <div>
                  <div className="profile-image">
                    <img src={profileImageUrl} alt="User Profile" />
                  </div>


                  <span className="comment-text">{comment.commentaire}</span>
                  <button className="reply-button" onClick={() => {
                    setReplyCommentId(comment._id);
                    fetchReplies(comment._id);
                  }}>
                    <AiFillWechat />
                  </button>
                </div>
                {replyCommentId === comment._id && (
                  <div className="reply-input">
                    <input
                      type="text"
                      value={replyInput}
                      onChange={(e) => setReplyInput(e.target.value)}
                      placeholder="Your reply..."
                    />
                    <button className="submit-button" onClick={() => handleReplyClick(comment)}>
                      <FontAwesomeIcon icon={faReply} />
                    </button>
                    {replies[comment._id] && (
                      <ul>
                        {replies[comment._id].map((reply) => (
                          <li key={reply._id}>
                            {reply.contentreply}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
