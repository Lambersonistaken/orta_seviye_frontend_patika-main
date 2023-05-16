import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Users() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data))
        .finally(() => setLoading(false))
    }, [])

  return (
    <div>

        {loading ? <h2>Loading...</h2> : null}
        <h1>Users</h1>
      <ul>
        {

            users.map((user) => {
                return (
                    <li key={user.id}>
                        <Link to={`/user/${user.id}`}>{user.name}</Link>
                    </li>
                )
            }
            )
            
        }
      </ul>
    </div>
  )
}

export default Users
