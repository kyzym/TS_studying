// Create interfaces User and Admin
// Keys for User: login, email, password, isOnline, lastVisited
interface User {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
}

const user1: User = {
  login: "Den",
  email: "ve@ve.com",
  isOnline: true,
  lastVisited: new Date(2022, 12, 29),
  password: "bebebe",
};

// Keys for Admin: login, email, password, isOnline, lastVisited, role
interface Admin {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
  role: string;
}

const admin1: Admin = {
  login: "Den",
  email: "ve@ve.com",
  isOnline: true,
  lastVisited: new Date(2022, 12, 29),
  password: "bebebe",
  role: "SupedAdmin",
};

function login(user: { login: string; password: string }) {
  if (user.login.length && user.password.length)
    console.log(`Hello ${user.login}`);
}

login(user1);
login(admin1);
