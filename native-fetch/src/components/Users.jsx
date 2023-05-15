import {useState,useEffect} from 'react'

import axios from 'axios'

function Users() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)


   useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data) )
        .finally(() => setLoading(false))
    }, [])



  return (
    <div>
        <h1>Users</h1>

        {loading ? <h2>Loading...</h2> : null}

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
