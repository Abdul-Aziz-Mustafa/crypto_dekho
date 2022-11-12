import axios from 'axios'
import React from 'react'
import { CoinList } from '../config/api'
import { CryptoState } from '../CryptoContext'
import {useEffect,useState} from 'react'
// import { Container, ThemeProvider, Typography } from '@material-ui/core'
import { AppBar,ThemeProvider, Container, Toolbar, Typography, Select, MenuItem, createTheme, TextField } from "@material-ui/core"

const darkTheme= createTheme({
  palette:{
    primary:{
      main:"#fff"
    },
    tpe:"dark",
  },
});
function CoinTable() {
    const [coins, setcoins] = useState([])
    const [search, setsearch] = useState("")
    const [loading, setloading] = useState(false)
    const {currency} =CryptoState();
    const fetchCoin= async ()=>{
        setloading(true)
        const {data}=await axios.get(CoinList(currency));
        setcoins(data)
        setloading(false);
    }
    useEffect(() => {
      fetchCoin()
    }, [currency])
    console.log(coins)
    return (
      <ThemeProvider theme={darkTheme}>
        <Container style={{textAlign : "center"}}>
          <Typography variant='h4' style={{margin:18, fontFamily:"Montserrat"}}>
            price by market cap
          </Typography>
          <TextField
          InputLabelProps={{
              style: { color: '#fff' },
            }}
          inputProps={{ style: { color: "red" } }}
          // sx={{ input: { color: 'red' } }}
          label="Search For a Crypto Currency.."
          variant="outlined"
          style={{ marginBottom: 20, width: "100%"  }}
          onChange={(e) => setsearch(e.target.value)}
        />

          {/* </TextField> */}
        </Container>


      </ThemeProvider>
      
    );

}

export default CoinTable