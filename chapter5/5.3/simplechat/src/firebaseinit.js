import firebase from 'firebase'
import 'firebase/firestore'

//Firebase 설정
var config = {
  apiKey: "AIzaSyB9Rv9_b9ZBURvUx5ppvoBM_-ZfVPb3deI",
  authDomain: "simpletest-3e0e3.firebaseapp.com",
  databaseURL: "https://simpletest-3e0e3.firebaseio.com",
  projectId: "simpletest-3e0e3",
  storageBucket: "simpletest-3e0e3.appspot.com",
  messagingSenderId: "592170562814",
  appId: "1:592170562814:web:ef1568bbb517666a"
};

let app = firebase.initializeApp(config);  // firebase app을 초기화
export const db = app.firestore()       // cloud firestore를 나타냄

