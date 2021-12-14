import React, { useState } from 'react';
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

    const updatePost = (post) => {
        console.log(post);
    }

    return (
        <div className='Home'>
            {isLoading ? <div className="Home__message">Loading...</div> :
                !users.length ? <div className="Home__message">Sorry, no users found!</div> :
                <section className='Home__gallery'>
                    {users.map((user) => (
                        <div className="Home__gallery_item" key={user.id} onClick={() => setSelectedUserId(user.id)}>
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
            {selectedPostIndex && (
                <section className="Home__edit_panel">
                    <div className="inside">
                        <PostEdit post={posts[selectedPostIndex]} />
                    </div>
                </section>
            )}

            {/*<div className="mapouter">*/}
            {/*    <div className="gmap_canvas">*/}
            {/*        <iframe width="600" height="500" id="gmap_canvas"*/}
            {/*                src="https://maps.google.com/maps?q=lat:24.6463,lng:-168.8889&t=&z=13&ie=UTF8&iwloc=&output=embed"*/}
            {/*                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    )
};

export default Home;