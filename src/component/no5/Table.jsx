import React, { useState, useEffect } from 'react';
import "./table.css"
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';

const client = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/users',
});

const Table = () => {

    // Deklarasi variabel state
	const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [website, setWebsite] = useState('');
	const [users, setUsers] = useState([]);

	// GET Axios
	useEffect(() => {
		const fetchUser = async () => {
			try {
				let response = await client.get();
				setUsers(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchUser();
	}, []);

    
	// DELETE Axios
	const deleteUser = async (id) => {
		try {
			await client.delete(`${id}`);
			setUsers(
				users.filter((user) => {
					return user.id !== id;
				})
			);
		} catch (error) {
			console.log(error);
		}
	};

	// Form Submit
	const handleSubmit = (e) => {
		e.preventDefault();
		addUsers(id, name, email, website);
	};

	// POST Axios
	const addUsers = async (id, name, email, website) => {
		try {
			let response = await client.post('', {
				id: id,
				name: name,
                email: email,
                website: website,
			});
			setUsers([response.data, ...users]);
			setId('');
			setName('');
			setEmail('');
			setWebsite('');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>

            <Navbar />
            
            <div className="container">
                <table className='table table-borderless'>
                    <thead className='text-center'>
                        <tr>
                            <th><h5>Id</h5></th>
                            <th><h5>Name</h5></th>
                            <th><h5>Email</h5></th>
                            <th><h5>Website</h5></th>
                            <th><h5>Action</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                    <td>
                                        <button className='btn btn-primary mr-2 '><Link style={{ color: 'white', textDecoration: 'none' }} to={`/edit/${user.id}`}>Update</Link></button>
                                        <button className='btn btn-danger ' onClick={() => deleteUser(user.id)}>Delete</button>
                                    </td>
                                </tr>
                                
                            )
                        })}
                    </tbody>
                </table>

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <input 
                                type="text"
                                className='form-control mr-4'
                                name=""
                                value={name}
                                onChange={(e) => setName(e.target.value)} 
                                placeholder="Add name here..."/>
                        </div>

                        <div className="col">
                            <input 
                                type="email"
                                className='form-control mr-4'
                                name=""
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="Add email here..."/>
                        </div>

                        <div className="col">
                            <input 
                                type="text"
                                className='form-control mr-4'
                                name=""
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)} 
                                placeholder="Add website here..."/>
                        </div>
                        
                        <div className="col">
                            <button className='btn btn-success btn-block' type="submit">Add user</button>
                        </div>
                    </div>
                </form>
            </div>
            
		</div>
	);
};

export default Table;