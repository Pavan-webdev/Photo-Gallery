import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyD3gz1K_6eQBx-5E9p72M9x12vBvZCovfs",
  authDomain: "photogallery-34791.firebaseapp.com",
  projectId: "photogallery-34791",
  storageBucket: "photogallery-34791.appspot.com",
  messagingSenderId: "607305393322",
  appId: "1:607305393322:web:3c7f69f17afcf3d3e65cd3",
  measurementId: "G-NMGMNLNLMW"
};

  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore,timestamp };
  