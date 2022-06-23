const return1 = () => 'Acordando!!';

const return2 = () => 'Bora tomar café!!';

const return3 = () => 'Partiu dormir!!';

//const doingThings = (exibir) => exibir();
//console.log(doingThings(return2)); 

//OU

const doingThings = (exibir) => {
  const result = exibir();
  console.log(result);
};

doingThings(return1);
 