import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDsPBZlEF-agPV7rmSbW2y_QgNghuutNZo",
  authDomain: "catch-of-the-day-pete.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-pete.firebaseio.com",
  appId: "1:212240012063:web:4046e9a0cf2578aaff162a"
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;