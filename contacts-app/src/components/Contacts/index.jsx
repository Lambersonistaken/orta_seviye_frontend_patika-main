import {useState,useEffect} from 'react'
import List from './List'
import './style.css'
import Form from './Form'

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullname: "Atilla",
            phone_number: "123123123"
        },
        {
            fullname: "Rossi",
            phone_number: "123123123"
        },
        {
            fullname: "John Smith",
            phone_number: "123123123"
        }

    ])

    useEffect(() => {
       console.log(contacts)
    }, [contacts])

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts;