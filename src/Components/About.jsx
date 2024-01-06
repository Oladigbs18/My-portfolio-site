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
import image from "../images/istockphoto-501670801-612x612.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Web Designer studying at Lagos State University. I am a creative, self-motivated, and hardworking individual with a strong desire to learn and grow professionally by creating innovative solutions for web and mobile applications. I am continuously developing my skills to become a professional Software Engineer and deliver cutting-edge solutions to my clients.";
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "Color theory",
  "Inclusive design",
  "Accessibility",
  "Knowledge of HTML, CSS, and JavaScript",
  "Graphic design",
  "Digital Marketing",
  "Time management",
  "Communication",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am extremely enthusiastic about taking on new challenges and exploring the latest technologies to create cutting-edge designs. I am constantly expanding my knowledge and skills in various technologies to stay up-to-date with the latest trends and techniques. My ultimate goal is to provide effective visual solutions to design problems and create a unique style and approach that stands out from the rest. I am passionate about bringing my own creative spin to each project and delivering high-quality work that exceeds expectations.";

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
