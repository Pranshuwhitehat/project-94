<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCWWHKlNLM5xCREjwyiTjOCbPTfzw85OV0",
    authDomain: "project-93-6e4bf.firebaseapp.com",
    databaseURL: "https://project-93-6e4bf-default-rtdb.firebaseio.com",
    projectId: "project-93-6e4bf",
    storageBucket: "project-93-6e4bf.appspot.com",
    messagingSenderId: "1042280045884",
    appId: "1:1042280045884:web:09979b5d6ca63e95485239"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
