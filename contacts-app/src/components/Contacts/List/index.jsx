import {useState} from 'react'

function List({contacts}) {

    const [filterText, setFilterText] = useState('')

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => {
            return item[key].toString().toLowerCase().includes(filterText.toLowerCase())
        })
    })


  return (
    <div>

        <input type="text" placeholder='Search' value={filterText} onChange={(e) => setFilterText(e.target.value)} />


      <ul>
        {
            filtered.map((contact, index) => (
                <li key={index}>{contact.fullname}</li>               
            ) )
        }
      </ul>
    </div>
  )
}

export default List;
