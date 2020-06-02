
const sortString = str =>  str.split('').sort().join('');

console.log(
    `Sorted supercalifragilisticexpialidocious is: ${
        sortString('supercalifragilisticexpialidocious')
    }`
)

console.log(sortString('AbraCadaBra'));
module.exports = {sortString};