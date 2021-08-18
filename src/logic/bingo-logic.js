import { shuffleArray, getRandomCardBackgroundColor, getBingoColor } from './helpers';

const getQuestionsOrder = (questions) => {
    let shuffledQuestions = questions.slice(0);
    shuffleArray(shuffledQuestions);

    return shuffledQuestions.map(shuffledQuestion => {
        return {
            questionType: shuffledQuestion.questionType,
            questionText: shuffledQuestion.questionText,
            answer: '',
            reason: '',
            isAnswered: shuffledQuestion.questionType === 'free' ? true : false,
            color: shuffledQuestion.questionType === 'free' ? getBingoColor() : getRandomCardBackgroundColor()
        }
    });
};

const checkForBingo = (questions, index, winType, gridSize) => {
    let row = Math.floor(index / gridSize);
    let column = index % gridSize;

    let isBingo = true;
    for (let i = 0; i < gridSize && isBingo; i++) {
        let position = winType === 'row'
            ? gridSize * row + i
            : gridSize * i + column;

        isBingo = questions[position].isAnswered;
    }

    return isBingo;
}

const isBingoQuestionAnswered = (question) => {
    if (question.questionType === 'default' && question.answer) {
        return true;
    }
    if (question.questionType === 'open-ended-question'
        && question.answer && question.reason) {
        return true;
    }
    return false;
}

export { getQuestionsOrder, checkForBingo, isBingoQuestionAnswered };