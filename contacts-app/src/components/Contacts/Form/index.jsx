import {useState,useEffect} from 'react'

const initialFormValues = { fullname: "", phone_number: "" }

function Form({addContact, contacts}) {

    const [form, setForm] = useState(initialFormValues)

    useEffect(() => {
        setForm(initialFormValues)
    }, [contacts])


    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(form.fullname === "" || form.phone_number === "") {
            return false
        } 

        addContact([...contacts,form])

        setForm(initialFormValues)

    }

  return (
    <div>
        <form onSubmit={onSubmit}>
           <input name='fullname' placeholder='Name' value={form.fullname} onChange={onChangeInput} />
           <br />
           <input name='phone_number' placeholder='Phone Number' value={form.phone_number} onChange={onChangeInput} />

           <br />
           <br />


           <button className="btn" onClick={onSubmit}>Add</button>
        </form>
     
    </div>
  )
}

export default Form;