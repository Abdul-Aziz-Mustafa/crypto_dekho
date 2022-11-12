import { makeStyles } from '@material-ui/core'
import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { CryptoState } from '../../CryptoContext';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'
import { TrendingCoins } from '../../config/api';
import { Link } from 'react-router-dom';
const useStyles = makeStyles(
    (theme) => ({
        carousel:
        {
            height: "100%",
            display: "flex",
            alignItems: "center",
        },
        carouselItem: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            textTransform: "uppercase",
            color: "white",
            textDecoration: 'none',
            fontWeight: "bold",
        },
        sub1:
        {
            flex: 1,
            fontSize: "17px",
            color: "lime",
            fontFamily: "Montserrat",
            fontWeight: "bold",
            cursor: "pointer",
        },
        sub2:
        {
            flex: 1,
            fontSize: "17px",
            color: "red",
            fontFamily: "Montserrat",
            fontWeight: "bold",
            cursor: "pointer",
        },
    })
)
function Crousel() {
    const classes = useStyles();
    const [trending, settrending] = useState([])
    const { currency,symbol } = CryptoState()
    const fetchCoin = async () => {
        const { data } = await axios.get(TrendingCoins(currency))

        settrending(data);
    }


    useEffect(() => {


        fetchCoin()

    }, [currency])
    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        },
        700: {
            items: 6,
        },

    }

    const items = trending.map((coin) => {
        const positive = coin.price_change_percentage_24h >= 0;
        return (
            <Link className={classes.carouselItem}   to={`/coins/${coin.id}`}>
                <img
                    src={coin?.image}
                    alt={coin.name}
                    height="80"
                    style={{ marginBottom: 10 }}
                />
                <span>
                    {coin?.symbol}
                    &nbsp;
                    {positive && <span className={classes.sub1}>{coin?.price_change_percentage_24h?.toFixed(2)}% </span>}
                    {!positive&& <span className={classes.sub2}>{coin?.price_change_percentage_24h?.toFixed(2)}% </span>}
                    {/* <span className={classes.sub}> */}

                        {/* {positive && coin?.price_change_percentage_24h?.toFixed(2)}% */}
                    
                </span>
                <span style={{color:"gold"}}>
                    {symbol} { (coin?.current_price.toFixed(3))} 
                </span>
            </Link>
        )
    })
    return (
        <div className={classes.carousel}>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={500}
                animationDuration={1500}
                disableDotsControls
                responsive={responsive}
                autoPlay
                items={items}

            />
        </div>

    )
}

export default Crousel