
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore,collection,getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage, ref } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDrA1k0yTJLR3vRlY_GBxrQubQIeD2unGc",
    authDomain: "fmss-e6463.firebaseapp.com",
    databaseURL: "https://fmss-e6463-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fmss-e6463",
    storageBucket: "fmss-e6463.appspot.com",
    messagingSenderId: "988407159344",
    appId: "1:988407159344:web:c54b41c27c46598afa2bf5"
  };

  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  let noticesData = []

  const querySnapshot = await getDocs(collection(db,'notices'));
  querySnapshot.forEach((doc) => {
    let d = {id: doc.id, ...doc.data()};
    noticesData.push(d);
  });

  noticesData.sort((a,b) => b.uploadtime - a.uploadtime);
  console.log(noticesData);

export {noticesData};