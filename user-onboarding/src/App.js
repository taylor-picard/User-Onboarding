import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import schema from './Validation/formSchema';
import * as yup from 'Yup';
import Form from './Components/Form';


const initialFormVals = {
  username: '',
  password: '',
  email:'',
  tos: false
}

const initialFormErr = {
  username: '',
  password: '',
  email:'',
  tos: ''
}

function App() {
  const [formValues, setFormValues] = useState(initialFormVals);
  const [formErrors, setFormErrors] = useState(initialFormErr);
  const [user, setUser] = useState([]);

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }
  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
      .then(res => {
        setUser([res.data, ...user])
        setFormValues(initialFormVals)
      })
      .catch(err => console.log(err))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  return (
    <div className="App">
      <Form values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit}/>
      {user.map(user => (
        <div key={user.id}>
          <p>{user.createdAt}</p>
          <p>{user.email}</p>
          <p>{user.username}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
