
function logout() {
  localStorage.removeItem("Username");
  localStorage.removeItem("Roomname");
  window.location = "index.html";
}


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

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location="index.html";
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value=" ";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    
    firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();
