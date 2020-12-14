// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Radio from './radio';

function App() {
  const employeiesList = [
    {name: 'Hassan', sex: 'male'},
    {name: 'Saad', sex: 'male'},
    {name: 'Ali', sex: 'female'},
    {name: 'Asad', sex: 'female'},
    {name: 'Irtiza', sex: 'female'},
    {name: 'Sohail', sex: 'female'},
  ];
  const [employeies, setEmployeies] = useState(employeiesList);

  const genderList = [
    'female', 'male', 'other'
  ];

  const updateEmployeeGender = (name, value) => {
    const newEmployeiesList = [];
    
    employeies.forEach(employee => {
      if (employee.name === name) {
        employee.sex = value;
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
          return <div key={i}>
            <p>{employeeData.name}</p>
            <Radio
              name={employeeData.name}
              options={genderList}
              value={employeeData.sex}
              handleChange={(value) => updateEmployeeGender(employeeData.name, value)}
            />
          </div>
        })
      }
    </div>
  );
}

export default App;