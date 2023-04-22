export interface QuestionsParams {
    id: number;
    language: {
        idiom: string;
        question: string;
        options: {
            option: string;
            description: string;
        }[];
    }[],
    answered: boolean;
    answer: string | null;
}

export const questions: QuestionsParams[] = [
    {
        id: 1,
        language: [{
            idiom: 'en',
            question: 'Have you ever advertised your classes?',
            options: [
                { option: 'A', description: 'Yes'},
                { option: 'B', description: 'No'},
            ],
        },
        {
            idiom: 'fr',
            question: 'Avez-vous déjà annoncé vos cours sur internet ?',
            options: [
                { option: 'A', description: 'Oui'},
                { option: 'B', description: 'Non'},
            ],
        },
        {
            idiom: 'pt',
            question: 'Você já anunciou suas aulas na internet?',
            options: [
                { option: 'A', description: 'Sim'},
                { option: 'B', description: 'Não'},
            ],
        }],
        answered: false,
        answer: null,
    },
    { 
        id: 2,
        language: [{
            idiom: 'en',
            question: 'Where?',
            options: [
                { option: 'A', description: 'On my own profile'},
                { option: 'B', description: 'Facebook groups'},
                { option: 'C', description: 'Websites'},
                { option: 'D', description: "Didn't do it"},
            ],
        },
        {
            idiom: 'fr',
            question: 'Oú?',
            options: [
                { option: 'A', description: 'Sur mon profile'},
                { option: 'B', description: 'Dans les groupes Facebook'},
                { option: 'C', description: 'Sur les sites web'},
                { option: 'D', description: "Je n'ai pas annoncé"},
            ],
        },
        {
            idiom: 'pt',
            question: 'Onde?',
            options: [
                { option: 'A', description: 'No meu perfil mesmo'},
                { option: 'B', description: 'Em grupos de Facebook'},
                { option: 'C', description: 'Em sites'},
                { option: 'D', description: 'Não anunciei'},
            ],
        }],
        answered: false,
        answer: null,
    },
    { 
        id: 3,
        language: [{
            idiom: 'en',
            question: 'Have you ever done a sales launch?',
            options: [
                { option: 'A', description: 'Yes'},
                { option: 'B', description: 'No'},
            ],
        },
        {
            idiom: 'fr',
            question: 'Avez-vous déjà fait un lancement commercial?',
            options: [
                { option: 'A', description: 'Oui'},
                { option: 'B', description: 'Non'},
            ],
        },
        {
            idiom: 'pt',
            question: 'Você já fez algum lançamento?',
            options: [
                { option: 'A', description: 'Sim'},
                { option: 'B', description: 'Não'},
            ],
        }],
        answered: false,
        answer: null,
    },
    { 
        id: 4,
        language: [{
            idiom: 'en',
            question: 'Do you use a service provision contract?',
            options: [
                { option: 'A', description: 'Yes'},
                { option: 'B', description: 'No'},
            ],
        },
        {
            idiom: 'fr',
            question: 'Utilisez-vous un contrat de prestation de services?',
            options: [
                { option: 'A', description: 'Oui'},
                { option: 'B', description: 'Non'},
            ],
        },
        {
            idiom: 'pt',
            question: 'Você usa contrato de prestação de serviços?',
            options: [
                { option: 'A', description: 'Sim'},
                { option: 'B', description: 'Não'},
            ],
        }],
        answered: false,
        answer: null,
    },
    { 
        id: 5,
        language: [{
            idiom: 'en',
            question: 'Student requested free trial class. And now?',
            options: [
                { option: 'A', description: 'I give without problems'},
                { option: 'B', description: "I don't offer free classes"},
            ],
        },
        {
            idiom: 'fr',
            question: "L'élève a demandé un cours d'essai gratuit. Et maintenant?",
            options: [
                { option: 'A', description: 'Je donne sans problème'},
                { option: 'B', description: 'Je ne propose pas de cours gratuits'},
            ],
        },
        {
            idiom: 'pt',
            question: 'Aluno pediu aula experimental gratuita. E agora?',
            options: [
                { option: 'A', description: 'Dou sem problemas'},
                { option: 'B', description: 'Não ofereço aulas gratuitas'},
            ],
        }],
        answered: false,
        answer: null,
    },
    { 
        id: 6,
        language: [{
            idiom: 'en',
            question: 'Student will cancel the contract with you. And now?',
            options: [
                { option: 'A', description: 'DESPAIR! What did I do wrong?!'},
                { option: 'B', description: 'Low customer turnover is normal in a business'},
            ],
        },
        {
            idiom: 'fr',
            question: "L'étudiant annulera le contrat avec vous. Et maintenant?",
            options: [
                { option: 'A', description: "DÉSESPOIR! Qu'ai-je fait de mal?!"},
                { option: 'B', description: 'Un faible taux de rotation des clients est normal dans une entreprise'},
            ],
        },
        {
            idiom: 'pt',
            question: 'Aluno vai cancelar o contrato com você. E agora?',
            options: [
                { option: 'A', description: 'D-E-S-E-S-P-E-R-O! O que eu fiz de errado?!' },
                { option: 'B', description: 'Pequena rotatividade de clientes é normal em um negócio.' },
            ],
        }],
        answered: false,
        answer: null,
    },
];