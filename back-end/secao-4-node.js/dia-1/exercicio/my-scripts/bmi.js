const readline = require('readline-sync');

function calculaImc(peso, altura) {
  const calcAltura = altura / 100;
  const alturaAoQuadrado = calcAltura * calcAltura;
  const bmi = peso / alturaAoQuadrado;
  return bmi;
} 

const BMI_MAX_AND_MIN = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100,
  },
};

function handleBMIResult(bmi) {
  const statuses = Object.keys(BMI_MAX_AND_MIN); // ['Underweight', 'Normal Weight', 'Overweight'...]

  const resultFind = statuses.find((status) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status]; // acessamos as informações do intervalo da situação iterada

    return bmi >= minBMI && bmi <= maxBMI;
  });

  return resultFind;
}

function main() {
  const weight = readline.questionFloat('What\'s your weight? (kg) ');
  const height = readline.questionInt('What\'s your height? (cm) ');
 
  const bmi = calculaImc(weight, height);
  const bmiResult = handleBMIResult(bmi);
 
  console.log(`BMI: ${bmi.toFixed(2)}`);
  console.log(`Situação: ${bmiResult}`);
}

main()

