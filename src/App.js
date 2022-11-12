
// import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CoinPage from './pages/CoinPage';
import { Routes, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';


function App() {
  const useStyle = makeStyles(
    () => ({
      App: {
        backgroundColor: "#14161a",
        color: "white",
        minHeight: "100vh"
      }
    })
  )
  const classes = useStyle();

  return (
    <BrowserRouter>

      <div className={classes.App}>

        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} ></Route>
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
