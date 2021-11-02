import React from 'react'
import { Link } from 'react-router-dom'

export default function card(props) {
    return (
        <Link className="card border-primary mb-3 text-decoration-none" to={`/blog/${props.id}`} >
            <div className="card-header">Author: {props.user}</div>
            <div className="card-body text-primary">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.content}</p>
            </div>
        </Link>
    )
}
