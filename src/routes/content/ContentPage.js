import React from 'react'
import ForumPost from '../../components/forumpost/forumpost'
import Commentform from '../../components/forms/comment/commentform'
import Comment from '../../components/comment/comment'

export default function ContentPage(props) {
    const data = {
        roomId: '12345',
        title: 'forum1',
        author: 'angryperson1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper tincidunt nulla, ut hendrerit ex auctor eget. Praesent a molestie nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vel nisl id orci bibendum convallis at a purus. Quisque ut tortor sagittis, varius felis quis, imperdiet elit.',
        comments: [{id:1,user:'angryperson2', content:'Lorem ipsum dolor sit amet'},{id:2,user:'angryperson2', content:'Lorem ipsum dolor sit amet'},{id:3,user:'angryperson2', content:'Lorem ipsum dolor sit amet'}]
    }
    return (
        <section className="container">
            <ForumPost author={data.author} title={data.title} content={data.content}/>
            <Commentform/>
            <div className="row justify-content-center">
                <h2>Comments</h2>
                <div className="col-8">
                    <div class="list-group">
                        {data.comments.map(comment => <Comment key={comment.id} user={comment.user} content={comment.content}/>)}
                    </div>
                </div>
            </div>
        </section>
    )
}
