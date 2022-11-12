import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADV7RG6IFvtIMZz-0LWxGVaYhlVSWq8zI",
  authDomain: "finaldemo-b8572.firebaseapp.com",
  projectId: "finaldemo-b8572",
  storageBucket: "finaldemo-b8572.appspot.com",
  messagingSenderId: "408382654795",
  appId: "1:408382654795:web:7e33ec4ac14f9fedfc80ce",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
