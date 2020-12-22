// import {App} from "./App.js";
// import * as auth from "./Auth.js";

// const app = new App();
// auth.initFirebaseAuth();
// app.mount();

const db = firebase.firestore();

// add
db.collection("todos").add({
  title: "title",
  complated: false
}).then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
}).catch(function(error) {
  console.error("Error adding document: ", error);
});

// list
db.collection("todos").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
});

// delete
db.collection("todos").where("first", "==", "Ada").get().then((querySnapshot) => {
  querySnapshot.forEach(function(doc) {
    doc.ref.delete();
  });
});

// list
db.collection("todos").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
});
