import React from "react";
import BackgroundSlider from "react-background-slider";
import image1 from "../images/studio_ghibli_1.webp";
import image2 from "../images/studio_ghibli_2.webp";

function Home () {
  
  return(
    <section className="Home container">
      <BackgroundSlider
        images={[image1, image2]}
        duration={10} transition={2} 
      />
      <h1>Welcome to GhibliApp</h1>
    </section>
  )
}

export default Home;