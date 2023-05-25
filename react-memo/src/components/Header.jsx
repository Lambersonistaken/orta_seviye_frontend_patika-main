import React from 'react';
import { useState } from 'react';

function Header({number,increment}) {
    console.log("Header component re-rendered");

  return (
    <div>
      <h1 className="head">Counter App - {number}</h1>

      <br />
      <br />
      <button onClick={increment}>ARTTIR</button>
    </div>
    
  )
}

export default React.memo(Header); // memo ile sarmaladık. Memo ile sarmaladığımız componentler sadece kendi state'leri değiştiğinde re-render olur.
