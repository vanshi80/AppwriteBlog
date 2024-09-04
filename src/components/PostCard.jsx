import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'


// This is the postcard which is being displayed on the home page where all other posts are displayed and upon clicking on them 
// the detailed blog post is being rendered with all other particular information
function PostCard({ $id, title, featuredImage }) {

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                        className='rounded-xl' />

                </div>
                <h2
                    className='text-xl font-bold'
                >{title}</h2>
            </div>
        </Link>
    )
}


export default PostCard