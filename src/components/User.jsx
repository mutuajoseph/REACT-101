import { deleteUser } from "../../services";

const User = (props) => {
  const handleClick = () => {
    alert(`Hello ${props.name}`);
  };

  const handDelete = () => {
    deleteUser(props.id)
      .then(() => {
        alert(`User with id ${props.id} deleted successfully!`);
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        alert(`Failed to delete user with id ${props.id}. Please try again.`);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "200px",
        margin: "10px auto",
      }}
    >
      <h1 onClick={handleClick}>{props.name}</h1>
      <button onClick={handDelete}>Delete</button>
    </div>
  );
};

export default User;
