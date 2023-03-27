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
        question: <QuestionOne />,
        answer: <AnswerOne />,
    },
    {
        question: <QuestionTwo />,
        answer: <AnswerTwo />,
    },
    {
        question: <QuestionThree />,
        answer: <AnswerThree />,
    },
    {
        question: <QuestionFour />,
        answer: <AnswerFour />,
    },
    {
        question: <QuestionFive />,
        answer: <AnswerFive />,
    },
    {
        question: <QuestionSix />,
        answer: <AnswerSix />,
    },
    {
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
        <section className=" py-[3rem] ">
            <Container>
                <div>
                    <Text variant="title">frequently asked questions</Text>
                    <div className="pb-[2rem] md:flex-wrap sm:flex-wrap relative border-b-4 border-pink">
                        {faqData.map(({ question, answer }, index) => (
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
