import './Header.css';



const name = "Mehmet"
const surname = "Aslan"
const isLogged = true;


function Header () {
  return (
    <header>
      <h1>My App</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellat aliquam alias dolores est voluptate dignissimos consectetur, ratione omnis asperiores similique quis impedit temporibus ex laboriosam at reprehenderit quisquam cupiditate.
      Incidunt expedita laborum facilis corporis eius hic dolorem, corrupti aspernatur repellendus illo natus earum omnis velit odit facere sequi maxime molestias totam animi illum tempora delectus. Sunt quae accusamus obcaecati?</p>
      <img src="https://images.hindustantimes.com/img/2023/02/03/1600x900/RJS_1675408609023_1675408617310_1675408617310.png" alt="" />
      {/* <p>My name is {name} {surname}</p> */}
      {`My name is ${name} ${surname}`} {/* Bu şekilde bir kullanım da mümkün */}

      {isLogged ? <p> {name} Logged in</p> : <p> {name} Not logged in</p>} {/* Ternary Operator  ve koşullu render */}

    </header>
      
  )
}

export default Header;