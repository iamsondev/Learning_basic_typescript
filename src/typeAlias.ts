type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 5465,
  name: {
    firstName: "Boka",
    lastName: "Soka",
  },
  gender: "male",
  contactNo: "354665",
  address: {
    division: "Rangpur",
    city: "Rangpur",
  },
};

const user2: User = {
  id: 54,
  name: {
    firstName: "choka",
    lastName: "poka",
  },
  gender: "female",
  contactNo: "017574545",
  address: {
    division: "Rangpur",
    city: "Rangpur",
  },
};

//  function type
type AddFunc = (num1: number, num2: number) => number;
const add = (num1, num2) => num1 + num2;
