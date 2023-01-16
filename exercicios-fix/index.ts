class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true 
  }

  sayHello():void {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super()
      this.isSuper = false
  }
}

const myFunc = (obj: Superclass) => {
  obj.sayHello;
  console.log(obj.isSuper ? 'Super!' : 'Sub!');
}

const objSuper = new Superclass();
const objSub = new Subclass();

myFunc(objSuper);
myFunc(objSub);