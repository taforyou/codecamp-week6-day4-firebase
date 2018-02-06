import * as firebase from "firebase";
import "firebase/firestore";

const config = {
  //ใส่ config firebase ตรงนี้
  apiKey: "AIzaSyCi0xKqW0py3rz83QiLMd2M4Ab4DovcYio",
  authDomain: "codecamp-week6.firebaseapp.com",
  databaseURL: "https://codecamp-week6.firebaseio.com",
  projectId: "codecamp-week6",
  storageBucket: "codecamp-week6.appspot.com",
  messagingSenderId: "55960876635"
};

class Firebase {
  constructor() {
    this.firebase = firebase.initializeApp(config);
  }

  getDatabase() {
    return this.firebase.database();
  }

  getFirestore() {
    return this.firebase.firestore();
  }
}

export default new Firebase();
