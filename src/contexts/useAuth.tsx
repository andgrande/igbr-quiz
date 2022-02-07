import { createContext, useContext, ReactNode, useState } from 'react';
import { api_fireabase } from '../services/api_faunadb';

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthUserProps {
    uid: string;
    email: string;
    token?: string;
}

interface AuthUserContextData {
    signIn: () => void;
    signOut: () => void;
    authUser: AuthUserProps | undefined;
    isLoading: boolean;
}

const e_mail = 'andgrande@hotmail.com';
const password = 'Pass&1234';

const AuthUserContext = createContext<AuthUserContextData>({} as AuthUserContextData);

export function AuthUserProvider({ children }: AuthProviderProps): JSX.Element {
    const [ authUser, setAuthUser ] = useState<AuthUserProps | undefined>(undefined);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    

    const signIn = async () => {
        setIsLoading(true);
        try {
            const { data } = await api_fireabase.post('firebaseSignInWithEmailAndPassword', { e_mail, password });
            setAuthUser({ uid: data.credential.uid, email: data.credential.email });
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
            signIn, signOut, authUser, isLoading
        }}>
            {children}
        </AuthUserContext.Provider>
    )
}
export const useAuth = () => useContext(AuthUserContext);