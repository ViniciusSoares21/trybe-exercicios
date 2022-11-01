const fs = require('fs').promises;

async function readAll() {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(data);
    const fileContent = simpsons.map(({id, name }) => `${id} - ${name}`);
    fileContent.forEach((string) => console.log(string));
  } catch (error) {
    console.error('Erro ao ler o arquivo');
  }
}

async function searchSimpsons(id) {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(data);
    const searchPerson = simpsons.find((simpson) => Number(simpson.id) === id);
    if(!searchPerson) {
      throw new Error('id não encontrado');
    }
    return searchPerson;
}

async function removeCharacters() {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(data);
    const removPerson = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
    await fs.writeFile('./simpsons.json', JSON.stringify(removPerson))
}

async function CreateCharacters() {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  const familyIds = [1, 2, 3, 4];
  const addCharacters = simpsons
    .filter((simpson) => familyIds.includes(Number(simpson.id)));
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(addCharacters))
}

async function insertCharacter() {
  const fileContent = await fs
    .readFile('./simpsonFamily.json', 'utf-8');
  
  const simpsonsFamily = JSON.parse(fileContent);

  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFamily));

}

async function alterCharacter() {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);

  const fileContent = await fs
    .readFile('./simpsonFamily.json', 'utf-8');
  const simpsonsFamily = JSON.parse(fileContent);

  const searchPerson = simpsons.find((simpson) => Number(simpson.id) === 2);
  const removPerson = simpsonsFamily.filter((simpson) => simpson.id !== '8');

  const trocaPerson = [...removPerson, searchPerson]
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(trocaPerson))
}

async function main() {
  //await readAll();
  //const simpson = await searchSimpsons(2);
  //console.log(simpson)
  //await removeCharacter();
  //await CreateCharacters();
  //await insertCharacter();
  await alterCharacter();
}

main();