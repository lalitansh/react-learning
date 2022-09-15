import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import { set, unset, isEmpty, isUndefined} from 'lodash'
import Constants from '../constant';
import './user.css';
import { setLocalStorage } from '../storage/storage';
import { useNavigate } from 'react-router-dom';
const Users=()=> {
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()
  const handleSetForm = (key, value) => {
    console.log('value, key', value, key);
    setForm({...form, [key]: value});
    unset(errors, key);
    // console.log(`name = ${form.key}, value = ${form.value}`)
  };

  const validate = () => {
    let errors = {};
    const {email, password} = form;

    let expInvailid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    let emailEmptyCheck = isEmpty(email);
    let userCompare = email !== Constants.Login.email;

    if (emailEmptyCheck) set(errors, 'email', ['email is required']);
    else if (!expInvailid) set(errors, 'email', ['Invalid email format']);
    else if (userCompare) set(errors, 'email', ['email is not recognized']);
    if (isEmpty(password)) set(errors, 'password', ['password is required']);
    else if (
      !emailEmptyCheck &&
      !userCompare &&
      expInvailid &&
      password !== Constants.Login.password
    )
      set(errors, 'password', [`incorrect password`]);

    return errors;
  };

  const onSave=()=> {
    let errors = validate();
    console.log("errors", errors)
    if(!isEmpty(errors)) return setErrors(errors)
    let User = {
      email : form.email,
      password: form.password
    }
    setLocalStorage('User', User)
    navigate('/', {replace: true})
  }

  const setErrorLabel=(value)=>{
    if(value){
      return <Label id='errorStyle' >{value}</Label>
    }
  }

  return(
  <div className="App">
        <h2>Sign In</h2>
        <Form className="form">
          <FormGroup>
            <div className="row" id="alignVertical">
            <Label for="exampleEmail">Username{}{}: </Label>
            <Input
              id="textInputStyle"
              type="email"
              name="email"
              placeholder="example@example.com"
              onChange={(e) => handleSetForm("email",e.target.value)}
            />
            </div>
            <div id={" alignVertical, smallMargin" }>
            {(!isEmpty(errors) && !isUndefined(errors.email)) && setErrorLabel(errors.email[0])}
            </div>
            
          </FormGroup>
          <FormGroup>
          <div className="row" id="alignVertical">
            <Label for="examplePassword">Password:</Label>
            <Input
            id="textInputStyle"
              type="password"
              name="password"
              placeholder="********"
              onChange={(e) => handleSetForm("password",e.target.value)}
            />
            </div>
            <div id={" alignVertical, smallMargin" }>
            {(!isEmpty(errors) && !isUndefined(errors.password)) &&  setErrorLabel(errors.password[0])}
            </div>
          </FormGroup>
        <Button onClick={()=> onSave()}>
        Submit
        </Button>
      </Form>
    </div>
  )
}

export default Users;