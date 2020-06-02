
const {describe, it} = require('mocha'); //mochajs.org for documentation (runner)
const {expect} = require('chai'); //chaijs.com for documentation (individual tests)

const {sortString} = require('./P1');
const {evaluate} = require('./P2');
const {funcOnString} = require('./P3');

describe('P1 Testing', () => {

    //set up initial conditions, if there are any (there aren't in this case)

    //set up individual unit tests
    it('should return a String type', function() {
        let sortedString = sortString('supercalifragilisticexpialidocious');
        expect(sortedString).to.be.string;
    });

    it('should return aaacccdeefgiiiiiiillloopprrssstuux for ' +
        'input supercalifragilisticexpialidocious', function() {
        let sortedString = sortString('supercalifragilisticexpialidocious');
        expect(sortedString).to.be.equal('aaacccdeefgiiiiiiillloopprrssstuux');
    })

    it('should sort by ASCII value', function() {
        let sortedString = sortString('AbraCadaBra');
        expect(sortedString).to.be.equal('ABCaaaabdrr');
    })

});


describe('P2 Testing', () => {

    //set up individual unit tests
    it('should return a function', function() {
        let operatorFxn = evaluate('9+3');
        console.log(typeof(operatorFxn))
        expect(operatorFxn).to.be.a('function');
    });

    it('should return the correct result', function () {
        let operatorFxn = evaluate('5-8');
        expect(operatorFxn('5-8')).to.be.equal(-3);
    });

    it('should return an undefined if an incorrect string is passed in', function () {
        let operatorFxn = evaluate('abra-cadabra');
        expect(operatorFxn).to.be.undefined;
    });

});

describe('P3 Testing', () => {

    //set up individual unit tests
    it('should properly apply the given function', function () {
        const funcToPass = str => str.split(/(?=c)/g);
        const testString = 'supercalifragilisticexpialidocious';
        let newString = funcOnString(testString, funcToPass);
        expect(newString.join(',')).to.be.equal('super,califragilisti,cexpialido,cious');
    });

    it('should return an item when corresponding function is passed', function() {
        const funcToPass = myString => {
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
        };
        const testString = 'supercalifragilisticexpialidocious';
        let newString = funcOnString(testString, funcToPass);
    });

});