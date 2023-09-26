import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Home() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
  const [size, setSize] = useState(3);

    const { id } = useParams();
  
    useEffect(() => {
      loadUsers();
    }, []);

    useEffect(() => {
      fetchData();
    }, [page, size]);

    const fetchData = async () => {
        const response = await axios.get(
          `http://localhost:8080/customers?page=${page}&size=${size}`
        );
    };
  
  
    const loadUsers = async () => {
      const result = await axios.get("http://localhost:8080/customers");
      setUsers(result.data);
    };
  
    const deleteUser = async (id) => {
      await axios.delete(`http://localhost:8080/customer/${id}`);
      loadUsers();
    };
  
    return (
      <div className="container">
        <div className="py-4">
          <table className="table border shadow">
            <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Id Card</th>
              <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>
                  <Link to="/edit">  <a href="." class="link-primary" >{user.id}</a> </Link>
                  </th>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.dob} </td>
                  <td onClick={()=> deleteUser(user.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="position-relative">
       <Link to="/create"> <button type="button" className="btn btn-primary position-absolute bottom-50 end-50">Create</button> </Link>
       <button type="button" onClick={()=>setSize(size+5)} >Show more</button>
        </div>
      </div>
    );
  }

  export default Home;