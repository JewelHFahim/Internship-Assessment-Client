import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Layout2 = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://internship-assessment-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);


  const handleDelete = (id) => {
    fetch(`https://internship-assessment-server.vercel.app/users/${id}`,{
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log(data);
          toast.success("Deleted Successfully");
        }
      });
  };


  return (
    <div className="overflow-x-auto mt-5 p-8">
    <p className="text-3xl text-center my-5">Table</p>
      <table className="table w-full">
        <thead className="text-slate-500">
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>DOB</th>
            <td>Email</td>
            <td>Phone Number</td>
          </tr>
        </thead>
        <tbody>

        {
          users.map((user, i) =>
          <tr key = {user.i}>
            <th>{i+1}</th>
            <td> {user.data.name}</td>
            <td>{user.startDate}</td>
            <td>{user.data.email}</td>
            <td>{user.data.number}</td>
            <button className="btn btn-sm" onClick={()=>handleDelete(user._id)}>X</button>
          </tr>)
        }

        </tbody>
      </table>
    </div>
  );
};

export default Layout2;
