const friends = ["Bulu", "Chulu"];
const schoolFriends = ["Boka", "Soka", "Doka"];
const collegeFriends = ["Ultung", "Vultung"];

friends.push(...schoolFriends);
// console.log(friends);

const user = { name: "Sondip", phoneNo: "01774564545" };
const otherInfo = { hobby: "travel", occupation: "web devloper" };
const userInfo = { ...user, ...otherInfo };
// console.log(userInfo);

const sendInvitation = (...friends: string[]) => {
  friends.forEach((friend: string) => {
    console.log(`send invitation to ${friend}`);
  });
};

sendInvitation("Poka", "Choka", "Boka");
