import { useState } from "react";
import ListUserGet from "./ListUserGet";

const UserList = [
  { id: 1, name: "Slark", age: 13 },
  { id: 2, name: "Doom", age: 12 },
  { id: 3, name: "Drow Ranger", age: 14 },
];
const ListUser = (props) => {
  const [getuserList, setgetUserList] = useState(UserList)

const ignoremenow = () => {
  setgetUserList()
}
  return (
    <div>
    <ListUserGet basta={getuserList} bastak={props.bastak} ignoreme={ignoremenow}/>
    </div>
  );
};

export default ListUser;

