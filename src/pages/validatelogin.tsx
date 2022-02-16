import { useEffect } from "react";
import { useAuth } from "../contexts/useAuth";
import { useRouter } from 'next/router';

export default function ValidateLogin() {
    const { signInWithLink } = useAuth();
    const { push } = useRouter();

    useEffect(() => {
        try {
            Promise.resolve(signInWithLink());
        } finally {
            push('/admin');
        }
    }, []);

    return (
        <div>
            Validating login
        </div>
    )
}