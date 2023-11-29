import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import style from './Login.module.css'
export default function Login() {
  return (
 
      <div className={style.mainDiv}>
        <h1>Login to Food Mania!!</h1>
        <div className={style.insideDiv}>
        <TextField
          required
        //   id="outlined-required"
        //   label="Required"
        //   defaultValue="Enter Your Email"
        id="outlined-textarea"
        label="Email Address"
        placeholder="Enter Email"          
        />
       
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{marginTop:'20px'}}
        />
        </div>
        <Button variant="contained"  sx={{fontWeight:'bold',color:'white',width:'90px',backgroundColor:'orange'}} >Login</Button>
       
      </div>
   
  );
}