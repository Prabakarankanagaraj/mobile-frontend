import { WindowSharp } from "@mui/icons-material"
import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { callLogOut } from "./Contact"
import { Login } from "./Login"
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import { List } from "./List"
import { Read } from "./Read"
import { Create } from "./Create"

import NoteAddIcon from '@mui/icons-material/NoteAdd';


export const Home=()=>{
    const[logview,setLogview]=useState(false)
    const[listview,setListview]=useState(false)
    const[readview,setReadview]=useState(false)
    const[createview,setCreateview]=useState(false)
    const[databox,setDatabox]=useState({})


    
    const check=()=>{
        const t= sessionStorage.getItem("valid")
        if(t){
            setLogview(false)
        }
        else{
            setLogview(true)
        }
    }

    useEffect(()=>{
        check()
    },[])
    
    return(

        <>
        {
            logview? <Login/>
            :
            <>
                <div className="container-fluid">
                        <h1>Home page</h1>

                        <div className="row justify-content-around">
                            <Button className="col-1" color="error" onClick={async()=>{
                                    await callLogOut()
                                    window.location.assign("/")
                                }}>
                                    Logout
                            </Button>

                            <Button className="col-1" color="success" onClick={()=>{
                                setListview(true)
                                setCreateview(false)                            }}>
                                <FormatListBulletedIcon/>List
                            </Button>

                            <Button className="col-1" color="primary" onClick={()=>{
                                 setListview(false)
                                //alert(JSON.stringify(databox))
                                setReadview(true)
                            }}>
                                <ChromeReaderModeIcon/>
                                Read
                            </Button>
                            <Button className="col-1" color="warning" onClick={()=>{
                                setCreateview(true)
                            }}>
                                <NoteAddIcon/>Create
                            </Button>
                            

                        </div>

                        {
                         (createview)?<Create/>:  
                         (listview)?<List filling={setDatabox}/>:
                         (readview)?<Read obj={databox}/>:
                         <></>

                        }
                </div>



            </>
        }
        </>

    )
}