import React from 'react';

function Header({number,data}) {
    console.log("Header component re-rendered");
  return (
    <div>
      <h1 className="head">Counter App - {number}</h1>

      <br />
      <br />

      <code>{JSON.stringify(data)}</code>

    </div>
  )
}

export default React.memo(Header); // memo ile sarmaladık. Memo ile sarmaladığımız componentler sadece kendi state'leri değiştiğinde re-render olur.
