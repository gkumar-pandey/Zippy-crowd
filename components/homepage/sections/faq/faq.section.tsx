import { useState } from "react"

import {
    QuestionOne,
    QuestionTwo,
    QuestionThree,
    QuestionFour,
    QuestionFive,
    QuestionSix,
    QuestionSeven,
} from "../../components/faq/question.component"
import {
    AnswerFive,
    AnswerFour,
    AnswerOne,
    AnswerSeven,
    AnswerSix,
    AnswerThree,
    AnswerTwo,
} from "../../components/faq/ans.component"
import { Box, Text } from "../../components"
import { Container } from "../../components/container/container.component"
import Link from "next/link"

const faqData = [
    {
        id: 1,
        question: <QuestionOne />,
        answer: <AnswerOne />,
    },
    {
        id: 2,
        question: <QuestionTwo />,
        answer: <AnswerTwo />,
    },
    {
        id: 3,
        question: <QuestionThree />,
        answer: <AnswerThree />,
    },
    {
        id: 4,
        question: <QuestionFour />,
        answer: <AnswerFour />,
    },
    {
        id: 5,
        question: <QuestionFive />,
        answer: <AnswerFive />,
    },
    {
        id: 6,
        question: <QuestionSix />,
        answer: <AnswerSix />,
    },
    {
        id: 7,
        question: <QuestionSeven />,
        answer: <AnswerSeven />,
    },
]

export const FAQSection = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const onClickHandler = (idx: any) => {
        setActiveQuestion(idx == activeQuestion ? null : idx)
    }
    return (
        <section className="py-[3rem]" id="faq-section">
            <Container>
                <div>
                    <Text variant="title">frequently asked questions</Text>
                    <div className="pb-[2rem] md:flex-wrap sm:flex-wrap relative border-b-4 border-[#E188AF]">
                        {faqData.map(({ question, answer, id }, index) => (
                            <div
                                className="flex justify-between md:flex-wrap sm:flex-wrap"
                                key={index}
                            >
                                <Box variant="question" onClick={() => onClickHandler(index)} idx={index} activeQuestion={activeQuestion}  >
                                    <div >
                                        {question}
                                    </div>
                                </Box>
                                <div
                                    className={`${activeQuestion === index
                                        ? "block"
                                        : "hidden"
                                        }`}
                                >
                                    <Box variant="ansbox">{answer}</Box>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
            <Container>
                <div className="py-[2rem]">
                    <p className="mb-2">
                        Got a question? <Link href='https://blog.zippycrowd.com/contact-us/' target='_blank' >
                            <button>Get in touch</button>
                        </Link>
                    </p>
                    <p>
                        Ready to join us on ZippyCrowd? <Link href='https://app.zippycrowd.com/login' >
                            <button>Join us</button>
                        </Link>
                    </p>
                </div>
            </Container>
        </section>
    )
}
