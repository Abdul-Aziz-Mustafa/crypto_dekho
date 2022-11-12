import React from 'react'
import { AppBar,ThemeProvider, Container, Toolbar, Typography, Select, MenuItem, createTheme } from "@material-ui/core"
import { makeStyles } from '@material-ui/styles'
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    fontSize: "30px",
    color: "lime",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));
function Header() {
  const history = useNavigate();
  const classes = useStyles()
  const {currency,setCurrency,symbol}=CryptoState()
  const darkTheme= createTheme({
    palette:{
      primary:{
        main:"#fff"
      },
      tpe:"dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <Typography
            onClick={()=>(history('/'))}
            className={classes.title}>
            Crypto Dekho
          </Typography>
          <Select 
          variant='outlined'
          color='white'
          style={{
            width: 100,
            height:40,
            marginRight :15,
            color:"white",
          }}
          value={currency}
          onChange={(e)=>setCurrency(e.target.value)}
          >
            <MenuItem value={"INR"}>INR </MenuItem>
            <MenuItem value={"USD"}>USD </MenuItem>
          </Select>
        </Toolbar>
      </Container>

    </AppBar>
    </ThemeProvider>
  )
}

export default Header