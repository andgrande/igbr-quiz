import { useEffect } from "react";
import { useAuth } from "../contexts/useAuth"

export default function ValidateLogin() {
    const { signInWithLink } = useAuth();

    useEffect(() => {
        signInWithLink();
    }, []);

    return (
        <div>
            Validating login
        </div>
    )
}