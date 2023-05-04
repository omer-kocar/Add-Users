import React from "react";
import classes from "./errorModal.module.css";
import Card from "./Card";
import Button from "./Button";

function ErrorModal(props) {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm} >
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
