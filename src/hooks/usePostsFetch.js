import { useState, useEffect } from "react";
import axios from "axios";

export const usePostsFetch = () => {
    const [posts, setPosts] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [isLoadingPosts, setIsLoadingPosts] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, [selectedUserId]);

    async function fetchPosts() {
        if (!selectedUserId) {
            setPosts([]);
            return;
        }
        setIsLoadingPosts(true);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`);
        setIsLoadingPosts(false);
        setPosts(response.data);
    }

    return { posts, setPosts, selectedUserId, setSelectedUserId, isLoadingPosts };
};
