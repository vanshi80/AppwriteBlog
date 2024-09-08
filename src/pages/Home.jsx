import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard, Loader } from '../components';
import { useSelector } from 'react-redux';

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetching the user's authentication status from the Redux store
    const status = useSelector((state) => state.auth.status);

    useEffect(() => {
        // Only fetch posts if the user is authenticated
        if (status) {
            appwriteService.getPosts().then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
                setLoading(false);
            }).catch(() => {
                setLoading(false);
            });
        } else {
            setLoading(false); // Set loading to false if the user is not authenticated
        }
    }, [status]); // Depend on 'status' so it only triggers when the authentication status changes

    // If the user is not logged in, prompt them to login
    if (!status) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-gray-100">
                <Container>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Login to read posts
                    </h1>
                </Container>
            </div>
        );
    }

    // If the posts are still loading, show a loader
    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-gray-100">
                <Loader />
            </div>
        );
    }

    // Render the posts if they are available, or show a message if no posts are present
    return (
        <div className='w-full py-8 bg-gray-100'>
            <Container>
                <div className='flex flex-wrap -mx-4'>
                    {posts.length > 0 ? posts.map((post) => (
                        <div
                            key={post.$id}
                            className='p-4 w-full sm:w-full md:w-1/2 lg:w-1/3'>
                            <PostCard {...post} />
                        </div>
                    )) : (
                        <div className="w-full text-center py-16">
                            <h2 className="text-2xl font-semibold text-gray-700">
                                No posts available.
                            </h2>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default Home;
