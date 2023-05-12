import {useState,useEffect} from 'react'

function Users() {

    const [users, setUsers] = useState([])


   useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json) )
    }, [])



  return (
    <div>
        <h1>Users</h1>
        {users.map((user) => {
            return (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            )
        } )}
    </div>
  )
}

export default Users
