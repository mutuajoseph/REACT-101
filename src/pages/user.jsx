import { useRef, useState, useEffect } from "react";
import { fetchUserData, addUser } from "../../services";
import User from "../components/User";

export const Users = () => {
 const [userList, setUserList] = useState([]);
 const [loading, setLoading] = useState(false);
 const newNameRef = useRef("");

 useEffect(() => {
    // fetch user data
    const fetchUsers = async () => {
        setLoading(true);
        const users = await fetchUserData();
        setUserList(users);
        setLoading(false);
      };
    fetchUsers();
  }, []);


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
