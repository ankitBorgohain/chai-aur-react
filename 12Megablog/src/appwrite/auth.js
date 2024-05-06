import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()
    account; 

    constructor (){
        this.client
                .setEndpoint(conf.appwriteUrl)
                .setProjectt(conf.appwriteProjectId);
                this.account = new Account (this.client)
    
    }

    async createAccount ({email, password, name}) {
        try {
           const userAccount = await this.account.create(ID.unique(), email, password, name)

           if(userAccount){
            //call another method
            //log in method on creation
            return this.login({email, password})
            return userAccount;
           }else{
            return "failed to create"
           }
        } catch (error) {
            throw(error);
            
        }
    }

    async login ({email, password}){

        try {
            return await this.account.createEmailSession(email, password)

        } catch (error) {
            throw(error)
        }
        
    }
    async getCurrentUser (){
        try{    
            return await this.account.get()

        }catch(error){
            throw("Appwrite service :: getCurrentUser :: error", error );
        }
        return null;  
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw("Appwrite service :: logout :: error", error );
        }
    }
     
}


const authService = new AuthService();
export default AuthService;