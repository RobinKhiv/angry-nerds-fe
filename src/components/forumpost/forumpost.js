import React from 'react'

export default function forumpost(props) {
    return (
        <div className="row justify-content-center mb-4 mt-4">
            <div className="col-10">
                <div className="card text-center">
                    <div className="card-header">
                        {props.author}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.content}</p>
                    </div>
                    <div className="card-footer text-muted">
                    </div>
                </div>
            </div>
        </div>
    )
}
