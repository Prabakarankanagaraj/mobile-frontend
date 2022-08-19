import { useState } from "react"
import UpgradeIcon from '@mui/icons-material/Upgrade';
import PhonelinkEraseIcon from '@mui/icons-material/PhonelinkErase';
import { Button, TextField } from "@mui/material"
import { callUpdate } from "./Contact";

export const Update=(property)=>{

    const[update,setUpdate]=useState({
        "mobId":property.one.mobId,
        "model":property.one.model,
        "brand":property.one.brand,
        "cost":property.one.cost,
        "meagArms":property.one.megaArms
    })
    const assemble=(detail)=>{
        const{name,value}=detail.target
        setUpdate((old)=>{
            return{
            ...old,
            [name]:value
            }
        })

    }

    const onUpdate=async()=>{

        const tmp=await callUpdate(update)
        alert(JSON.stringify(tmp.data)+"has updated")
        window.location.assign("/")

    }

    const onCancel=()=>{
        setUpdate({
            "model":"",
            "brand":"",
            "cost":0,
            "megaArms":0
            
        })
    }



    return(
        <>
        <div className="container mt-3">
            <h1 className="text-center text-primary">Update the corrections here !.</h1>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 rounded-3 shadow-lg p-3">
                <TextField 
                            id="outlined-basic"
                            name="brand"
                            value={update.brand}
                            onChange={assemble}
                            className="form-control mb-2" 
                            label="Mobile brand" 
                            variant="outlined" 
                        />
                        <TextField 
                            id="outlined-basic"
                            name="model"
                            value={update.model}
                            onChange={assemble}
                            className="form-control mb-2" 
                            label="Mobile model" 
                            variant="outlined" 
                        />
                        <TextField 
                            id="outlined-basic"
                            name="cost"
                            value={update.cost}
                            onChange={assemble}
                            className="form-control mb-2" 
                            label="Mobile Cost" 
                            variant="outlined" 
                        />
                        <TextField 
                            id="outlined-basic"
                            name="megaArms"
                            value={update.meagArms}
                            onChange={assemble}
                            className="form-control mb-2" 
                            label="Mobile megaArms" 
                            variant="outlined" 
                        />

                        <div className="mt-3 row justify-content-around">
                             <Button variant="outlined" color="success" className="col-1" onClick={()=>onUpdate()}>
                                <UpgradeIcon/>
                            </Button>
                            <Button variant="outlined" color="error" className="col-1" onClick={()=>onCancel()}>
                                <PhonelinkEraseIcon/>
                            </Button>

                        </div>

                </div>

            </div>

        </div>
        </>
    )
}