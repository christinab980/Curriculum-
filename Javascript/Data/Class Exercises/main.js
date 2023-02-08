function addr (n1,n2) {
 return n1+n2
};

console.log(addr(2,7))

function customGreeting (str1, str2) {
    return 'str1 str2'
}

console.log(customGreeting('Hello', 'Christina'))

function captialize (firstName) {
    const firstLetterCaptialized = firstletter.toUpperCase();
    const remainingcharacters = str.substring(1);
    return firstLetterCaptialized + remainingcharacters;
}

firstName = "anna"

const areaOfPerimeter = function (l , w) {
    if (l === w) {
        return l * w;
    } else {
        return (l + w) * 2;
    }
};

const finalGrade = function (exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100
    } 
    if (exam > 75 && projects >= 5) {
        return 90
    } 
    if (exam > 50 && projects >= 2) {
        return 75
    }
        return 0
};

const feast = (beast, dish) =>
beast[0] == dish[0] && beast [beast.length -1] == dish [dish.length -1]

function points(games) {
    return games
    .map(game => {
        const [x, y] = game.split(':').map(s => parseInt(s))
        if (x > y) return 3;
        if (x < y) return 0;
        return 1;
    })
    .reduce((total, currentValue) => total + currentValue)
}

