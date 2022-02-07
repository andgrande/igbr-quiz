import { GetServerSideProps } from 'next';
import { Box, Button, Heading, Spinner, VStack } from "@chakra-ui/react";
import { useForm, SubmitHandler } from 'react-hook-form';

import {Input} from '../components/Form/Input';

import {useAuth} from '../contexts/useAuth';
import { useRouter } from 'next/router';

type Inputs = {
    email: string;
    password: string;
}

export default function SignIn() {
    const { register, handleSubmit, formState: {errors} } = useForm<Inputs>();
    const router = useRouter();
    const { signIn, isLoading } = useAuth();

    const onSubmit: SubmitHandler<Inputs> = data => {
        try {
            console.log('DATAAA', data)

            const promise = Promise.resolve(signIn());

            promise.then(v => router.push('/admin'));
            
        } catch (error) {
            throw new Error('error');
        }
    };

    // const handleCheck = () => console.log(authUser);

    // const handleSignOut = () => {
    //     console.log('rm')
    //     signOut()
    // }

    return (
        <Box
            as="form"
            flexDirection="column"
            gap="1rem"
            maxWidth="400px"
            width="80%"
            m="auto"
            onSubmit={handleSubmit(onSubmit)}
        >
            <VStack spacing="1rem">
                <Heading>Sign In</Heading>
                <Input
                    height="3rem"
                    type="email"
                    label="E-mail"
                    {...register('email'
                    // , { required: true }
                    )}
                    error={errors.email} 
                />
                <Input
                    height="3rem"
                    type="password"
                    label="Password"
                    {...register('password'
                    // , { required: true }
                    )}
                    error={errors.password} 
                />

                <Button height="3rem" width="100%" color="teal.500" colorScheme="whiteAlpha" borderWidth="1px" type="submit">{
                    isLoading ? <Spinner /> : 'Login'
                }</Button>
            </VStack>

            {/* <Button height="3rem" width="100%" color="teal.500" colorScheme="whiteAlpha" borderWidth="1px" type="button" onClick={() => handleCheck()}>Check</Button>
            <Button height="3rem" width="100%" color="teal.500" colorScheme="whiteAlpha" borderWidth="1px" type="button" onClick={() => handleSignOut()}>Sign Out</Button> */}
            
        </Box>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    // Check COOKIES HERE

    return {
        props: {}
    }
}