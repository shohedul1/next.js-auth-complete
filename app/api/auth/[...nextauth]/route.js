
import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";


const handle = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Username", type: "text", placeholder: "jsmith" },
            },
            authorize(credentials, request) {
                if (credentials.email) {
                    return {
                        email:credentials.email
                    }
                }
                return null;
            }
        })
    ],
    callbacks:{
        session({session,user}){
            return session
        }
    }

})

export {handle as GET, handle as POST}