const retun = () => {
  return 'Acordando!!';
}
const retun2 = () => {
  return 'Bora tomar café!!';
}
const retun3 = () => {
  return 'Partiu dormir!!';
}

const doingThings = (exibi) => exibi(); 
console.log(doingThings(retun));

//OU

/* const doingThings = (exibi) => {
  const result = exibi();
  console.log (result);
}
doingThings(retun); */

