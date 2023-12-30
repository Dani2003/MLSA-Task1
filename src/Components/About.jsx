/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/wallpaper.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
"👋 Greetings from Lahore, Pakistan! I'm Abdul Bari, currently pursuing a Computer Science degree at the University of Punjab. This year, I enthusiastically participated in GSSOC 2023 and HacktoberFest 2023 while also joining the Aspire Leadership Program at Harvard University. My programming repertoire includes Java (from Great Learning) and Python (from Coursera). Additionally, I've gained practical experience through two Java programming internships.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Alpha-MLSA",
  "Java Developer",
  "Open-Source Contributor",
  "Software Engineer",
  "ML-Enthusiast",
  "AI-Enthusiast",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
"With a wealth of Java programming expertise and a meticulous approach, I excel in devising streamlined solutions that harmoniously blend practicality with user-centered design. My focus lies in creating technology that's intuitive and inclusive, catering to the needs of all users seamlessly.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
