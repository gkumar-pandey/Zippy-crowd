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
import Animate from "../../components/animations/animation"

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
    const [activeQuestionNumber, setActiveQuestionNumber] = useState(null);
    const [activeAnswer, setActiveAnswer] = useState<any | null>('');

    const onClickHandler = (activeQuesNum: any) => {
        setActiveQuestionNumber(activeQuesNum === activeQuestionNumber ? null : activeQuesNum);
        const findActiveAns = faqData.find(({ id }) => activeQuesNum === id)
        if (activeAnswer === findActiveAns?.answer) {
            setActiveAnswer('')
        } else {
            setActiveAnswer(findActiveAns?.answer)
        }
    }
    return (
        <section className="py-[3rem]" id="faq-section">
            <Container>
                <div className="px-[15px]" >
                    <Animate.FadeIn>
                        <Text variant="title">frequently asked questions</Text>
                    </Animate.FadeIn>
                    <div className="pb-[2rem] grid grid-cols-2 gap-6 md:grid-cols-1 sm:grid-cols-1 md:flex-wrap sm:flex-wrap relative border-b-4 border-[#E188AF]">
                        <div>
                            {faqData.map(({ question, answer, id }, index) => (
                                <div
                                    className="flex justify-between md:flex-wrap sm:flex-wrap"
                                    key={index}
                                >
                                    <Box variant="question" onClick={() => onClickHandler(id)} idx={id} activeQuestion={activeQuestionNumber}  >
                                        <div >
                                            {question}
                                        </div>
                                    </Box>
                                    <div
                                        className={`${activeQuestionNumber === id
                                            ? "block"
                                            : "hidden"
                                            } xl:hidden 2xl:hidden lg:hidden`}
                                    >
                                        <Box variant="ansbox">{answer}</Box>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='md:hidden sm:hidden ' >
                            <div
                                className={`${activeAnswer ? "block" : "hidden"} `}
                            >
                                <Box variant="ansbox">{activeAnswer}</Box>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <Animate.FadeIn>
                    <div className="py-[2rem] px-[15px] ">
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
                </Animate.FadeIn>
            </Container>
        </section>
    )
}
