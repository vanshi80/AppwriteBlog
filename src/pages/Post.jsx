import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug)
                .then((fetchedPost) => {
                    if (fetchedPost) {
                        setPost(fetchedPost);
                    } else {
                        navigate("/");
                    }
                    setLoading(false);
                })
                .catch(() => {
                    navigate("/");
                    setLoading(false);
                });
        } else {
            navigate("/");
            setLoading(false);
        }
    }, [slug, navigate]);

    const deletePost = () => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            appwriteService.deletePost(post.$id)
                .then((status) => {
                    if (status) {
                        appwriteService.deleteFile(post.featuredImage);
                        navigate("/");
                    }
                })
                .catch((error) => {
                    console.error("Failed to delete post:", error);
                });
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-16 w-16"></div>
            </div>
        );
    }

    return post ? (
        <Container className="py-8 bg-gray-100 min-h-screen">
            <div className="w-full flex flex-col md:flex-row justify-center mb-8 relative border rounded-xl bg-white shadow-lg p-4 py-4">
                <img
                    src={appwriteService.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className="rounded-xl max-w-full h-auto object-cover md:w-1/2"
                />

                {isAuthor && (
                    <div className="absolute right-6 top-6 flex space-x-3">
                        <Link to={`/edit-post/${post.$id}`}>
                            <Button
                                bgColor="bg-green-500 hover:bg-green-600"
                                textColor="text-white"
                                className="px-4 py-2 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
                            >
                                Edit
                            </Button>
                        </Link>
                        <Button
                            bgColor="bg-red-500 hover:bg-red-600"
                            textColor="text-white"
                            className="px-4 py-2 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
                            onClick={deletePost}
                        >
                            Delete
                        </Button>
                    </div>
                )}
            </div>

            <div className="w-full mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
                <div className="text-gray-600 mb-4">
                    By {post.userId === userData.$id ? userData.name : "Unknown Author"}
                </div>
            </div>

            <div className="prose max-w-none">
                {parse(post.content)}
            </div>
        </Container>
    ) : null;
}
