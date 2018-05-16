import * as firebase from 'firebase'

let config = {
    apiKey: "AIzaSyBRkuDWWYp1ZZybWOmanPgh0J47j746Rc8",
    authDomain: "instapay-3aae4.firebaseapp.com",
    databaseURL: "https://instapay-3aae4.firebaseio.com",
    projectId: "instapay-3aae4",
    storageBucket: "instapay-3aae4.appspot.com",
    messagingSenderId: "377294303001",
}


firebase.initializeApp(config);



export default firebase
