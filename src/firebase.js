import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  // apiKey: "AIzaSyCREQMYIbAYKscrS_JYvWP4KpMsF_jI5Bg",
  // authDomain: "react-slack-clone.firebaseapp.com",
  // databaseURL: "https://react-slack-clone.firebaseio.com",
  // projectId: "react-slack-clone",
  // storageBucket: "react-slack-clone.appspot.com",
  // messagingSenderId: "423395756405"

  apiKey: "AIzaSyBDIthO4_yhB4jNGSQg_JXg5T3aD8fmFAA",
  authDomain: "react-slack-2ada2.firebaseapp.com",
  databaseURL: "https://react-slack-2ada2.firebaseio.com",
  projectId: "react-slack-2ada2",
  storageBucket: "react-slack-2ada2.appspot.com",
  messagingSenderId: "134037061116",
  // appId: "1:134037061116:web:08b503b5fa97c239e24679"
};
firebase.initializeApp(config);

export default firebase;
