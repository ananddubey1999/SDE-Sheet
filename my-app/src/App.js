// jsx
// import React from 'react';

// class App extends React.Component{

  
//   render(){
//     // return Whatever you want to show on screen
//     return <h1>hello world</h1>
//   }

// }

// export default App;




import React, { useState } from "react";

// class App extends React.Component {
//   render() {
//     return <h1>Hello World</h1>;
//   }
// }

function App() {
  //useState is a function defined in
  //React library. It is also known
  //as hook

  //Provide Default value as the first argument
  const counterState = useState(0);
  //useState returns an array with two items
  //1. The state variable
  //2. A method/function to change that variable
  const count = counterState[0];
  const setCount = counterState[1];

  function incrementCount() {
    //setCount changes the count state variable
    //Pass it the new Value
    setCount(count + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increment Count</button>
    </>
  );
}

export default App;