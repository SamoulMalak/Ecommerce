/*
this function must to return a true  in case of the user is log in 
and false if there is no user at all
<a href="registration.html">Registration</a>
*/

function CheckIfUserLogIn()
{
    let  userLogInData =JSON.parse(localStorage.getItem("UserLoggedIn"))
    if(userLogInData==null)
    {
        NotLogIn();
    }
    else{
        UserLogIn();
    }
}

function UserLogIn()
{
   let part1 =document.getElementById("LogPart1");
    let part2 =document.getElementById("LogPart2");
    let userName=GetUserName();
    part1.innerHTML=`<a href="#">Hi ,${userName}</a>`;
    part2.innerHTML=`<a onclick="LogOut();">Log Out</a>`;

    // this is for enable button in default page
    const buttons = document.querySelectorAll('.detailsButton');
    buttons.forEach(button => {
      button.disabled = false;
    })
      const CardButton = document.querySelectorAll('.CardButton');
      CardButton.forEach(button => {
        button.disabled = false;
    })

}

function NotLogIn()
{
    let part1 =document.getElementById("LogPart1");
    let part2 =document.getElementById("LogPart2");
    // this is for nav bar 
    part1.innerHTML=`<a href="registration.html">Register Now</a>`;
   part2.innerHTML=`<a href="signIn.html">Log In</a>`;
    
    const buttons = document.querySelectorAll('.detailsButton');
    buttons.forEach(button => {
      button.disabled = true;
    })
    const CardButton = document.querySelectorAll('.CardButton');
    CardButton.forEach(button => {
      button.disabled = true;
  })


}

function GetUserName()
{
   let UserIn= JSON.parse(localStorage.getItem("UserLoggedIn"));
   return UserIn.Name;
    
}

function LogOut()
{
    localStorage.removeItem("UserLoggedIn");
}



CheckIfUserLogIn();