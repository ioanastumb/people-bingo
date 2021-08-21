const createQuestion = (questionType, questionText) => {
    return {
        questionType: questionType,
        questionText: questionText,
        answer: '',
        reason: '',
        isAnswered: false,
        color: "#fff"
    }
}

export { createQuestion };