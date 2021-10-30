import React from 'react'

export default function ContentPage(props) {
    const data = {
        roomId: '12345',
        title: 'forum1',
        author: 'angryperson1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper tincidunt nulla, ut hendrerit ex auctor eget. Praesent a molestie nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vel nisl id orci bibendum convallis at a purus. Quisque ut tortor sagittis, varius felis quis, imperdiet elit.',
        comments: [{user:'angryperson2', content:'Lorem ipsum dolor sit amet'},{user:'angryperson2', content:'Lorem ipsum dolor sit amet'},{user:'angryperson2', content:'Lorem ipsum dolor sit amet'}]
    }
    return (
        <div>
            content
        </div>
    )
}
