import React from 'react';

const name = 'Vinicius'
const lastName = 'Soares'
const descrition = 'Tenho 19 anos de idade'

class About extends React.Component {
  render() {
  const skills = ["HTML", "CSS", "JS", "Testes unitários"] // adicione mais habilidades aqui
  const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>
  return (
    <div>
      <h1> {name} {lastName} </h1>
      <p> {descrition} </p>
      <h2> Minhas Habilidades </h2>
      <ul> {jsxSkills} </ul>
    </div>
  );
  }
}

export default About;