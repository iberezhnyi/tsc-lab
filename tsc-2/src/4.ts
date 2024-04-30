// class Key {
//   private signature: number = Math.random();

//   getSignature(): number {
//     return this.signature;
//   }
// }

class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random(); // Генеруємо випадковий підпис
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false; // По замовчуванню двері закриті
  protected key: Key | null = null;

  comeIn(person: Person): void {
    if (this.door) {
      console.log("Людина входить у будинок.");
    } else {
      console.log("Двері закриті. Людина не може ввійти.");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super();
    this.key = key;
  }

  openDoor(key: Key): void {
    if (key.getSignature() === this.key?.getSignature()) {
      this.door = true; // Відкриваємо двері
      console.log("Двері відчинені.");
    } else {
      console.log("Невірний ключ. Двері залишаються закритими.");
    }
  }
}

// Створюємо об'єкти
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

// Відкриваємо двері і впускаємо людину
house.openDoor(person.getKey());
house.comeIn(person);

export {};
