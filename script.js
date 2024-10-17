const charAmountRange = document.getElementById
('charAmountRange')
const charAmountContain = document.getElementById
('charAmountNumber')
const includeUppercaseElement = document.getElementById
('includeUppercase')
const includeLowercaseElement = document.getElementById
('includeLowercase')
const includeNumbersElement = document.getElementById
('includeNumbers') 
const includeSymbolsElement = document.getElementById
('includeSymbols')
const form = document.getElementById('passGenForm')
const password = document.getElementById('passwordDisplay')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)  
).concat(
    arrayFromLowToHigh(123, 126)
)

 charAmountRange.addEventListener('input', syncCharAmount)
 charAmountNumber.addEventListener('input', syncCharAmount)

 form.addEventListener('submit', e => {
    e.preventDefault()
    const charAmount = charAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    // const includeLowercase = includeLowercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(charAmount, includeUppercase, 
        includeNumbers, includeSymbols)
        passwordDisplay .innerText = password
 })

 function generatePassword(charAmount, 
    includeUppercase, includeSymbols, includeNumbers) {
       let charCodes = LOWERCASE_CHAR_CODES
       if(includeUppercase) charCodes = charCodes.concat 
       (UPPERCASE_CHAR_CODES) 
       if(includeNumbers) charCodes = charCodes.concat 
       (NUMBER_CHAR_CODES)
       if(includeSymbols) charCodes = charCodes.concat 
       (SYMBOL_CHAR_CODES)

       const passwordChar = []
       for (let i = 0; i < charAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * 
            charCodes.length)]
        passwordChar.push(String.fromCharCode(characterCode))
       }
       return passwordChar.join('')
 }

 function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
 }

 function syncCharAmount(e) {
    const value = e.target.value
    charAmountRange.value = value
    charAmountNumber.value = value
 }
