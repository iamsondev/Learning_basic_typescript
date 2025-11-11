//  array, object

let stationary: string[] = ["Pen", "Pencil", "Ball", "Soap"];
stationary.push("Dairy");

let mixedArray: (string | number)[] = ["Pen", 12, "Pencil", 78, "Soap"];
mixedArray.push(true); //use only string and number

//tuple
let coordinates: [number, number] = [20, 30];
let couple: [string, string] = ["Husband", "wife"];

let destination: [string, string, number] = ["Dinajpur", "Haripur", 70];

// reference type object
const user: {
  // organization: "Alokanonda";
  readonly organization: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Alokanonda",
  firstName: "Sondip",
  lastName: "Kumar",
  isMarried: false,
};

console.log(user);
