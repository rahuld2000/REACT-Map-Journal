import React from 'react';
import Nav from './Nav.jsx';
import Main from './Main.jsx'
import data from './data.js';
import './App.css';

function App() {
  const cards=data.map(item=>{
    return(
      <Main
      key={item.id}
      item={item}
      />
    )
  })

  return (
    <div>
   <Nav/>
   {cards}
   </div>
  );
}

export default App;
