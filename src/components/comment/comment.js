import React from 'react'

export default function comment(props) {
    return (
        <div class="list-group-item list-group-item-action" aria-current="true">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{props.user}</h5>
                <small>date</small>
            </div>
            <p class="mb-1">{props.content}</p>
        </div>
    )
}
