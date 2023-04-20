import PropTypes from "prop-types";




function User ({name, surname, age, isLoggedIn, friends, address}) {

  if(!isLoggedIn) {
    return <div>Not logged in</div>
  }
    return (
      <div>
        {/* <h1>{props.name} {props.surname}</h1>
        <p>{props.email}</p> */}
  
        {
          isLoggedIn ? `${name} ${surname} ${age}` : "Not logged in"
        }

        {address && <p>{address.city} {address.country} {address.zipCode}</p>} 
  
        {
         friends && friends.map((friend,index) => { // friendsten sonra kullandığım && operatörü friends boşsa çalışmasını engelliyor. Friends varsa map fonksiyonunu çalıştırıyor.
          return  <div key={friend.id}>
                      {friend.id}- {friend.name}
                  </div> 
         })
            
          
        }
      </div>
    )
  }

  
  User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // oneOfType ile birden fazla tipi kabul edebiliriz.
    isLoggedIn: PropTypes.bool.isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({ // shape ile obje içindeki özellikleri belirtebiliriz.
      city: PropTypes.string,
      country: PropTypes.string,
      zipCode: PropTypes.number
    })
  }

  User.defaultProps = {
    isLoggedIn: true,
  }
  
  export default User;