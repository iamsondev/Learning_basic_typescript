function addNormal(num1: number, num2: number): number {
  return num1 + num2;
}

addNormal(5, 10);

// Arrow
const arrowFun = (num1: number, num2: number): number => {
  num1 + num2;
};

arrowFun(5, 7);

//object function method
const platinumUser = {
  name: "Sondip",
  balance: 0,
  addBalance(value: number): number {
    const totalBalance = this.balance + value;
    return totalBalance;
  },
};

platinumUser.addBalance(56341);

const arr: num[] = [5, 69, 7];
const sqrArray = arr.map((elem: number): number => elem * elem);
