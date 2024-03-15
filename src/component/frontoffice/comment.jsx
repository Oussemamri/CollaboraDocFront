// comment.jsx

import React, { useEffect, useState, useCallback } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { AiOutlineComment, AiOutlineSend } from 'react-icons/ai';
import './CommentComponent.css';
import { FcComments } from "react-icons/fc";


const CommentComponent = () => {
  const profileImageUrl = `/malak.png`;

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [replyInput, setReplyInput] = useState('');
  const [replyCommentId, setReplyCommentId] = useState(null);
  const [replies, setReplies] = useState({});
  const socket = io('http://localhost:3000');

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
          comment: comment,
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
      <div className="comments-container">
        <div className="comment-input">
          <input
            type="text"
            value={newComment}
            onChange={handleInputChange}
            placeholder="Add a new comment"
          />
          <button className="submit-button" onClick={handleCommentSubmit}>
            <AiOutlineSend />
          </button>
        </div>
        <div>
          <ul className="comments-list">
            {comments.map((comment) => (
              <li key={comment._id} className="comment-card">
                <div className="comment-main-level">
                  <div className="comment-display">
                    <div className="comment-avatar">
                      <img src={profileImageUrl} alt="User Profile" />
                    </div>
                    <span className="comment-text">{comment.commentaire}</span>
                  </div>
                  <button
                    className="reply-button"
                    onClick={() => {
                      setReplyCommentId(comment._id);
                      fetchReplies(comment._id);
                    }}
                  >
                    <AiOutlineComment />
                  </button>
                  {comment.replies.length > 0 && (
                    <span className="reply-indicator">{comment.replies.length} Réponses</span>
                  )}
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
                      <AiOutlineSend />
                    </button>
                    {replies[comment._id] && (
                      <ul className="reply-list">
                        {replies[comment._id].map((reply) => (
                          <li key={reply._id}>{reply.contentreply}</li>
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
