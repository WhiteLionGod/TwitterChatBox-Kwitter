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
    var room_name = localStorage.getItem("room_name");

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });

          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
