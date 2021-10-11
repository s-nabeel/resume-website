import classes from "./Buttons.module.css";

const Buttons = () => {
  return (
    <div className={classes.Container}>
      <a
        id="tet"
        className={classes.Button}
        href="https://github.com"
        target="_blank"
      >
        view my projects
      </a>
      <a className={classes.Button} href="https://google.com" target="_blank">
        view my resume
      </a>
    </div>
  );
};

export default Buttons;
