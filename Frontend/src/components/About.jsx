import React from "react";
import { Link } from "react-router-dom";
import { data } from "../restApi.json";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to our fast delivery food service, where quality meets convenience. Our mission is to provide you with hot, delicious meals quickly, ensuring every bite is a delight. With a diverse menu catering to all tastes and dietary preferences, we bring restaurant-quality dining straight to your doorstep. Our dedicated team of culinary experts and reliable delivery personnel are committed to delivering exceptional service and super tasty food, making your dining experience effortless and enjoyable.
            </p>

            
            <Link to={"/"}>
              Explore Menu
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;