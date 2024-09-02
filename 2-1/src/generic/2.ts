/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

const a: AllType = {
  name: "Mango",
  position: 1,
  color: "FFFFFF",
  weight: 50,
};

const b: AllType = {
  name: "Bob",
  position: 2,
  color: "CBD6B4",
  weight: 45,
};

function compare<T extends AllType>(
  top: Pick<T, "name" | "color">,
  bottom: Pick<T, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

console.log("compare :>> ", compare(a, b));
