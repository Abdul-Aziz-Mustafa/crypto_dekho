import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Crousel from './Crousel';

const useStyles=makeStyles(()=>({
     banner:{
        background:"url(./photo-1530533718754-001d2668365a.jfif)"
     },
     bannerContent: {
       height: 400,
       display: "flex",
       flexDirection: "column",
       paddingTop: 15,
       justifyContent: "space-around",
     },
     tagline: {
       display: "flex",
       height: "40%",
       flexDirection: "column",
       justifyContent: "center",
       textAlign: "center",
     },
     carousel: {
       height: "50%",
       display: "flex",
       alignItems: "center",
     },

}))
const Banner = () => {
    const classes=useStyles();
    return (
    <div className={classes.banner}>
        <Container className={classes.bannerContent}>
            <div className={classes.tagline}>
            <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Dekho
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
            </div>
          <Crousel/>
        </Container>
    </div>
  )
}

export default Banner