export default class Person {
  constructor(private _name:string, private _birthDate:Date) {
    this.name = _name
    this.birthDate = _birthDate
  }

  get name ():string {
    return this._name
  }

  set name (name:string) {
    this.validateName(name);
    this._name = name
  }

  get birthDate ():Date {
    return this._birthDate
  }

  set birthDate (value:Date) {
    this.validatebirthDate(value)
    this._birthDate = value
  }

  private validateName(name:string):void {
    if (name.length < 3) {
      throw new Error("o nome precisa ter mais de 3 caracters");
    }
  }
  
  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  private validatebirthDate (data:Date):void {
    const datepoint = new Date().getTime()

    if (data.getTime() > datepoint) throw new Error('A data de nascimento não pode ser uma data no futuro.');
    if (Person.getAge(data) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
  }
}

const vini = new Person('vinicius', new Date('2003/02/07'));

console.log(vini)