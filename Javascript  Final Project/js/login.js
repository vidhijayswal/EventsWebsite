window.onload = function() {
    
   document.getElementById("login_btn").onclick = function() {
    
     var storedName = localStorage.getItem("name");
    var storedPw = localStorage.getItem("password");
    
    
    var userName = document.getElementById("userName").value;
        var userPass = document.getElementById("userPw").value;
        console.log(userName);
        console.log(userPass);
    
        var storedName = localStorage.getItem("name");
        var storedPassword = localStorage.getItem("password");
        
        if(userName == storedName && userPass == storedPw) 
        {
            alert("Logged In");
        }
        else {
            alert("Please enter valid information");
        }     
        console.log(localStorage.getItem("name"));
        console.log(localStorage.getItem("password"));
}
    document.getElementById("rgstr_btn").onclick = function() {
        
        
    
    var a = document.getElementById("registername").value;
    var b = document.getElementById("pw").value;
        
     if(a =="") {
         alert("Enter Name");
     }   
        else if(b == ""){
            alert("Enter Password");
        }

else {
    
    localStorage.setItem("name" , a);
        
        
    localStorage.setItem("password" , b);
    
    
    alert("You are sucessfully Registered");
    
    }
    
    }
    
    
    
    
}