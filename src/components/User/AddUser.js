import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import style from "./AddUser.module.css";

const AddUser = (props) => {
  const [enterUsername, setEnterUsername] = useState("");
  const [enterAge, setEnterAge] = useState("");
  const [error, SetError] = useState()

  const addUserHandler = (e) => {
    e.preventDefault();
    if(enterUsername.trim().length === 0 || enterAge.trim().length === 0) {
     SetError({
      title: 'invalid input',
      message: 'please enter a valid hero and level (non-empty values).'
     })
      return
    }
    if(+enterAge < 1 || enterAge > 30) {
      SetError({
        title: 'invalid input',
        message: 'Your reached the max level the max level is 30 only.'
       })
      return
    }
    props.adduser(enterUsername, enterAge)
    setEnterUsername("");
    setEnterAge("");
  };

  const usernameChangeHandler = (e) => {
    setEnterUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnterAge(e.target.value);
  };

  const errorHandler = () => {
    SetError(null)
  }

  return (
    <>
   {error && <ErrorModal title={error.title} message={error.message} errHandler={errorHandler}/>}
    <Card className={style.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Hero:</label>
        <input
          id="username"
          type="text"
          value={enterUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Level (lvl):</label>
        <input
          id="age"
          type="number"
          value={enterAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </>
  );
};

export default AddUser;
