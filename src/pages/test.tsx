import { useState } from "react";

interface QuestionsParams {
    id: number;
    language: {
        idiom: string,
        question: string;
        options: {
            option: string;
            description: string;
        }[];
    }[],
    answered: boolean;
    answer: string | null;
}

export default function Test() {
    const languages: string[] = ['pt', 'en', 'fr'];
    const [lang, setLang] = useState<string>('pt');

    const updateLanguage = (language: string) : void => {
        setLang(language);
        console.log(lang)
    }
    
    const questions: QuestionsParams[] = [
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
        },]

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "space-between",
            alignSelf: "center",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            <h1>Hello</h1>
            <br></br>
            {languages.map(language => (
                <button 
                    key={language}
                    type="button" 
                    value={language}
                    style={
                        lang == language ? { fontWeight: "bold"} : {}
                    }
                    onClick={() => updateLanguage(language)}
                >
                    {language.toUpperCase()}
                </button>
            ))}
            <div style={{

            }} >
                <h1 style={{fontWeight: "bolder"}}>Questions</h1>
                {questions.map(question => (
                    <div key={question.id}>

                        {question.language.map(item => {
                            if (item.idiom == lang) return (
                                <>
                                    <label style={{ fontWeight: "lighter"}}>{item.question}</label>
                                    <select name="question">
                                        {item.options.map(option =>
                                            <option key={option.option} value={option.description}>{option.description}</option>
                                        )}
                                    </select>
                                </>
                            )})}

                        {/* <label style={{ fontWeight: "lighter"}}>{question.language.en.question}</label>
                        <select name="question">
                            {question.language.en.options.map(option =>
                                <option key={option.option} value={option.description}>{option.description}</option>
                            )}
                        </select> */}


                    </div>
                ))}
            </div>
        </div>
    )
}