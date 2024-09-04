import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-col md:flex-row p-4 gap-4">
            {/* Left Column (Title, Slug, Content) */}
            <div className="w-full md:w-2/3 space-y-4">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="w-full"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="w-full"
                    {...register("slug", { required: true })}
                />
                <RTE
                    label="Content :"
                    name="content"
                    control={control}
                    defaultValue={getValues("content")}
                />
            </div>

            {/* Right Column (Featured Image, Status, Submit Button) */}
            <div className="w-full md:w-1/3 flex flex-col space-y-4">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="w-full"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg w-full h-auto object-cover"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="w-full"
                    {...register("status", { required: true })}
                />
                <Button
                    type="submit"
                    className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg"
                >
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}
