import { Avatar, Card, CardActions, CardContent, CardHeader, Collapse, IconButton, styled } from "@mui/material"
import { Button, Typography } from "@mui/material"
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import BackspaceIcon from '@mui/icons-material/Backspace';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { red } from "@mui/material/colors";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { Update } from "./Update";
import { callDelete } from "./Contact";



export const Read=(prop)=>{

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));

    const[expanded,setExpanded]=useState(false)
    const[edit,setEdit]=useState(false)

    const handleExpandClick=()=>{
        setExpanded(!expanded)
    }

    return(
        <>
        {
        (edit)?
        <Update one={prop.obj}/>
        :
        <>
        <div className="container mt-3">
        <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-12 shadow">
              <Card style={{backgroundColor:'green'}}>
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: red[500] }}>
                                M
                            </Avatar>
                            }
                            title="Mobile World !."
                            subheader="Mobile Features"
                        />                             
                        <CardContent>
                            <Typography variant="h3" color="text.error" align="center">
                             {prop.obj.model}         {prop.obj.mobId}
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography variant="h3" color="text.error" className="row justify-content-center">
                             {prop.obj.brand}       {prop.obj.cost}
                            </Typography>
                            <Typography variant="h3" color="text.error" align="center">
                                {prop.obj.megaArms}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            >
                            <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent className="row justify-content-around">
                             <Button className="col-2" color="warning" onClick={()=>{
                                setEdit(true)
                             }}>
                             <EditLocationAltIcon/>Edit
                             </Button>
                             <Button className="col-2" color="error" onClick={async()=>{
                                const tmp=await callDelete(prop.obj)
                                alert(tmp.data)
                                window.location.assign("/")
                            }}>
                             <BackspaceIcon/>Delete
                             </Button>                         
                            </CardContent>
                        </Collapse>
                    </Card>

            </div>

        </div>

    </div>

        </>
       }
      
    </>
    )

}