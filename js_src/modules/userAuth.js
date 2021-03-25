var firebaseConfig = {
  apiKey: "AIzaSyAk8kebOX8MDqtYYyy7sAdd4fsZa4R8M0s",
  authDomain: "pomoreward.firebaseapp.com",
  projectId: "pomoreward",
  storageBucket: "pomoreward.appspot.com",
  messagingSenderId: "319256565665",
  appId: "1:319256565665:web:62d73e7fb1a493d51d5de0",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const signUp = () => {
  let email = document.querySelector("#userEmail");
  let pass = document.querySelector("#userPassword");

  const promise = auth.createUserWithEmailAndPassword(email.value, pass.value);
  promise.catch((e) => alert(e.message));
};

const signIn = () => {
  let email = document.querySelector("#userEmail");
  let pass = document.querySelector("#userPassword");

  const promise = auth.signInWithEmailAndPassword(email.value, pass.value);
  promise.catch((e) => alert(e.message));

  console.log("signed in! " + email.value);
};

const signOut = () => {
  auth.signOut;
  alert("Signed out :<");
};

auth.onAuthStateChanged((user) => {
  if (user) {
    var email = user.email;
    console.log(email);
  } else {
    //alert("no active user!");
  }
});

let signInBtn = document.getElementById("signInBtn");
let signOutBtn = document.getElementById("signOutBtn");
let signUpBtn = document.getElementById("signUpBtn");

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
