/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "..src/images/pgmr poster.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Application video for MLSA",
    description:
      "Sharing my application video for the Microsoft Learn Student Ambassador program. Excited to join a community passionate about technology and learning. Despite tough competition, I believe my video showcases my dedication and enthusiasm to contribute to this amazing program. Eager to be a part of the Microsoft family!",
    url: "https://youtu.be/4N05nwN5ajk?si=xdl0hSK5AKBG2a1C",
  },
  {
    title: "My Java-Intership Project",
    description:
      "This is the project that i made for my java programming internship, named as student grades calculator.",
    url: "https://github.com/Dani2003/Codsoft-Java-Internship/blob/main/Grades.java",
  },
  {
    title: "Alpha MLSA",
    description:
      "My MLSA Account for other peers to connect with me.",
    url: "https://mvp.microsoft.com/en-US/studentambassadors/profile/dc8a2cdf-ebe2-41db-b3cd-666597aec6ce",
  },
  {
    title: "My Java-Intership Project",
    description:
      "This is the porject that i made for my internship at CodSoft, named as ATM interface for banking transactions.",
    url: "https://github.com/Dani2003/Codsoft-Java-Internship/blob/main/ATM_Interface.java",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
