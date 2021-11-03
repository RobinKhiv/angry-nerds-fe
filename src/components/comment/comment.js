import React from 'react'

export default function comment(props) {
    return (
        <div className="list-group-item list-group-item-action" aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{props.user}</h5>
            </div>
            <p className="mb-1">{props.content}</p>
        </div>
    )
}
