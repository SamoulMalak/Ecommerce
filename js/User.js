// user input format in json 
// {'Id':id ,'Name':name,'Email':email,'verify':false,'Role':Admin}

function GetUsers_ASJson()
{
    //Return users in json Format 
    var users = JSON.parse(localStorage.getItem("Users") || "[]");
    return users;
}

/*
     this function to do registeration 
    To Connect to Front-end 
    you should to :.
    1= give a usernamd text id='userName'
    2= .....  userEmail text an id = userEmail
    3 password => id='userPassword'
*/
function AddUser()
{
    
    var users = GetUsers_ASJson();
     var userId= GetTheLastIdInUsers() ;
     var userName=document.getElementById("userName").value;
     var userEmail=document.getElementById("userEmail").value;
     var userPassword=document.getElementById("userPassword").value;

     /* 
            check if the enter email is already existing 
            if it existing 
     */

            for (let i = 0; i < users.length; i++) {
               if(users[i].Email==userEmail)
                {
                    // we must return (or show an denger span to warn the client )
                    // or you should rediredct to a page to handel it 
                    // in the current moment i will print in console  a msg
                    alert("This email is already Exist");
                   return 0;
                
                }
            }
     var newUser={'Id':userId ,'Name':userName,'Email':userEmail,'Password':userPassword,'verify':false,'Role':'User'};
     users.push(newUser);
      localStorage.setItem("Users",JSON.stringify(users));


      /* should after this resgisteration 
         user be logged in no to asked to log in 
         this is not make sence 
         here we make user be  logged in Automatic
       */

      SetUserLogInInLocalStorage(newUser);
      

      // i should to get to this code again 
      // it not go to default page
      location.replace("default.html");
      

}


function LogIn()
{

  
   var users =GetUsers_ASJson();
   var userEmail = document.getElementById("UserEmail").value;
   var password= document.getElementById("userPassword").value;
   for (let i = 0; i < users.length; i++) {
    if(users[i].Email.toLowerCase()==userEmail.toLowerCase())
    {
        console.log('enter');
        if(users[i].Password==password)
        {
          
            // her is log in come successfully
          
            // set the user logged in data in local storage 

            SetUserLogInInLocalStorage(users[i])
            
            //  window.location.href = "default.html?";
          // here  is a page that will be direct to  
            location.replace("default.html");
            return 0;
        }
        else{
            continue;
        }
    }

    
   }
   alert("user Name or Password is wrong ");
   return 0;

  

   
}


function GetTheLastIdInUsers()
{
    var users=GetUsers_ASJson();
    return users.length;
}


/* 
        this function to Build an User Log In data
        // {'Id':id ,'Name':name,'Email':email,'verify':false,'Role':Admin}
        */ 
        function SetUserLogInInLocalStorage(user)
        {
       
            if (localStorage.getItem("UserLoggedIn") ==null)
            {
            let userLoggedIn_JsonFormat={Id:user.Id ,Name:user.Name,Email:user.Email,verify:user.verify,Role:user.Role};
            localStorage.setItem('UserLoggedIn',JSON.stringify(userLoggedIn_JsonFormat));
            console.log('User Logged In scucessfuly ');
            }
            else{
             console.log("Error in registeration");
            }
        }


        function LogOut()
        {
            localStorage.removeItem("UserLoggedIn");
        }