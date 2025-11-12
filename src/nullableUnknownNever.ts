const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB : users ${input}`);
  } else {
    console.log(`From Db : All user`);
  }
};
getUser(null);

//  unknown
const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discounterPrice = input * 0.1;
    console.log(discounterPrice);
  } else if (typeof input === "string") {
    const [discounterPrice] = input.split("");
    console.log(Number(discounterPrice) * 0.1);
  } else {
    console.log("wrong input");
  }
};

discountCalculator(100);
discountCalculator("100 tk");
discountCalculator(null);

// void / never
const throwError = (msg: string): never => {
  throw new Error(msg);
};
throwError("Error...");
