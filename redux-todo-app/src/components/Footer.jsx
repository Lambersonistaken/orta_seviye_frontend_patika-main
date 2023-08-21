import React from "react";

function Footer() {
  return (
    <footer className="info">
      <p>Click to edit a todo</p>
      <p>
        Created by <a href="https://d12n.me/"> Dimitry</a>
      </p>
      <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  );
}

export default React.memo(Footer); // tekrardan render edilmesini engellemek için React.memo() kullanıldı.
