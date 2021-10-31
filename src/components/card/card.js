import React from 'react'

export default function card(props) {

    return (
        <div class="card border-primary mb-3" >
            <div class="card-header">Author: {props.user}</div>
            <div class="card-body text-primary">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.content}</p>
            </div>
        </div>
    )
}
