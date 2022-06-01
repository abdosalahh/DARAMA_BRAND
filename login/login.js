
var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
function register()
{
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
}
function login()
{
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
}
var modal = document.getElementById('login-form');
window.onclick = function(event) 
{
    if (event.target == modal)                        
    {
        modal.style.display = "none";
    }
}
function validateLogin()
 {
     var userName = document.getElementById("username").value;
     var password = document.getElementById("password").value;
     if(userName == "admin" && password == "123456")
     {
         alert("login succesfully as admin");
         window.open("../adminPage/admin.html");
     }
     else if(userName == "client" && password == "12345678")
     {
     alert("login succesfully as client");
     window.open("../collections/collection.html");
     }
     else
     {
     alert("login failed,try again");
     }
 }


function validateRegister()
{
    var firstName=document.getElementById("first-name").value;
    var lastName=document.getElementById("last-name").value;
    var email=document.getElementById("email").value;
    var password1=document.getElementById("password1").value;
    var password2=document.getElementById("password2").value;

    if (firstName == "" || lastName == "" || email == "" || password1 == "" || password2 == "")
        {
         alert ("fill all data first");
        }
    else
        {
            if (password1 == password2)
            {
                window.open("../collections/collection.html");
            }
            else 
            {
              alert("Make sure from your password");
            }
        }
 }



 
