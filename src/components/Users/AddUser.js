import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import ErrorModel from "../UI/ErrorModal.js";
import classes from "./AddUser.module.css";
import buttonStyle from "../UI/Button.module.css";
import { useState } from "react";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non - empty values)",
      });
      return;
    } else if (+enteredAge < 1) {
      // + to make it number (left the plus because enteredAge is a number but anything is entered into input is string )
      setError({
        title: "Invalid age",
        message: "Please enter a valid age ( > 0 )",
      });
      return;
    } else {
      // console.log(enteredUsername, enteredAge);
      props.onAddUser(enteredUsername, enteredAge);
      setEnteredUsername("");
      setEnteredAge("");
    }
  };

  const errorHandler = () => {
    setError(null)
  }

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <div>
      {error && (
        <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler} />
      )}
      <Card>
        <form className={classes.input} onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Your name..."
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (year)</label>
          <input
            id="age"
            type="number"
            placeholder="Your age..."
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button onClick={props.onConfirm} type="submit" className={buttonStyle.button}>
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
