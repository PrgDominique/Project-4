import Card from "../UI/Card";
import style from './ListUser.module.css'

const ListUserGet = (props) => {
  return (
    <Card className={style.users}>
    <ul>
      {props.bastak.map((prev) => (
        <li key={prev.id}>
          Hero: {prev.name} Level: {prev.age}
        </li>
      ))}
      {props.basta.map((prev) => (
        <li key={prev.id}>
          Hero: {prev.name} Level: {prev.age}
        </li>
      ))}
      </ul>
      </Card>
  );
};

export default ListUserGet;
