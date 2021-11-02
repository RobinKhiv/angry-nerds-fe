import React, { useEffect, useState } from 'react'
import Card from '../../components/card/card';
import ForumForm from '../../components/forms/forum/forumform';
import config from '../../config';
import JwtService from '../../services/JwtService';

export default function DashboardPage() {
    const [forums, setForums] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`${config.API_ENDPOINT}/forum`, {
            headers: {
              authorization: `Bearer ${JwtService.getAuthToken()}`
            }
          }).then(res =>
            !res.ok ? res.json().then(e => Promise.reject(e)) 
            : res.json().then(res => {
                setUsers(res.data.users);
                setForums(res.data.forums);
            })
          );
    }, []);
 
    return (
        <section className="container-xl">
            <div className="row">
                <h1 className="text-center">Dashboard</h1>
            </div>
          
            <div className="row">
                <div className="col-8">
                    <div className="text-center mb-4">
                        <ForumForm/>
                    </div>
                    {forums.map(forum => <Card key={forum.id} id={forum.id} title={forum.title} user={forum.username} content={forum.content}/>)}
                </div>
                <div className="col-3">
                    <h2>Angry Nerds</h2>
                    <ul className="list-group list-group-flush">
                        {users.map((user,index) => <li key={index} className="list-group-item">{user.username}</li>)}
                    </ul>
                </div>
            </div>
        </section>
    )
}
