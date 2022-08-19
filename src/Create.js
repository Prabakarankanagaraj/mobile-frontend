import { useState } from "react"
import { Button, TextField } from "@mui/material"
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PhonelinkEraseIcon from '@mui/icons-material/PhonelinkErase';
import { callCreate } from "./Contact";

export const Create=()=>{
const[create,setCreate]=useState({
    "brand":"",
    "model":"",
    "cost":0,
    "megaArms":0
})

const assemble=(get)=>{
    const{name,value}=get.target
    setCreate((old)=>{
        return{
            ...old,
            [name]:value
        }

    })

}
    const onAdd=async()=>{
        const tmp=await callCreate(create)
        alert(JSON.stringify(tmp.data))
        onCancel()
    }

    const onCancel=()=>{
        setCreate({
            "brand":"",
            "model":"",
            "cost":0,
            "megaArms":0
            
        })
    }

    return(
        <>
         <div className="container mt-3">
            <h1 className="text-center text-primary">You can add new devices here</h1>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 shadow rounded-3">
                <TextField
                 id="outlined-basic" 
                 name="brand"
                 value={create.brand}
                 onChange={assemble}
                 className="form-control mb-3"
                 label="Mobile Brand"
                 variant="outlined" 
                 />
                 <TextField
                 id="outlined-basic" 
                 name="model"
                 value={create.model}
                 onChange={assemble}
                 className="form-control mb-3"
                 label="Mobile Model"
                 variant="outlined" 
                /> 
                 <TextField
                 id="outlined-basic" 
                 name="cost"
                 value={create.cost}
                 onChange={assemble}
                 className="form-control mb-3"
                 label="Mobile Cost"
                 variant="outlined"
                /> 
                 <TextField
                 id="outlined-basic" 
                 name="megaArms"
                 value={create.megaArms}
                 onChange={assemble}
                 className="form-control mb-3"
                 label="Mobile MegaArms"
                 variant="outlined"
                /> 

                </div>

                <div className="row justify-content-around mt-2">
                <Button variant="outlined" color="warning" className="col-1" 
                onClick={()=>{onAdd()}}>
                     <Inventory2Icon/>
                </Button>

                <Button variant="outlined" color="error" className="col-1" 
                onClick={()=>{onCancel()}}>
                      <PhonelinkEraseIcon/>
                </Button>

                </div>

            </div>

         </div>
        </>
    )
}