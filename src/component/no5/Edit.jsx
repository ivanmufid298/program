import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [users, setUser] = useState({
    name: "",
    email: "",
    website: "",
  });

  const { name, email, website } = users;

  const onInputChange = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
  };

  useEffect(() => {
     loadUser();
  },[]); // eslint-disable-line

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, users);
    navigate("/no5");
  };

  const loadUser = async () => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name..."
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your email..."
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Website
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your website..."
                name="website"
                value={website}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/no5">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}