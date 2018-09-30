import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = new firebase.initializeApp({
  apiKey: "AIzaSyCqjVzowhAOjegrVMwRimzhRA9NiKvFvUI",
  authDomain: "catch-of-the-day-niel.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-niel.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// default export
export default base;
