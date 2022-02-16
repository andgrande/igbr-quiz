import { useEffect } from "react";
import { useAuth } from "../contexts/useAuth";
import { useRouter } from 'next/router';

export default function ValidateLogin() {
    const { signInWithLink } = useAuth();
    const { push } = useRouter();

    useEffect(() => {
        try {
            Promise.resolve(signInWithLink());
        } catch {
            push('/signin');
        } 
        finally {
            push('/admin');
        }
    }, []);

    return (
        <div>
        </div>
    )
}