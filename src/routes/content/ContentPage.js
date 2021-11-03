import React, { useEffect, useState } from 'react'
import ForumPost from '../../components/forumpost/forumpost'
import Commentform from '../../components/forms/comment/commentform'
import Comment from '../../components/comment/comment'
import $ from 'jquery'; 
import config from '../../config';
import JwtService from '../../services/JwtService';

export default function ContentPage(props) {
    const [comments, setComment] = useState([]);
    const [forum, setForum] = useState({id: '', content: '', title: '', username: ''})
    const id = props.match.params.id;
    $('.modal-backdrop').hide();
    useEffect(() => {
        
        fetch(`${config.API_ENDPOINT}/forum/${id}`, {
            headers: {
              authorization: `Bearer ${JwtService.getAuthToken()}`
            }
          }).then(res =>
            !res.ok ? res.json().then(e => Promise.reject(e)) 
            : res.json().then(res => {
                setForum({
                    id: res.data.forum.id,
                    content: res.data.forum.content, 
                    title: res.data.forum.title, 
                    username: res.data.forum.username
                });
                setComment(res.data.comments);
                console.log(res)
            })
          );
    }, [id]);
 
    return (
        <section className="container pb-8">
            <ForumPost author={forum.username} title={forum.title} content={forum.content}/>
            <Commentform forum_id={forum.id}/>
            <div className="row justify-content-center">
                <h2>Comments</h2>
                <div className="col-8">
                    <div className="list-group">
                        {comments.map(comment => <Comment key={comment.id} user={comment.username} content={comment.content}/>)}
                    </div>
                </div>
            </div>
        </section>
    )
}
