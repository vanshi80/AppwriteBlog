import { Container, PostForm } from "../components";
import React from 'react'

function AddPost() {
    return (
        <div className="py-8 bg-gray-100">
            <Container>
                <PostForm />
            </Container>
        </div>
    )
}

export default AddPost