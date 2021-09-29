import { isEmpty } from "./helpers";

const createGame = (gameId, games, questions) => {

    if (isEmpty(gameId) || isEmpty(games) || isEmpty(questions)) {
        return {
            isValid: false
        }
    }

    let gameDefinition = games.find(game => game.gameId === gameId);

    if (isEmpty(gameDefinition)) {
        return {
            isValid: false
        }
    }

    let matchedQuestions = gameDefinition.questionIds.map(questionId => {
        return questions.find(questions => questions.questionId === questionId);
    });

    if (isEmpty(matchedQuestions) || matchedQuestions === []) {
        return {
            isValid: false
        }
    }

    return {
        isValid: true,
        gameId: gameId,
        gridSize: gameDefinition.gridSize,
        questions: matchedQuestions
    }
}

export { createGame };