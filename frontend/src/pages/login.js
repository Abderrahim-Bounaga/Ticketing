import React from 'react'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input ,FormFeedback, Alert } from 'reactstrap';
import axios from 'axios' 
axios.defaults.withCredentials = true

function Login(props) {
    const initialState = {
        email: '',
        password:''
      }
      const [dataLogin,setDataLogin] = React.useState(initialState)
  const [error,setError] = React.useState('')
  const handelChange = (e)=>{
    const {name,value} = e.target
    setDataLogin({...dataLogin,[name]:value})
  }
  const handelSubmit= async (e)=>{
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/Employe/login',dataLogin,{
        withCredentials:true
      })
      console.log(res)
      if(res){
        if(res.data.isAuth && res.data.role === 'admin') props.history.push('/dashAdmin')
        // if(res.data.isAuth && res.data.role === 'User') props.history.push('/user')
        // if(res.data.isAuth && res.data.role === 'Tech') props.history.push('/tech')
      }
    } catch (error) {
      error && setError(error.response.data);
    }

  }
    return (
        <div style={{paddingLeft: 500,paddingRight: 500, marginTop:70}}>

          <h1>Login</h1>
           {
             error && <p>{error}</p>
           }
           
            <Form onSubmit={handelSubmit}>
              <FormGroup>
                  <Label>Email</Label>
                  <Input name="email"
                    type="email" 
                    placeholder="someone@abolkog.com" 
                    onChange={handelChange} 
                    
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input name="password"
                      type="password"
                      placeholder="Your Password"
                        onChange={handelChange}
                      
                    />
                    
                </FormGroup>
                <Button type='submit' color='primary' >Sign In</Button>
              </Form>                
        </div>
    
    )
}

export default Login
