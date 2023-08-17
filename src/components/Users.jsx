import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadUsers = useLoaderData();
    console.log(loadUsers);
    const [users, setUsers] = useState(loadUsers);
    const handleDelete = _id => {
        console.log(_id)
        fetch(`http://localhost:3000/users/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json() )
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                alert('Deleted Successfully')
                const remaining = users.filter(user => user._id !== _id)
                setUsers(remaining)
            }
        })
    }
    return (
        <div>
            <h2>All Users: {users.length}</h2>
            {
                users.map(user => <p key={user._id}>{user.name} : {user.email}
                <button onClick={() => handleDelete(user._id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Users;