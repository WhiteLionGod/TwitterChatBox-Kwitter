
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDa_m_txYoA-MJMNDxDvKPRNEvLAtV5mG8",
      authDomain: "kwitterroom-704e3.firebaseapp.com",
      databaseURL: "https://kwitterroom-704e3-default-rtdb.firebaseio.com",
      projectId: "kwitterroom-704e3",
      storageBucket: "kwitterroom-704e3.appspot.com",
      messagingSenderId: "1025792671231",
      appId: "1:1025792671231:web:4be886c71ca39dce2e7bca"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

    function addRoom() {
          var room_names = document.getElementById("room_name").value;
          
          firebase.database().ref("/").child(room_names).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_names);

          window.location = "kwitter_page.html";
    }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location = "index.html"
}