import {useState} from 'react'
import {AsyncPaginate} from 'react-select-async-paginate'

function Search({onSearchChange}) { // onSearchChange is a function that will be called when the user types in the search bar


    const [search, setSearch] = useState(null)



    const handleChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }


  return (
    <AsyncPaginate placeholder="Search for cities" value={search}  debounceTimeout={600} onChange={handleChange} loadOptions={loadOptions} />
  )
}

export default Search
