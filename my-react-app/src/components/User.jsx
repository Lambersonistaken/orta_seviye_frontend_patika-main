function User ({name, surname, age, isLoggedIn, friends}) {
    return (
      <div>
        {/* <h1>{props.name} {props.surname}</h1>
        <p>{props.email}</p> */}
  
        {
          isLoggedIn ? `${name} ${surname} ${age}` : "Not logged in"
        }
  
        {
         friends.map((friend,index) => {
          return  <div key={index}>
                      {index} - {friend} 
                  </div> 
         })
            
          
        }
      </div>
    )
  }
  
  export default User;