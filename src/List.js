 import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react"
import { callList } from "./Contact";

export const List=(properties)=>{
   
    const[record,setRecord]=useState([])

    const loading=async()=>{
        const tmp =  await callList()
        setRecord(tmp.data)
    }

    useEffect(()=>{
        loading()
    },[])

    const columns = [
        { field: 'mobId', headerName: 'Mobile ID', width: 300 },
        { field: 'brand', headerName: 'Mobile Brand', width: 300 },
        { field: 'model', headerName: 'Mobile Model', width: 300 },
        { field: 'cost', headerName: 'Mobile Cost', width: 300 },
        { field: 'megaArms', headerName: 'Mobile MegaArms', width: 300 }
    ]

    return(
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="table-responsive-lg">
                <div style={{ height: 400, width: '100%' }} className="col-lg-8 col-md-10 col-sm-12">
                    <DataGrid
                        onSelectionModelChange={(collected)=>{
                            alert(collected)
                            const obj=record.filter((each)=>{
                                return each.mobId==collected
                            })
                            alert(JSON.stringify(obj))
                            properties.filling(obj[0])
                             //window.location.assign("/")
                        }}
                        rows={record}
                        columns={columns}
                        getRowId={(sil)=>sil.mobId}
                        pageSize={7}
                        rowsPerPageOptions={[7]}
                    />
               </div>

                </div>

            </div>

        </div>
    )
}