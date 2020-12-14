// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Checkbox from './checkbox';

function App() {
  const employeiesList = [
    {name: 'Hassan', wfh: false},
    {name: 'Saad', wfh: false},
    {name: 'Ali', wfh: true},
    {name: 'Asad', wfh: true},
    {name: 'Irtiza', wfh: true},
    {name: 'Sohail', wfh: true},
  ];
  const [employeies, setEmployeies] = useState(employeiesList);
  const setEm = (e, id) => {
    const newEmployeiesList = [];
    
    employeies.forEach((employee, emp_key) => {
      if (emp_key === id) {
        const newWfh = !employee.wfh;
        employee.wfh = newWfh;
      }
      newEmployeiesList.push(employee)
    });

    // console.log("newEmployeiesList ==========>", newEmployeiesList);
    setEmployeies(newEmployeiesList)
  }
  

  
  return (
    <div className="App">      
      {
        employeies.map((employeeData, i) => {
          return <Checkbox
            key={i}
            name={employeeData.name}
            wfh={employeeData.wfh}
            setEmp={ (e) => setEm(e,i) }
          />
        })
      }
      
    </div>
  );
}

export default App;










{/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header> */}