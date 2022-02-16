import { createContext, useContext, ReactNode, useState } from 'react';
import { ToastId, useToast } from '@chakra-ui/react';
import { api_fireabase } from '../services/api_faunadb';
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import FirebaseAuth from '../services/firebase_auth';

interface AuthProviderProps {
    children: ReactNode;
}
interface SignInData {
    email: string;
    password?: string;
}
interface AuthUserProps {
    uid: string;
    email: string | null;
    token?: string;
}

interface AuthUserContextData {
    signIn: ({ email, password }: SignInData) => Promise<ToastId | void>;
    sendSignInLink: ({ email }: SignInData) => void;
    signInWithLink: ({ email }?: SignInData) => void;
    signOut: () => void;
    authUser: AuthUserProps | undefined;
    isLoading: boolean;
}

// const e_mail = 'andgrande@hotmail.com';
// const password = 'Pass&1234';

const AuthUserContext = createContext<AuthUserContextData>({} as AuthUserContextData);

export function AuthUserProvider({ children }: AuthProviderProps): JSX.Element {
    const [ authUser, setAuthUser ] = useState<AuthUserProps | undefined>(undefined);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    
    const toast = useToast();

    const signIn = async ({ email, password }: SignInData) => {
        setIsLoading(true);
        console.log("Pass")
        try {
            const { data } = await api_fireabase.post('firebaseSignInWithEmailAndPassword', { e_mail: email, password });
            setAuthUser({ uid: data.credential.uid, email: data.credential.email });
        } 
        catch (error) {
            return toast({
                title: 'Falha ao logar',
                description: 'Usuário ou senha inválidos',
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
        finally {
            setIsLoading(false);
        }
    }

    const sendSignInLink = async ({ email }: SignInData) => {
        try {
            await api_fireabase.post('firebaseSendSignInLinkToEmail', { email });

        } finally {
            window.localStorage.setItem('signInEmail', email)

            return toast({
                title: 'Solicitação recebida',
                description: 'Um e-mail de acesso será enviado a sua caixa caso tenha cadastro.',
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
        }
        
    }

    const signInWithLink = async () => {
        const email = window.localStorage.getItem('signInEmail') || `andgrande@hotmail.com`;

        try {
            setIsLoading(true);
            const { data } = await api_fireabase.post('firebaseSignInWithLink', { email });

            console.log(data)

            setAuthUser({ uid: data.result.uid, email: data.result.email });
        } catch (error) {
            console.log(error)  
        } finally {
            setIsLoading(false);
        }
    }

    const signOut = async () => {
        await api_fireabase.post('firebaseSignOut');
        setAuthUser(undefined);
    }

    return (
        <AuthUserContext.Provider value={{
            signIn, sendSignInLink, signInWithLink, signOut, authUser, isLoading
        }}>
            {children}
        </AuthUserContext.Provider>
    )
}
export const useAuth = () => useContext(AuthUserContext);