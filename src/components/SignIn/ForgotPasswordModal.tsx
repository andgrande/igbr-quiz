import {
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Spinner,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/useAuth';

interface ModalStateProps {
    isOpen: boolean;
    onClose: () => void;
}

const ForgotPasswordModal = ({ isOpen, onClose }: ModalStateProps) => {
    const { sendSignInLink } = useAuth();
    const [ loading, setLoading ] = useState<boolean>(false);
    const { register: registerModal, handleSubmit: handleSubmitModal, formState: { errors: errorsModal } } = useForm();

    const handleModalSubmit = (data: any) => {
        try {
            setLoading(true);
            Promise.resolve(sendSignInLink(data))
            
        } finally {
            onClose();
            setLoading(false);
        }
    }
9
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
                as="form"
                key={2}
                onSubmit={handleSubmitModal(handleModalSubmit)}
                m="auto 1rem"
            >
                <ModalHeader>Login with e-mail</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Submit a registered e-mail to receive access link

                    <Input
                        height="3rem"
                        width="100%"
                        mt="1rem"
                        type="email"
                        label="E-mail"
                        border="1px"
                        placeholder='E-mail'
                        // value={email}
                        { ...registerModal('email', { required: true })}
                        error={errorsModal.email}
                        // onChange={(e) => setEmail(e.target.value)}
                    />

                </ModalBody>

                <ModalFooter>
                    <Button 
                        type='submit' 
                        width="100%" 
                        height="3rem" 
                        colorScheme='teal' 
                        // onClick={() => handleModalSubmit()} 
                    >
                        {loading ? <Spinner /> : 'Send'}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export { ForgotPasswordModal };
