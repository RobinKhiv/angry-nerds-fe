import React, { useState } from "react";
import ApiService from "../../../services/ApiService";
import "./commentform.css";

export default function Commentform(props) {
  const [error, setError] = useState(false);

  const submitComment = ev => {
    ev.preventDefault();
    const { content } = ev.target;
    ApiService.postComment(content.value, props.forum_id)
      .then(res => {
        window.location.reload();
      })
      .catch(error => setError(error.message));
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10">
          <form onSubmit={submitComment}>
            <div>
              <label className="form-label">Add Comment</label>
              <div role="alert" className="text-danger">{error && <p>{error}</p>}</div>
              <div>
                <textarea 
                  required
                  className="form-control"
                  id="comment-textarea"
                  name="content"
                  rows="4"
                  placeholder="Write your comment here...">
                </textarea>
              </div>
              <div className="btns">
                <button type="submit" className="btn btn-info">Post</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
