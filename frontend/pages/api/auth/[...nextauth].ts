import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from "@/app/firebase";
//google sign in
import GoogleProvider from 'next-auth/providers/google';
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env

if (!GOOGLE_CLIENT_ID)
    throw new Error("Invalid env variable: GOOGLE_CLIENT_ID")
if (!GOOGLE_CLIENT_SECRET)
    throw new Error("Invalid env variable: GOOGLE_CLIENT_SECRET")

export const authOptions = {
    pages: {
        signIn: '/signin'
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials): Promise<any>{
                return await signInWithEmailAndPassword(auth, (credentials as any).email || '', (credentials as any).password || '')
                .then(userCredential => {
                    if (userCredential.user) {
                        return userCredential.user;
                    }
                    return null;//aqui va para el error supongo
                })
            }
        }),
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET
        })
    ],    
}
export default NextAuth(authOptions);