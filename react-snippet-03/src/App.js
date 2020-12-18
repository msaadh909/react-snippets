import React, { useState } from 'react';
import './App.css';
import Movebox from './Movebox';

const handleUpdateEmployeeStatus = (e, array, setArray, newArray) => {
  if (e.target.checked) {
    const value = e.target.value


    newArray.push(value);

    
    array = array.filter(function(item) {
        return item !== value
    })
    setArray(array)    
  }
}

function App() {
  // Declare a new state variable, which we'll call "Array One"
  const [arrayOne, setArrayOne] = useState([
    'epmloyee-1',
    'epmloyee-2',
    'epmloyee-3',
    'epmloyee-4',
    'epmloyee-5',
  ])
  // console.log('arrayOne ====>', arrayOne);

  // Declare a new state variable, which we'll call "Array Two"
  const [arrayTwo, setArrayTwo] = useState([
    'epmloyee-6',
    'epmloyee-7',
    'epmloyee-8',
    'epmloyee-9',
    'epmloyee-10',
  ])
  // console.log('arrayTwo ====>', arrayTwo);

  return (
    <div className="App">
      <div className="first">
        <h3>Array One</h3>
        {
          arrayOne.map((value, i) => {
            return <Movebox
              key={i}
              employee={value}
              updateEmployeeStatus={(e) => handleUpdateEmployeeStatus(e, arrayOne, setArrayOne, arrayTwo)}
            />
          })
        }
      </div>
      <div className="last">
        <h3>Array Two</h3>
        {
          arrayTwo.map((value, i) => {
            return <Movebox
              key={i}
              employee={value}
              updateEmployeeStatus={(e) => handleUpdateEmployeeStatus(e, arrayTwo, setArrayTwo, arrayOne)}
            />
          })
        }
      </div>
    </div>
  );
}

export default App;