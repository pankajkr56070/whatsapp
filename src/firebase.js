import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCRw4RerUhGK0qHBveTGporIRyw8NG0pRY",
    authDomain: "whats-app-clone-e1ce0.firebaseapp.com",
    projectId: "whats-app-clone-e1ce0",
    storageBucket: "whats-app-clone-e1ce0.appspot.com",
    messagingSenderId: "395559361897",
    appId: "1:395559361897:web:a3a26dcfe1f9c4e98a31f8",
    measurementId: "G-X7216JW35S"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider };
  export default db;