
import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";



const handle = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Username", type: "text", placeholder: "jsmith" },
            },
            authorize(credentials, request) { 
                if (!credentials.email) {      
                    throw new Error("Email chiaye hi chaiye")
                }
                if (credentials.email) {    
                    return {
                        email:credentials.email
                    }
                }
                return null;
            }
        }),
        GitHubProvider({
            clientId:'5c89f8d68f80c5e4f863',
            clientSecret:'a85b68ac05f51474c39cb69cd123d31e1814281d'
          })
    ],
    callbacks:{
        session({session,user}){
            return session
        }
    }

})

export {handle as GET, handle as POST}