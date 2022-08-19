import { AccountCircle } from '@mui/icons-material';
import LockResetIcon from '@mui/icons-material/LockReset';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Button, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { callLogin, callSimpleReturn, passByBody, scampleCall, simpleCall } from './Contact';


export const Login=()=>{

    const[user,setUser]=useState({
        username:"",
        password:""
    })

    const onCollect=(val)=>{
        const{name,value}=val.target
        setUser((remain)=>{
            return{
                ...remain,
                [name]:value
            }
        })
    }

    const onLogin=async()=>{
        alert(JSON.stringify(user)+" logged in")
        // await scampleCall()
        // await simpleCall()
        // await passByBody()
        // await callSimpleReturn()
        const ter= await callLogin(user)
        window.location.assign("/")
      }

    const onReset=()=>{
        setUser(()=>{
            return{
                username:"",
                password:""
            }
        })
    }
    return(
        <>
            <div className="mt-5 container " >
                <p className="dispaly-4 text-center text-warning">LOGIN into Mobile Zone</p>
                <div className="row justify-content-center ">
                    <div className="col-lg-8 col-md-10 col-sm-12 shadow p-5">
                            <TextField
                                id="input-with-icon-textfield"
                                className="form-control"
                                label="username"
                                name="username"
                                onChange={onCollect}
                                value={user.username}
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <AccountCircle />
                                    </InputAdornment>
                                ),
                                }}
                                variant="outlined"
                            />

                            <TextField
                                    id="outlined-password-input"
                                    label="password"
                                    name="password"
                                    onChange={onCollect}
                                    value={user.password}
                                    type="password"
                                    autoComplete="current-password"
                                    className="mt-4 form-control"
                            />

                            <div className="mt-4 row justify-content-around">
                            <Button variant="contained" className="col-1" color="success" onClick={()=>{
                                onLogin()
                            }}>
                                   <VpnKeyIcon color="inherit"/> 
                            </Button>

                            <Button variant="contained" className="col-1" color="error" onClick={()=>{
                                onReset()
                            }}>
                                <LockResetIcon color=""/>
                             </Button>
                            </div>

                    </div>

                </div>

            </div>

        </>

    )
}