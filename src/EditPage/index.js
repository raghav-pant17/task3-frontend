import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditPage() {
    let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    id_type: "",
    dob: "",
    id_num: "",
    gender:""
  });

  const {firstName, lastName, id_type, dob, id_num, gender} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/customer/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/customer/${id}`);
    setUser(result.data);
  };

    return (
        <div className="container">
        <div className="row">
          {/* <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"> */}
            {/* <h2 className="text-center m-4">Creat Customer</h2> */}
            <div>
            {/* <h2>Creat Customer</h2> */}
            <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand">Navbar</a>
  </nav>
            <form
             onSubmit={(e) => onSubmit(e)
             }
            >
              <div className="container">
                <div className="row">
              <div className="mb-3 col">
                <label htmlFor="FirstName" className="form-label">
                  First Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your first name"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3 col">
                <label htmlFor="LastName" className="form-label">
                  Last Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your last name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              {/* <div className="mb-3 col">
                <label htmlFor="DOB" className="form-label">
                  Date of birth:
                </label>
                <input
                  type={"date"}
                  className="form-control"
                  placeholder="dd-mm-yyyy"
                  name="dob"
                  value={dob}
                  onChange={(e) => onInputChange(e)}
                />
              </div> */}
              {/* </div>
              <div className="row">
              <div className="mb-3 col">
              <label htmlFor="id type" className="form-label">ID type</label>
              <select class="form-select" aria-label="Default select example" value={id_type}>
                    <option selected>Open this select menu</option>
                    <option value="Aadhar Number">Aadhar Number</option>
                    <option value="PAN Number">PAN Number</option>
                    <option value="Passport Number">Passport Number</option>
              </select>
              </div>
              <div className="mb-3 col">
                <label htmlFor="id number" className="form-label">
                  ID Number
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your ID number"
                  name="id-num"
                  value={id_num}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3 col">
              <label htmlFor="gender" className="form-label">Gender</label>
              <select class="form-select" aria-label="Default select example" value={gender}>
                    <option selected>Open this select menu</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
              </select>
              </div> */}
              </div>
              </div>
              {/* <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                  Username
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your username"
                  name="username"
                  value={username}           
                  onChange={(e) => onInputChange(e)}
                />
              </div> */}
              {/* <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  E-mail
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your e-mail address"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </div> */}

              
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/">
                Cancel
              </Link>
            </form>
          </div>
        </div>
       </div>

    )
}

export default EditPage;