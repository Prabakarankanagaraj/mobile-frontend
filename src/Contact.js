import { alpha } from "@mui/material"
import axios from "axios"

const url="http://localhost:8080/CrudlProject"
const mine="katran:praba"
const tok=btoa(mine)

export const callDelete=async(object)=>{
    const t = await axios.delete(`${url}/delid/${object.mobId}`,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('valid')}`
        }
    })
    return t
}


export const callUpdate=async(object)=>{
    const t=await axios.put(`${url}/up`,object,{
        headers:{
            "Authorization":` Basic ${sessionStorage.getItem("valid")}`
        }
    })
    return t
}

export const callCreate=async(object)=>{
   const t= await axios.post(`${url}/new`,object,{
        headers:{"Authorization":`Basic ${sessionStorage.getItem("valid")}`}
    })

    return t
    
}


export const callList=async()=>{
    try{
        const t = await axios.get(`${url}/`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem('valid')}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }

}

export const callLogOut=async()=>{
    await axios.get(`${url}/logout`)
    sessionStorage.removeItem("valid")
    return
}

export const callLogin=async(obj)=>{
    const credential=obj.username +":"+ obj.password;
    const token=btoa(credential);

    try{
        const t=await axios.get(`${url}/`,{
            headers:{"Authorization":`Basic ${token}`}
        })
        if(t.data){
            sessionStorage.setItem("valid",token)
        }
        return t;
    }
    catch(hai){
        alert(hai)
    }
}

export const callSimpleReturn=async()=>{
    const rec=await axios.get(`${url}/return`,{
        headers:{"Authorization":`Basic ${tok}`}
    })
    alert(rec.data)
    return rec;
}

export const passByBody=async()=>{
    const obj={
        "mobId":100,
        "brand":"Asus",
        "model":"Zenfone m2",
        "cost":18000,
        "megaArms":5000
    }

    await axios.post(`${url}/posting`,obj,{
        headers:{"Authorization":`Basic ${tok}`}
    })
}

export const simpleCall=async()=>{
    const hey="prabakaran k";
    const no=12345;
    await axios.get(`${url}/pass/${hey}/${no}`,{
        headers:{"Authorization":`Basic ${tok}`}})
}



export const scampleCall=async()=>{
  
    await axios.get(`${url}/haithere`,{
        headers:{"Authorization":`Basic ${tok}`}
})

}