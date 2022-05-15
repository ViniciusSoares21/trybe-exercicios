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
 
 for (let index = 0; index < numbers.length; index +=1){
    resultado += numbers[index]; 
 }

  let media = resultado / numbers.length;
   console.log(media);

//EXERCICIO 4 

 if (media > 20){
   console.log("valor maior que 20");
 }
 else{
   console.log("valor menor que 20");
 }
 