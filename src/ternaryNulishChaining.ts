const voteForEligible = (age: number) => {
  // if (age > 18) {
  //   console.log("You are eligible");
  // } else {
  //   console.log("You are not eligible");
  // }

  const result = age >= 18 ? "your are eligible" : "you are not eligible";
  console.log(result);
};
voteForEligible(19);

//                         nullish operation------null and undefined
const userTheme = null;
const selectedUserTheme = userTheme ?? "Light Theme";
console.log(selectedUserTheme);

// compare between ternary and nullish operator
const isAuthenticated = null;
const resultWithTernary = isAuthenticated ? isAuthenticated : "you are guest";

const resultWithNullish = isAuthenticated ?? "you are guest";
console.log({ resultWithTernary }, { resultWithNullish });

// optional chaining

const user: {
  address: {
    city: string;
    town: string;
    postalCode?: number;
  };
} = {
  address: {
    city: "Dhaka",
    town: "Rangpur",
    postalCode: 23443,
  },
};

const postalCode = user?.address?.postalCode;
console.log(postalCode);
