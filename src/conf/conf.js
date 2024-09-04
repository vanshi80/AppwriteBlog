// explicitly converting the envt variables into strings help in avoiding any inconsistencies which may arise when the envt variables
//  are not in string nd holding them in a single obj helps in ease of use of these envt variables

const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteTinyMceApiKey: String(import.meta.env.VITE_APPWRITE_TINYMCE_API_KEY)
}

export default conf;