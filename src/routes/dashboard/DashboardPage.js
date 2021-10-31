import React from 'react'
import Card from '../../components/card/card';

export default function DashboardPage() {
    const data = {
        content: [ {id:1, title: 'forum1',user: 'angry1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper tincidunt nulla, ut hendrerit ex auctor eget. Praesent a molestie nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vel nisl id orci bibendum convallis at a purus. Quisque ut tortor sagittis, varius felis quis, imperdiet elit.'},
        {id:2, title: 'forum1',user: 'angryperson1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper tincidunt nulla, ut hendrerit ex auctor eget. Praesent a molestie nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vel nisl id orci bibendum convallis at a purus. Quisque ut tortor sagittis, varius felis quis, imperdiet elit.'},
        {id:3, title: 'forum2',user: 'angryperson2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper tincidunt nulla, ut hendrerit ex auctor eget. Praesent a molestie nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vel nisl id orci bibendum convallis at a purus. Quisque ut tortor sagittis, varius felis quis, imperdiet elit.'},
        {id:4, title: 'forum3',user: 'angry1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper tincidunt nulla, ut hendrerit ex auctor eget. Praesent a molestie nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vel nisl id orci bibendum convallis at a purus. Quisque ut tortor sagittis, varius felis quis, imperdiet elit.'}],
        users: [
            'angryperson1', 'angryperson2', 'angryperson2', 'angryperson2', 'angryperson2'
        ]
    };
    return (
        <section className="container-xl">
            <div className="row">
                <h1 className="text-center">Dashboard</h1>
            </div>
            <div className="row">
                <div className="col-8">
                    {data.content.map(forum => <Card key={forum.id} title={forum.title} user={forum.user} content={forum.content}/>)}
                </div>
                <div className="col-3">
                    <h2>Angry Nerds</h2>
                    <ul className="list-group list-group-flush">
                        {data.users.map((user,index) => <li key={index} className="list-group-item">{user}</li>)}
                    </ul>
                </div>
            </div>
        </section>
    )
}
