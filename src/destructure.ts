// object destructuring
const user = {
  name: {
    middleName: "Kunmar",
    lastNmae: "Roy",
  },
  gender: "Male",
  favouriteColor: "Black",
};

const {
  favouriteColor,
  name: { middleName: myMiddleName },
} = user;
console.log(favouriteColor, myMiddleName);

// Array destructuring
const friends = ["Rahim", "Karim", "Mahim"];
const [, , myBestFriend] = friends;
console.log(myBestFriend);
