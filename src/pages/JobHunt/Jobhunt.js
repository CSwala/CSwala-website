import React, { useEffect,useState } from 'react'
import {
  Paper,
  Grid,
  Box,
  makeStyles,
  Typography,
  Tooltip,
  Fade,
  
} from "@material-ui/core";
import { red } from '@material-ui/core/colors';
import { fontFamily } from '@mui/system';

const useStyles = makeStyles({
  gridContainer:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      padding: 35,
    },
    paper: {
      padding: 35,
      textAlign: 'center',
      color: "#fff",
      cursor:"pointer",
      background:"#1C1C1C",
      "&:hover": {
        background: "#1a1a1a",
      },
  
    },
    innerGrid:{
      margin:12,
      backgroundColor:"#1C1C1C"
    },
    jobhunt:{
      background:"#222222",
    },
    link:{
      textDecoration:"none"
    }
    
})

function Jobhunt() {
  const classes = useStyles();
  const [data,setData]=useState([]);

    useEffect(() => {
      fetch('portal.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(res => res.json())
        .then(data => {
            setData(data)
            console.log(data)
        })
    })

  return (
    <div className={classes.jobhunt}>
      <Box py={6} px={3}>
        <Grid container className={classes.gridContainer} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
          data && data.length > 0 && data.map((item) => 
          <Grid className={classes.innerGrid} item xs={6} sm={3}>
            <a href={item.Link} className={classes.link}><Paper className={classes.paper}>{item.Title}</Paper></a>
          </Grid>
          
          )
        }
          
        </Grid>
      </Box>
    </div>
  )
}

export default Jobhunt