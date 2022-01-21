import { createContext, ReactNode, useContext, useState } from "react";
import { QuestionsParams, questions as tempQuestions } from '../generics/QuestionsOptions';
import { useToast } from '@chakra-ui/react';
import { api_faunadb } from '../services/api_faunadb';
import axios from 'axios';

interface QuestionsProviderProps {
    children: ReactNode;
}

interface QuestionsProviderData {
    questionOption: number;
    questions: QuestionsParams[];
    resultsReady: boolean;
    quizResults: tempResult | null;
    handleLoadQuestions: () => void;
    handleIncreaseQuestionNumber: (answerId?: string) => void;
    handleDecreaseQuestionNumber: () => void;
    handleCheckResults: () => void;
    handleCheckAnswers: () => void;
}

interface tempResult {
    description: string;
    profile: string;
    tip: string;
}

const QuestionsContext = createContext<QuestionsProviderData>({} as QuestionsProviderData);

export function QuestionsProvider({ children }: QuestionsProviderProps): JSX.Element {
    const [ questionOption, setQuestionOption ] = useState<number>(0);
    const [ questions, setQuestions ] = useState<QuestionsParams[]>([
        {
            id: 1,
            question: '',
            options: [
                { option: 'A', description: ''},
                { option: 'B', description: ''},
            ],
            answered: false,
            answer: null,
    }]);
    const [ resultsReady, setResultsReady ] = useState(false);
    const [ quizResults, setQuizResults ] = useState<tempResult | null>(null);

    const toast = useToast();

    const handleLoadQuestions = async () => {

        // UNCOMMENT THIS BLOCK OF CODE TO INTEGRATE WITH FAUNADB

        // try {
        //     const response = await api_faunadb('/retrieveQuestions', {
        //         method: 'GET',
        //     })

        //     setQuestions([...response.data.questions.questionsItems])
            
        // } catch (err) {
        //     return new Error('Could not load questions.')
        // }

        setQuestions(tempQuestions);
        setResultsReady(false);
        setQuestionOption(0);
        setQuizResults(null);
    }

    const handleIncreaseQuestionNumber = (answerId?: string) => {
        if (answerId) {
            questions[questionOption].answer = answerId;
            questions[questionOption].answered = true;
        }

        if (questionOption + 1 === questions.length) return;

        setTimeout(
            () => setQuestionOption(questionOption + 1), 
            500
        );
    }

    const handleDecreaseQuestionNumber = () => {
        if (questionOption - 1 >= 0) setQuestionOption(questionOption - 1);
    }

    const handleCheckResults = async () => {
        if (questions.find(question => !question.answered)) {
            return toast({
                title: 'Formulário incompleto',
                description: "É necessário responder todas as questões.",
                status: 'warning',
                duration: 3000,
                isClosable: true,
            })
        }

        setResultsReady(!resultsReady)

        const results = questions.map(question => {
            return {
                id: question.id,
                answer: question.answer,
                answered: question.answered
            }
        });

        const { data } = await axios.post('/api/calculateResults', {
            results         
        });

        setQuizResults(data.result);

        // ENABLE WHEN LIVE

        // await api_faunadb.post('/saveResults', {
        //     results           
        // });
    }

    const handleCheckAnswers = () => {
        questions.forEach(item => console.log(item.id, item.answer, item.answered))
    }

    return (
        <QuestionsContext.Provider value={{ 
            questionOption, 
            resultsReady,
            quizResults,
            questions,
            handleLoadQuestions, 
            handleIncreaseQuestionNumber, 
            handleDecreaseQuestionNumber, 
            handleCheckResults, 
            handleCheckAnswers 
        }}>
            { children }
        </QuestionsContext.Provider>
    )
}

export function useQuestionsContext() {
    return useContext(QuestionsContext);
}