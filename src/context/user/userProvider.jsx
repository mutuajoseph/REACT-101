import { useState, useEffect } from "react";
import { fetchUserData } from "../../../services";
import { userContext } from "./userContext";

export const UserProvider = ({ children }) => {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);

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

    return (
        <userContext.Provider value={[userList, loading, setUserList, setLoading]}>
            {children}
        </userContext.Provider>
    )
}