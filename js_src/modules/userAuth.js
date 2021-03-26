let firebaseConfig = {
  apiKey: "AIzaSyAk8kebOX8MDqtYYyy7sAdd4fsZa4R8M0s",
  authDomain: "pomoreward.firebaseapp.com",
  projectId: "pomoreward",
  storageBucket: "pomoreward.appspot.com",
  messagingSenderId: "319256565665",
  appId: "1:319256565665:web:62d73e7fb1a493d51d5de0",
};

firebase.initializeApp(firebaseConfig);

let auth = firebase.auth();

const signUp = () => {
  let email = document.getElementById("userEmail");
  let password = document.getElementById("userPassword");

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );

  promise.catch((e) => alert(e.message));

  alert("Signed Up");
};

const signIn = () => {
  let email = document.getElementById("userEmail");
  let password = document.getElementById("userPassword");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch((e) => alert(e.message));
};

const signOut = () => {
  auth.signOut();
  alert("Signed Out");
};

auth.onAuthStateChanged(function (user) {
  if (user) {
    let email = user.email;
    console.log("Active User " + email);

    //Take user to a different or home page
    //is signed in
  } else {
    alert("No Active User");
    //no user is signed in
  }
});

let signUpBtn = document.getElementById("signUpBtn");
let signInBtn = document.getElementById("signInBtn");
let signOutBtn = document.getElementById("signOutBtn");

signUpBtn.addEventListener("click", () => {
  signUp();
});

signInBtn.addEventListener("click", () => {
  signIn();
});

signOutBtn.addEventListener("click", () => {
  signOut();
});

// button click actions userstatus button

let userStatus = document.querySelector(".userStatus");
let auth_Div = document.querySelector(".auth_Div");

const settingsPage = document.querySelector(".settingsPage");
const dashboardPage = document.querySelector(".dashboardPage");
const modesDiv = document.querySelector(".modesDiv");
const aboutPage = document.querySelector(".aboutPage");
const reset = document.querySelector(".reset");
const squareBox = document.querySelector(".squareBox");
const sessionBtns = document.querySelector(".sessionBtns");
const mainFlex = document.querySelector(".flexMain");

const jumpto_UserStatusPage = () => {
  [
    settingsPage,
    aboutPage,
    squareBox,
    sessionBtns,
    reset,
    dashboardPage,
    mainFlex,
    modesDiv,
  ].forEach((temp) => {
    temp.style.display = "none";
  });

  auth_Div.style.display = "flex";
};

userStatus.addEventListener("click", () => {
  jumpto_UserStatusPage();
});
