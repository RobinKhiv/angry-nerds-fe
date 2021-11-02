import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ApiService from '../../../services/ApiService';

export default function Forumform() {
    const [error, setError] = useState(false)
    const history = useHistory();
    const forumSubmit = ev => {
        ev.preventDefault();
        const { title, content } = ev.target;
        console.log(title.value, content.value)
        ApiService.createForum(
            title.value, 
            content.value
        ).then(res => {
            history.push(`/blog/${res.data.forum_id}`)})
        .catch(error => setError(error.message));
    }

    return (
        <React.Fragment>
           {/* Button trigger modal */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Create Angry Post
            </button>

             {/* Modal  */}
            <form onSubmit={forumSubmit} className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New Forum Post</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div role="alert" className="text-danger">{error && <p>{error}</p>}</div>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="title" className="col-form-label"></label>
                                    <input type="text" name="title" className="form-control" placeholder="Title" id="title"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="content" className="col-form-label"></label>
                                    <textarea className="form-control" name="content" placeholder="Content" id="content"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" data-dismiss="modal">Create Angry Post</button>
                        </div>
                    </div>
                </div>
            </form>
       </React.Fragment>
    )
}
