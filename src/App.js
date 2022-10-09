import { useState } from "react";
import AddUser from "./components/User/AddUser";
import ListUser from "./components/User/ListUser";

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prev) => {
      return [...prev, {name: uName, age: uAge, id:Math.random().toString()}]
    })
  }

  return (
    <div className="App">
      <AddUser adduser={addUserHandler}/>
      <ListUser bastak={userList} />
    </div>
  );
};

export default App;
