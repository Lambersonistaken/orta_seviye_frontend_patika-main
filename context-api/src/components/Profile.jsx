import {useContext,useState} from 'react'
import {useUser} from '../context/UserContext'

function Profile() {


    const {user, setUser}=useUser();

    const [loading, setLoading]=useState(false);

    const handleLogin=()=>{
        setLoading(true)
        setTimeout(()=>{
            setUser({id:1, username:"johndoe", bio:"lorem berem törem"});
            setLoading(false);
        },2000)
    }

  return (
    <div>

        {!user && <button onClick={handleLogin}>{loading ? "Loading..." : "Login"}</button>
        }

       

        <code>{JSON.stringify(user)}</code>

        <br />

        {user && <button onClick={()=>setUser(null)}>Logout</button>
        }
    </div>
  )
}

export default Profile
