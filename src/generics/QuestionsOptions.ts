export interface QuestionsParams {
    id: number;
    question: string;
    options: {
        option: string;
        description: string;
    }[];
    answered: boolean;
    answer: string | null;
}

export const questions: QuestionsParams[] = [
    {
        id: 1,
        question: 'Você já anunciou suas aulas na internet?',
        options: [
            { option: 'A', description: 'Sim'},
            { option: 'B', description: 'Não'},
        ],
        answered: false,
        answer: null,
    },
    { 
        id: 2,
        question: 'Onde?',
        options: [
            { option: 'A', description: 'No meu perfil mesmo'},
            { option: 'B', description: 'Em grupos de Facebook'},
            { option: 'C', description: 'Em sites'},
            { option: 'D', description: 'Não anunciei'},
        ],
        answered: false,
        answer: null,
    },
    { 
        id: 3,
        question: 'Você já fez algum lançamento?',
        options: [
            { option: 'A', description: 'Sim'},
            { option: 'B', description: 'Não'},
        ],
        answered: false,
        answer: null,
    },
    { 
        id: 4,
        question: 'Você usa contrato de prestação de serviços?',
        options: [
            { option: 'A', description: 'Sim'},
            { option: 'B', description: 'Não'},
        ],
        answered: false,
        answer: null,
    },
    { 
        id: 5,
        question: 'Aluno pediu aula experimental gratuita. E agora?',
        options: [
            { option: 'A', description: 'Dou sem problemas.'},
            { option: 'B', description: 'Não ofereço aulas gratuitas.'},
        ],
        answered: false,
        answer: null,
    },
    { 
        id: 6,
        question: 'Aluno vai cancelar o contrato com você. E agora?',
        options: [
            { option: 'A', description: 'D-E-S-E-S-P-E-R-O! O que eu fiz de errado?!' },
            { option: 'B', description: 'Pequena rotatividade de clientes é normal em um negócio.' },
        ],
        answered: false,
        answer: null,
    },
];