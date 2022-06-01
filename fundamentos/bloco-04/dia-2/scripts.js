let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//EXERCICIO 1
/* 
 for (let index = 0; index < numbers.length; index +=1){
    console.log(numbers[index]); 
 }
 */
//EXERCICIO 2 

 let resultado = 0;

 /* for (let index = 0; index < numbers.length; index +=1){
    resultado += numbers[index]; 
    console.log(resultado)
 } */

//EXERCICIO 3 
 /* 
 for (let index = 0; index < numbers.length; index +=1){
    resultado += numbers[index]; 
 }

 let media = resultado / numbers.length;
   console.log(media);
 */
//EXERCICIO 4 
/* 
 if (media > 20){
   console.log("valor maior que 20");
 }
 else{
   console.log("valor menor que 20");
 } */

//EXERCICIO 5
/* 
 let maiorNum = numbers[0];

 for (let index = 1; index < numbers.length; index +=1){
  if (numbers[index] > maiorNum){
  maiorNum = numbers[index]
  }
 }
 console.log(maiorNum)
 */
//EXERCICIO 6 
/* 
for (let index = 0; index < numbers.length; index +=1){
  if (numbers[index] % 2 !== 0){ 
    resultado += 1;
  }
 }
 
 if (resultado === 0){
   console.log('nenhum valor ímpar encontrado')
 }
 else{
   console.log(resultado)
 }
 */ 

//EXERCICIO 7
/* 
 let menorNum = numbers[0];

 for (let index = 1; index < numbers.length; index +=1){
  if (numbers[index] < menorNum){
  menorNum = numbers[index]
  }
 }
 console.log(menorNum)
 */

//EXERCICIO 8 

 let exercicio8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

 for(let index2 = 0; index2 < exercicio8.length; index2 +=1){
  console.log(exercicio8[index2]);
 }

//EXERCICIO 9 

 for(let index2 = 0; index2 < exercicio8.length; index2 +=1){
  console.log(exercicio8[index2] / 2);
 }

//FIM
