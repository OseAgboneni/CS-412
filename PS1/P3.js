
const funcOnString = (string, func) => {
    newString = func(string)
    return newString;
}

//Test string
let myString = 'supercalifragilisticexpialidocious'

//Expression 1
console.log(
    `The string supercalifragilisticexpialidocious turns into: ${
        funcOnString(myString, (str) => str.split(/(?=c)/g))
    }`
)

//Expression 2
console.log(`The string supercalifragilisticexpialidocious turns into ${
    funcOnString(myString, (str) => {
        const stringProperties = {
            originalString: myString,
            modifiedString: myString.replace(/a/g, 'A'),
            numberReplaced: myString.split('a').length - 1,
            length: myString.length
        };
        
        return [
            stringProperties.originalString,
            stringProperties.modifiedString,
            stringProperties.numberReplaced,
            stringProperties.length
        ];
    })
}`);

module.exports = {funcOnString};

//To split a string and include the separator s, use regular expression /?=s/g
// x?=s matches x only if it is followed by s. s isn't included in match
// if there is nothing before ?, it matches everything.
// let string2 = 'supercalifragilisticexpialidocious';
// const re = /(?=c)/g;
// myArray = string2.split(/(?=c)/g)
// console.log(myArray);