import { useState, useEffect } from "react";
import axios from "axios";

export const useUsersFetch = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        setIsLoading(true);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        setIsLoading(false);
        setUsers(response.data);
    }

    return { users, isLoading, setUsers };
};
