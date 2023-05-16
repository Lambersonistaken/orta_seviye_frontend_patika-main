import { useParams, Link } from "react-router-dom";
import {useEffect, useState} from 'react'
import axios from "axios";

function User() {

    const {id} = useParams();

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => setUser(res.data))
        .finally(() => setLoading(false))
    }, [id])

  return (
    <div>
     <h1>User Detail</h1>
     <p>ID : {id}</p>
        {loading ? <h2>Loading...</h2> : null}
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>{user.username}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>

        <Link to="/users">Back to Users</Link>
        <br/>
        <Link to={`/user/${parseInt(id)+1}`}>Next user</Link>
        <br/>
        <Link to={`/user/${parseInt(id)-1}`}>Previous user</Link>

    </div>
  )
}

export default User
