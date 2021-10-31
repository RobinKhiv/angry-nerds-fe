import React from 'react'

export default function forumpost(props) {
    return (
        <div className="row justify-content-center mb-4 mt-4">
            <div className="col-10">
                <div class="card text-center">
                    <div class="card-header">
                        {props.author}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.content}</p>
                    </div>
                    <div class="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
            </div>
        </div>
    )
}
