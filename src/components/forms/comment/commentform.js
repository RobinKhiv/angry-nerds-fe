import React from "react";
import "./commentform.css";

export default function commentform() {
  return (
    <div class="container">
      <form>
        <div>
          <label class="form-label">Add Comment</label>
          <div>
            <textarea
              class="form-control"
              id="comment-textarea"
              rows="4"
              placeholder="Write your comment here..."
            ></textarea>
          </div>
          <div class="btns">
            <button type="button" class="btn btn-secondary">
              Cancel
            </button>
            <button type="button" class="btn btn-info">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
