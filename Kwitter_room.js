
const firebaseConfig = {
  apiKey: "AIzaSyBBYW4aJtDDMohQc0FbdhIJ4XVK-z7Jjk8",
  authDomain: "project94-67877.firebaseapp.com",
  databaseURL: "https://project94-67877-default-rtdb.firebaseio.com",
  projectId: "project94-67877",
  storageBucket: "project94-67877.appspot.com",
  messagingSenderId: "1084089435519",
  appId: "1:1084089435519:web:6af18a73156116a409c64a"
};

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Username");

  function addroom() {
         room_name = document.getElementById("room_name").value;

        localStorage.setItem("Roomname",room_name);
    
        window.location = "kwitter_page.html";

        firebase.database().ref("/").child(room_name).update({
              purpose: "Adding Room Name"
        });
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();

function redirectToroomname(name){
  console.log(name);
  localStorage.setItem("Roomname",name);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("Username");
  localStorage.removeItem("Roomname");
  window.location = "index.html";
}
