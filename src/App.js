import React, { useEffect, useState } from "react";

import User from "./components/users/User";
import AddUser from "./components/users/AddUser";

function App() {

  let [users, setUsers] = useState([]);
  let [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
    .then(res => res.json())
    .then(users => {
      let rawUsers = users.results;
      let filteredUsers = rawUsers.map(user => {
        return {
          uuid: user.login.uuid,
          name: `${user.name.title} ${user.name.first} ${user.name.last}`,
          phone: user.phone,
          cell: user.cell,
          image: user.picture.thumbnail
        }
      })
      console.log(filteredUsers)
      setUsers(filteredUsers)
    })
    .catch(error => console.log(error))
  }, [])

  const AddUserHandler = (user) => {
    let newUsers = [user, ...users];
    setUsers(newUsers)
    setShowForm(!showForm)
  }

  const removeUserHandler = (uuid) => {
    let remainUsers = users.filter(user => user.uuid != uuid);
    setUsers(remainUsers);
  }

  const showFormHandler = () => {
    setShowForm(!showForm)
  }
 
  return (
    <div className="container mt-5">
     <div>
      <h1 className="text-center text-info">Our Employee</h1>
      <button className="btn btn-primary my-3" onClick={showFormHandler}>Add User</button>
      {showForm && <AddUser  addUser={AddUserHandler}/>}
     </div>
     {
      users.map(usr => <User data={usr} key={usr.uuid} remove={removeUserHandler} />)
     }
    </div>
  )
}

export default App;
