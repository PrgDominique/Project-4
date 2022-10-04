const AddUser = (props) => {

    
  return (
    <form onSubmit={}>
      <label htmlFor="username">Username:</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age (years):</label>
      <input id="age" type="number" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
