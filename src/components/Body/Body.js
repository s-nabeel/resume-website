import classes from "./Body.module.css";
import React from "react";
import { useRef, useEffect } from "react";
import { init } from "ityped";

const Body = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      typeSpeed: 120,
      loop: false,
      strings: ["Nabeel."],
    });
  }, []);
  return (
    <div className={classes.Container}>
      <h2 className={classes.Intro}>Hi, my name is</h2>
      <h1 className={classes.Name} ref={textRef}></h1>
      <p className={classes.AboutMe}>
        I see that you have stumbled upon my site. I'm currently a student in my
        second year studying <span>Computer Science</span> at the{" "}
        <span>University of Waterloo</span>. I have more than 8 years of
        programming experience in various languages.
      </p>
    </div>
  );
};

export default Body;
