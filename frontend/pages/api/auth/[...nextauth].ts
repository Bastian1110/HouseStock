import NextAuth from 'next-auth'
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from "@/app/firebase";
//providers credentials
import CredentialsProvider from 'next-auth/providers/credentials';
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
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],    
}
export default NextAuth(authOptions);
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };