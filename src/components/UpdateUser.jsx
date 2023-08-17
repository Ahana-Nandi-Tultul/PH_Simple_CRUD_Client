import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const loadUser = useLoaderData();
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
        const user ={name, email}

        fetch(`http://localhost:3000/users/${loadUser._id}`, {
            method: 'PUT',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount){
                alert('Updated Successfully.')
                form.reset();
            }
        })
    }
    return (
        <div>
            <h2>Update User</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" defaultValue={loadUser.name} />
                <br />
                <input type="email" name="email" id="" defaultValue={loadUser.email}/>
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;