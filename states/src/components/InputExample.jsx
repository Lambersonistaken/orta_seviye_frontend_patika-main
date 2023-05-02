import React from 'react'

function InputExample() {

  const [name, setName] = React.useState('')
    const [surname, setSurname] = React.useState('')


  return (
    <div>
      <h4>Please enter a name :</h4>
     <input value={name} onChange={(event)=> setName(event.target.value)}/>
     <br />
     {name}

     <h4>Please enter your surname</h4>
        <input value={surname} onChange={(event)=> setSurname(event.target.value)}/>

      {surname}


    </div>
  )
}

export default InputExample
