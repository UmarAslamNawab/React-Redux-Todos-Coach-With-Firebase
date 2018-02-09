import * as firebase from 'firebase'
const config = {
  apiKey: "AIzaSyDfAmUWFNE6vG4UIt7hs7zvYXrn080g6UY",
  authDomain: "todo-using-rea.firebaseapp.com",
  databaseURL: "https://todo-using-rea.firebaseio.com",
  projectId: "todo-using-rea",
  storageBucket: "todo-using-rea.appspot.com",
  messagingSenderId: "1059799570687"
};
export const firebaseApp = firebase.initializeApp(config);
export const todoRef = firebase.database().ref('todo-using-react-redux');
export const completeTodoRef=firebase.database().ref('completeTodos')