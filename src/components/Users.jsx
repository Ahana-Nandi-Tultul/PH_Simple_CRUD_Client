import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>All Users: {users.length}</h2>
            {
                users.map(user => <p key={user._id}>{user.name} : {user.email}</p>)
            }
        </div>
    );
};

export default Users;