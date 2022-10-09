import React, { useEffect,useState } from 'react'
import {
  Paper,
  Grid,
  Box,
  makeStyles,
  TextField ,
  
} from "@material-ui/core";
import "./Jobhunt.css"





const useStyles = makeStyles((theme) => ({
    gridContainer:{
      display:"gridContainer",
      background:"#222222",
      justifyContent:"center",
      alignItems:"center",
      padding: 10,
    },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: "white",
    background: "#1C1C1C",
    border: "1px solid rgba(0, 0, 0, 0.3)",
    display: "grid ,",
    justifyItems: "flex-start",
    alignItems: "center",
    paddingLeft: 35,
    paddingRight: 35,
    overflow: "hidden",
    "&:hover": {
      background: "#1a1a1a",
    },
  },


  innerGrid:{
      margin:8,
      backgroundColor:"#1C1C1C"
    },
    jobhunt:{
      background:"#222222",
    },
    form:{
      width: "200px",
      height: "100px",
    },
    link:{
      textDecoration:"none"
    },
  formLabel: {

    color: "grey !important",
    fontSize: "1rem",
    borderColor: "white",
    lineHeight: 0,
    fontFamily: '"Work Sans", bold',
      
    boxOrient: "vertical",
    textOverflow: "ellipsis",
   
    wordBreak: "break-all",
  },


}));



function Jobhunt() {
  const classes = useStyles();
  const [data,setData]=useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setNewSearch] = useState("");

    useEffect(() => {
       fetch('portal.json',{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(res => res.json())
        .then(data => {
            setData(data)
            setFilter(data)
            console.log(data)
        })
    },[])


    const handleChange = (e) => {
      console.log(e.target.value)
      setNewSearch(e.target.value)
      const filtered = filter.filter((item) => item.Title.toLowerCase().includes(search.toLowerCase()))
      setFilter(filtered)

    }


  return (
    <div className={classes.jobhunt}>
      <div className={(classes.form, classes.gridContainer)}>
        <TextField sx={{ input: { color: 'grey' } }} 
        InputLabelProps={{className: classes.formLabel}}
        id="outlined-basic" onChange={handleChange} label="Search.." variant="outlined"/>/>
     </div>


      <Box py={6} px={6}>
        <Grid container className={classes.gridContainer} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
        {
          filter && filter.length > 0 && filter.map((item) => 
          <Grid className={classes.innerGrid} item xs={2} sm={2}>
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