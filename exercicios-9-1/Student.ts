class Student {
  private _matricula: string
  private _nome: string
  /* private _notaProva: number[]
  private _notaTrabalho: number[] */

  constructor(m:string, n:string) {
    this._matricula = m,
    this._nome = n
  }

  get nome ():string {
    return this._nome
  }

  set nome (nome:string) {
    if(nome.length > 3) {
      this._nome = nome
    } else {
      throw new Error("O nome deve ter mais de 3 caractres");
    }
  }

}

const vinicius = new Student('sd-23-b', 'Vinicius Soares');

console.log(vinicius.nome)