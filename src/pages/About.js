import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import restaurantBackgroundImage from "../images/back.jpg"


const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${restaurantBackgroundImage})`,
          backgroundSize: "cover", // Set background size to cover the entire page
          backgroundPosition: "center", // Center the background image
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white", // Set font color to white
          padding: "20px",
          margin: "100",
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Restaurant</Typography>
        <p>
        Introducing MY RESTAURANT, your gateway to an exquisite Indian culinary journey! Nestled in the heart of Erode, our restaurant is a haven for food enthusiasts seeking an authentic and diverse Indian dining experience.

  At our RESTAURANT , we take pride in offering a tantalizing array of Indian delicacies, carefully curated from different regions of India. From the fiery spices of North Indian curries to the aromatic biryanis of the South, our menu is a reflection of India's rich gastronomic heritage.

Our skilled chefs, with years of expertise, craft each dish with precision, using only the finest and freshest ingredients. Whether you're a fan of buttery naan and creamy tikka masalas or prefer the healthy and flavorful options of our tandoori grills, there's something to satisfy every palate.<br></br>


        </p>
        <br />
        <p>
          
        </p>
      </Box>
    </Layout>
  );
};

export default About;
