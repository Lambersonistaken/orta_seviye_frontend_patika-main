import {useState,useEffect} from 'react'

function Users() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)


   useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json) )
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
