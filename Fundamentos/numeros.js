const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //Serve para verificar se o valor é inteiro.
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2)) // Serve para fixar o número de casas decimais. 
console.log(media.toString(2)) //Passando o valor '2' dentro da tostring, o valor é transformado em binário.





