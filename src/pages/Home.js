import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Real.Fresh.Food</h1>
          <p>Let's Eat!!</p>
          <p>Best Food In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
          <br></br>
          <Link to="/reservation">
            <button>BOOK NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
