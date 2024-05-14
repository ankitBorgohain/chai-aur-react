import conf from "../conf/conf";
import { Client, ID,  Databases, Storage, Query } from "appwrite";

export class Service{

    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId);
            this.databases = new Databases(this.client)
            this.bucket = new Storage(this.client)

    }


    // database services
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
        } catch (error) {
            return await this.databases.createDocument(
                                        conf.appwriteDBId, 
                                        conf.appwriteCollectionId, 
                                        slug,
                                        {
                                            title, 
                                            content, 
                                            featuredImage, 
                                            status, 
                                            userId
            })
            throw("Appwrite error :: create post :: failed :: 101 ")
        }
    }

    async updatePost( slug,{ title, content, featuredImage, status} ){
        try {
            return await this.databases.updateDocument(conf.appwriteDBId,
                                                       conf.appwriteCollectionId,
                                                       slug,
                                                       {    
                                                            title,
                                                            content,
                                                            featuredImage,
                                                            status,
                                                       }                 
            )
        } catch (error) {
            console.log("Appwrite service :: update post :: error ", error)
        }   
    }

    async getPost ( slug ){
        try {
            return await this.databases.getDocument(
                                                conf.appwriteDBId,
                                                conf.appwriteCollectionId,
                                                slug
                                                )
        } catch (error) {
            console.log("Appwrite service :: Fetch post :: Failed ", error)
            return false;
        }
    }

    async getPosts (queries= [Query.equal("status", "active")]){
        try {
               return await this.databases.listDocuments(
                    conf.appwriteDBId,
                    conf.appwriteCollectionId,
                    queries,
                    
               )
        } catch (error) {
            console.log("Appwrite service :: Fetch All posts :: Failed ", error)
            return false;
        }

    }
    async deletePost (slug){
        try {
                 await this.databases.deleteDocument(conf.appwriteDBId, conf.appwriteCollectionId, slug)
                 return true;
            
        } catch (error) {
            console.log("Appwrite service :: delete post :: error ", error)
            return false;
        }
    }

    //file | img | related services
    async uploadFile (file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file 
            )
            
        } catch (error) {
            console.log("Appwrite service :: create file :: error ", error)
            return false;
        }
    }

    async deleteFile (fileId){
        try {
                await this.bucket.deleteFile(
                    conf.appwriteBucketId,
                    fileId
                )
                return true;
            
        } catch (error) {
            console.log("Appwrite service :: delete file :: error ", error)
              return false;
        }
    }

    async getFilePreview (fileId){
       return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
       )
    }
} 

const service = new Service();
export default service