import { useRef } from "react";
import { addUser } from "../../services";
import User from "../components/User";
import { useContext } from "react";
import { userContext } from "../context/user/userContext";

export const Users = () => {
 
  const newNameRef = useRef("");
  const [userList, loading, setUserList] = useContext(userContext);

  const handleSubmitRef = (event) => {
    event.preventDefault();
    // setUserList((prevUserList) => {
    //   return [...prevUserList, { name: newNameRef.current.value }];
    // });

    const newUser = {
      name: newNameRef.current.value,
      id: userList.length + 1,
      email: `${newNameRef.current.value.toLowerCase()}@example.com`,
      role: "Frontend Developer",
    };

    addUser(newUser)
      .then((addedUser) => {
        setUserList((prevUserList) => [...prevUserList, addedUser]);
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  return (
    <>
      <div>
        <h3>Add User</h3>
        <input type="text" placeholder="Enter new name" ref={newNameRef} />
        <button type="submit" onClick={handleSubmitRef}>
          {" "}
          Add Name
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            {userList.length === 0 ? (
              <h2>No User Found</h2>
            ) : (
              userList.map((user, index) => (
                <User key={index} id={user.id} name={user.name} />
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};
