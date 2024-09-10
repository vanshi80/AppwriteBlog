import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full max-w-xs bg-white rounded-xl p-3 shadow-md hover:shadow-lg transition-shadow'>
                {/* Image section */}
                <div className='w-full h-40 mb-2'>
                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title}
                        className='w-full h-full object-cover rounded-xl'
                    />
                </div>

                {/* Title section */}
                <h2 className='text-lg font-bold text-gray-800 truncate'>
                    {title}
                </h2>
            </div>
        </Link>
    );
}

export default PostCard;
