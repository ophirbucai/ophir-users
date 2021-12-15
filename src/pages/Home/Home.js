import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUsersFetch} from "../../hooks/useUsersFetch";
import { usePostsFetch } from "../../hooks/usePostsFetch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import UserCard from "../../components/UserCard/UserCard";
import './Home.scss';
import PostCard from "../../components/PostCard/PostCard";
import PostEdit from "../../components/PostEdit/PostEdit";

const Home = () => {
    const { users, isLoading, setUsers } = useUsersFetch();
    const { posts, isLoadingPosts, selectedUserId, setSelectedUserId, setPosts } = usePostsFetch()
    const [selectedPostIndex, setSelectedPostIndex] = useState(null);
    const postEditPanelRef = useRef();
    const { userId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setSelectedUserId(userId);
    }, [userId]);

    useEffect(() => {
        const clickOutside = (e) => {
            e.stopPropagation();
            if (e.target.contains(postEditPanelRef.current)) {
                setSelectedPostIndex(null);
            }
        }
        if (typeof selectedPostIndex == 'number') {
            document.getElementById('root').addEventListener('mousedown', clickOutside);
        }
        return () => document.getElementById('root').removeEventListener('mousedown', clickOutside)
    }, [selectedPostIndex])

    const removeUser = (id, e) => {
        e.stopPropagation();
        if (selectedUserId === id) {
            setSelectedUserId(null);
        }
        setUsers(users => users.filter(user => user.id !== id));
    }

    const removePost = (id, e) => {
        e.stopPropagation();
        setPosts(posts => posts.filter(user => user.id !== id));
    }

    const updatePost = (form) => {
        setPosts(prev => [...prev.slice(0, selectedPostIndex), form, ...prev.slice(selectedPostIndex + 1)]);
        setSelectedPostIndex(null);
    }

    return (
        <div className='Home'>
            {isLoading ? <div className="Home__message">Loading...</div> :
                !users.length ? <div className="Home__message">Sorry, no users found!</div> :
                <section className='Home__gallery'>
                    {users.map((user) => (
                        <div className="Home__gallery_item" key={user.id} onClick={() => navigate('/' + user.id)}>
                            <FontAwesomeIcon className="Home__gallery_item_remove"
                                             icon={faTimes}
                                             onClick={(e) => removeUser(user.id, e)}/>
                            <UserCard user={user} />
                        </div>
                    ))}
                </section>
            }
            {selectedUserId && (
                isLoadingPosts ? <div className="Home__message">Loading...</div> :
                !posts.length ? <div className="Home__message">No posts to show.</div> :
                <section className="Home__posts">
                    {posts.map((post, i) => (
                        <div className="Home__posts_item" key={post.id} onClick={() => setSelectedPostIndex(i)}>
                            <FontAwesomeIcon className="Home__posts_item_remove"
                                             icon={faTimes}
                                             onClick={(e) => removePost(post.id, e)}/>
                            <PostCard post={post} />
                        </div>
                    ))}
                </section>
            )}
            {typeof selectedPostIndex == 'number' && (
                <section className="Home__edit_panel" ref={postEditPanelRef}>
                    <div className="inside">
                        <PostEdit post={posts[selectedPostIndex]} submit={updatePost} cancel={() => setSelectedPostIndex(null)} />
                    </div>
                </section>
            )}
        </div>
    )
};

export default Home;