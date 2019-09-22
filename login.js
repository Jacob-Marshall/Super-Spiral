function checkPassword() {
      var password = document.getElementById("passwordBox");
      var passwordText = password.value;
      if(passwordText == "Spiral") {
       alert("Pro tip: If you bookmark the page we take you to next, you won't need to sign in when you click on the bookmark!");
       return true;
      }
      alert("Access denied! Incorrect password!");
      return false;
      }
