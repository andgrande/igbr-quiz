import { GetServerSideProps } from 'next';
import { Box, Button, Heading, Spinner, useDisclosure, VStack } from "@chakra-ui/react";
import { useForm, SubmitHandler } from 'react-hook-form';

import { Input } from '../components/Form/Input';

import { useAuth } from '../contexts/useAuth';
import { useRouter } from 'next/router';
import { ForgotPasswordModal } from '../components/SignIn/ForgotPasswordModal';

import { InputsData } from '../generics/dtos/generalDTOs';

export default function SignIn() {
    const { register, handleSubmit, formState: { errors } } = useForm<InputsData>();
    const router = useRouter();
    const { signIn, isLoading } = useAuth();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleOpenModal = () => onOpen();

    const onSubmit: SubmitHandler<InputsData> = data => {
        try {
            console.log('DATAAA', data)

            Promise.resolve(signIn(data));
            // promise.then(v => router.push('/admin'));
        } finally {
            router.push('/admin')
        }
    };

    return (
        <Box
            as="form"
            key={1}
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
                    {...register('email', { required: true }
                    )}
                    error={errors.email} 
                />
                <Input
                    height="3rem"
                    type="password"
                    label="Password"
                    {...register('password', { required: true }
                    )}
                    error={errors.password} 
                />

                <Button height="3rem" width="100%" color="teal.500" colorScheme="whiteAlpha" borderWidth="1px" type="submit">
                    {isLoading ? <Spinner /> : 'Login'}
                </Button>

                <Button 
                    onClick={() => handleOpenModal()}
                    backgroundColor="transparent"
                    _hover={{
                        backgroundColor: "transparent",
                        // fontSize: "1.02rem",
                        textColor: "purple",
                        textDecoration: "underline"
                    }}
                    _focus={{
                        backgroundColor: "transparent"
                    }}
                >
                    Login with e-mail only
                </Button>
                <ForgotPasswordModal isOpen={isOpen} onClose={onClose} />
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