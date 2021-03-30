import { userScore, userTheme, userSound, userCards } from "../index.js";
import { showRemaining_Gems } from "./rewardsPage.js";

let score = document.querySelector(".score"); // score div in dashboard page

let firebaseConfig = {
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

  let email = document.getElementById("userEmail");
  let password = document.getElementById("userPassword");

  email.value = "";
  password.value = "";

  location.reload();
};

const user_Avatar = (action) => {
  let avatarDiv = document.querySelector(".userAvatar_Div");
  let emailInputDiv = document.querySelector(".email_InputDiv");
  let passInputDiv = document.querySelector(".pass_InputDiv");

  if (action == "show") {
    emailInputDiv.style.display = "none";
    passInputDiv.style.display = "none";

    avatarDiv.style.display = "flex";
  } else {
    avatarDiv.style.display = "none";

    emailInputDiv.style.display = "flex";
    passInputDiv.style.display = "flex";
  }
};

let signUpBtn = document.getElementById("signUpBtn");
let signInBtn = document.getElementById("signInBtn");
let signOutBtn = document.getElementById("signOutBtn");
let usrname_Div = document.querySelector(".authDiv_Header");

const createUserName_fromEmail = (email) => {
  let result = "";

  for (let i = 0; i < email.length; i++) {
    if (email[i] == "@") break;

    result += email[i];
  }
  return result;
};

auth.onAuthStateChanged(function (user) {
  if (user) {
    let email = user.email;
    usrname_Div.innerText = createUserName_fromEmail(email);

    signInBtn.style.display = "none";
    signUpBtn.style.display = "none";

    user_Avatar("show");
  } else {
    user_Avatar("hide");
    usrname_Div.innerText = "Account";

    signInBtn.style.display = "flex";
    signUpBtn.style.display = "flex";
  }
});

signUpBtn.addEventListener("click", () => {
  signUp();
});

signInBtn.addEventListener("click", () => {
  signIn();
});

signOutBtn.addEventListener("click", () => {
  signOut();

  // clear previous score
  score.innerText = 0;
  showRemaining_Gems(0);
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

export const saveUserData_toDB = () => {
  auth.onAuthStateChanged(function (user) {
    if (user) {
      let user_Name = createUserName_fromEmail(user.email);

      firebase
        .database()
        .ref(`users/${user_Name}`)
        .set({
          score: `${userScore}`,
          theme: `${userTheme}`,
          sound: `${userSound}`,
          cards: `${userCards}`,
        });
    }
  });
};

import { setLevel_Progress } from "./miscFuncs";

import { useLightTheme, useDarkTheme } from "./themes.js";

export const getUserData_fromDB = () => {
  auth.onAuthStateChanged(function (user) {
    if (user) {
      let user_Name = createUserName_fromEmail(user.email);

      let ref = firebase.database().ref("users");
      ref.child(user_Name).on("value", function (snapshot) {
        // sync theme
        userTheme = snapshot.val().theme;
        userTheme == "light" ? useLightTheme() : useDarkTheme();

        // sync score and lvl
        userScore = snapshot.val().score;
        showRemaining_Gems(userScore);

        // sync saved usersound!
        userSound = snapshot.val().sound;

        // sync n.o of purchased user cards

        userCards = snapshot.val().cards ? snapshot.val().cards : 0;
        score.innerText =
          parseInt(`${userScore}`) + parseInt(`${userCards}` * 2000);
        setLevel_Progress();
      });
    }
  });
};
