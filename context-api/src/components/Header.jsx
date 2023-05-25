import {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

function Header() {
    const {theme, setTheme}=useContext(ThemeContext); // theme is a state variable and setTheme is a function to update the theme
  return (
    <div>
        <h1>Context API</h1>
        <p>Active Theme : {theme} </p>

        <hr />

    </div>
  )
}

export default Header