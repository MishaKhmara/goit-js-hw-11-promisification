import users from "./users.js";
// Задание 1
const getUserNames = users => {
  const userNames = users.map((user)=>user.name);
  return userNames
};
console.log(getUserNames(users));
// Задание 2
const getUsersWithEyeColor = (users, color) => {
  const eyeColor = users.filter((user)=>user.eyeColor === color)
  return eyeColor
};

console.log(getUsersWithEyeColor(users, 'blue')); 
// Задание 3
const getUsersWithGender = (users, gender) => {
    const usersWithGender = users.filter((user)=>user.gender === gender).map((user)=>user.name)
    return usersWithGender
  };
  
  console.log(getUsersWithGender(users, 'male'));
   // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
// Задание 4
const getInactiveUsers = users => {
  const inactiveUsers = users.filter((user)=>!user.isActive)
  return inactiveUsers
};
console.log(getInactiveUsers(users));
// Задание 5
const getUserWithEmail = (users, email) => {
  const userWithEmail = users.find((user)=>user.email === email)
  return userWithEmail
};
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
// Задание 6
const getUsersWithAge = (users, min, max) => {
  const usersWithAge = users.filter(({age})=>age >= min && age <=max)
  return usersWithAge
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));

// Задание 7

const calculateTotalBalance = users => users.reduce(
  (totalBalance, user) => totalBalance + user.balance,0);

console.log(calculateTotalBalance(users)); // 20916
// Задание 8
const getUsersWithFriend = (users, friendName) =>
  users
    .filter(user => user.friends.some(friend => friend === friendName))
    .map(user => user.name);
    console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
// Задание 9
const getNamesSortedByFriendsCount = users => {
  const SortedByFriendsCount =  [...users].sort((a, b) => a.friends.length - b.friends.length).flatMap(user => user.name);
  return SortedByFriendsCount
};

console.log(getNamesSortedByFriendsCount(users));
[ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Задание 10
const getSortedUniqueSkills = users => {
  const sortedUniqueSkills = users.flatMap((user)=> user.skills).filter(
    (user, index, array) => array.indexOf(user) === index).sort((a,b)=>a.localeCompare(b))
  return sortedUniqueSkills
  };
  
  console.log(getSortedUniqueSkills(users));