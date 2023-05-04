import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css"

function UsersList(props) {
  return (
    <Card  >
      <ul className={classes.users} >
        {props.users.map((user) => (
          <li className={classes.li} key={user.id}>
            {user.name} {user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
