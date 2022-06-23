//EXERCICIO-1
/* 
const newEmployees = (geradorDeEmail) => {
  const employees = {
    id1: geradorDeEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: geradorDeEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: geradorDeEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
  
};
//console.log(newEmployees());

  const geradorDeEmail = (pessoaContratada) => {
  const email = pessoaContratada.toLowerCase().split(' ').join('_');
    return {pessoaContratada, email: `${email}@trybe.com`};
} 
console.log(newEmployees(geradorDeEmail));
 */

//EXERCICIO-2
/* let number = 2;

const numberGenerator = (number, gerador) => number === gerador;

const confereSorteio = (gerador) => {
  gerador = Math.floor(Math.random(1) * 5);
  if (number === gerador) {
    return "Parabéns você ganhou";
  }
  else {
    return "Tente novamente";
  }
}
console.log(confereSorteio(numberGenerator));

//OU

const numberGenerator = (number, gerador) => {
  gerador = Math.floor(Math.random(1) * 5);
  if (number === gerador) {
    return "Parabéns você ganhou";
  }
  else {
    return "Tente novamente";
  }
}

console.log(numberGenerator(2));
 */
//ou 

/* const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));
 */