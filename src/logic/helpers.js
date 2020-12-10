const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const toLowercaseFirstLetter = string => {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

export { shuffleArray, toLowercaseFirstLetter };