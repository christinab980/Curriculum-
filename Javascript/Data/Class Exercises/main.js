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

