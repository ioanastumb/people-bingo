const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const toLowercaseFirstLetter = string => {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

const getRandomCardBackgroundColor = () => {
    let colors = ["#ffe289", "#ffd9bd", "#b197aa", "#8399c5", "#faba95", "#f9ebac"];
    return colors[Math.floor(Math.random() * colors.length)];
};

const getBingoColor = () => {
    return "#81c784";
}

export { shuffleArray, toLowercaseFirstLetter, getRandomCardBackgroundColor, getBingoColor };