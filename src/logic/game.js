const createGame = (gameId, games, questions) => {
    let gameDefinition = games.find(game => game.gameId === gameId);

    //TODO: better JS null check
    if (gameDefinition === null || gameDefinition === undefined) {
        return {
            isValid: false
        }
    }

    let matchedQuestions = gameDefinition.questionIds.map(questionId => {
        return questions.find(questions => questions.questionId === questionId);
    });

    //TODO: better JS null check 
    if (matchedQuestions === null || matchedQuestions === undefined || matchedQuestions === []) {
        return {
            isValid: false
        }
    }

    return {
        isValid: true,
        gridSize: gameDefinition.gridSize,
        questions: matchedQuestions
    }
}

export { createGame };