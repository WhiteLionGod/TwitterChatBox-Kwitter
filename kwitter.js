var code = "<center><h1 class='header'>	Twitter	<sup><img src='m2.png'></sup></h1><div class='col-lg-4 col-md-6 col-sm-6 col-xs-11 login_div'><img src='logo.png' class='logo'><h3>See what is happening in the world right now</h3><h4>Join Twitter today</h4><div class='form-group'><label>User Name:</label><input type='text' id='user_name' class='form-control' placeholder='User Name'></div><button id='login_button' class='btn btn-primary' onclick='addUser()'>Log in</button><br><br></div></center>";
function start() {
document.getElementById("body").innerHTML = code;
}

function addUser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}