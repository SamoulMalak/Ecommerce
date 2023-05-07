
function AddThisElementToCart(index)
{
    // first we should to get user information  


  let userIn= JSON.parse(localStorage.getItem("UserLoggedIn"));
  if(userIn==[null])
  {
    alert("Hello, to benefit from the services of our site, you must log in first");
    window.open("signIn.html","_self");
  }
else{
  // also we should to get the item information 
  let ItemsData=JSON.parse(localStorage.getItem("ItemsData"));

  let itemBeInCart=ItemsData[index];
  // second we check that the user has an local storage cart 
  // we will use the key 

  //  =========key => id of the user 
  let cartInStorage=[];
  cartInStorage  =JSON.parse(localStorage.getItem(`${userIn.Id}`));

     // check if this local storage is existing already or no 
     // if not we will create another cart 
     // if it already exist don't make anothe == msh shoglana hea


     /*
     her we should to create a array that should save in local storage data 
     and this array will consist of json objs contain items data
     */
    let arrOfData=[];


     if (cartInStorage == null ) 
     {
      console.log(itemBeInCart);
      // let readyDataToBeInLocal=
       arrOfData.push(itemBeInCart);
       console.log(arrOfData);
        localStorage.setItem(`${userIn.Id}`,JSON.stringify(arrOfData));
        location.replace("default.html");
     }
     else
     {
        arrOfData=JSON.parse(localStorage.getItem(`${userIn.Id}`));
        if( IsThisItemIncard(arrOfData))
        {
          alert("This item already in card !!");
          // should go to cart page ;
          ShowCartInPage();
        }
        else 
        {
         arrOfData.push(itemBeInCart);
          localStorage.setItem(`${userIn.Id}`,JSON.stringify(arrOfData));
          location.replace("default.html");
        }
     }
    }
}

// this function to check if the item in card or not 
function IsThisItemIncard(arr)
{

  // because  in details it remove the item and i can't access it 
  // i will get the id from page 
  let itemId=document.getElementById("itemId").value;
  console.log(itemId);

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].Id);
    if(arr[i].Id==parseInt(itemId) )
    {
      return true;
    }
    
  }
  return false;

}



function ShowCartInPage()
{
  location.replace("cart.html");
  let userIn= JSON.parse(localStorage.getItem("UserLoggedIn"));
  if(userIn==null)
  {
    alert("Hello, to benefit from the services of our site, you must log in first");
    window.open("signIn.html","_self");
  }
  else
  {
    // get this user item in local storage
  let itemArr= JSON.parse(localStorage.getItem(`${userIn.Id}`));



  // this is partail variable 
  let keyls=`${userIn.Id}`;
  let parent = document.getElementById("parent");
  for (let i = 0; i < itemArr.length; i++) {
   
    let child =` <div class="row gy-3 mb-4">
    <div class="col-lg-5">
      <div class="me-lg-5">
        <div class="d-flex">
          <img src="${itemArr[i].Images[0]}" class="border rounded me-3" style="width: 96px; height: 96px;" id="image"/>
          <div class="">
            <a href="#" class="nav-link" id="title">${itemArr[i].Title}</a>
            <p class="text-muted" id="brand">${itemArr[i].Brand} ,${itemArr[i].Category}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
      
      <div class="" >
        <text class="h6 ml-3" id="totalAmount">$ ${itemArr[i].Price}</text> <br />
        <small class="text-muted text-nowrap  ml-3" id="price"> $ ${itemArr[i].Price}/ per item </small>
      </div>
    </div>
    <div class="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
      <div class="float-md-end">
      <button onclick="DeleteItemFromCart(${keyls},${i})" class="btn btn-light border text-danger icon-hover-danger" onclick="DeleteItem(${i});" > Remove</button>
      </div>
    </div>
  </div>
` ;

    parent.innerHTML +=child;
  }
    
  }
}


function DeleteItemFromCart(key,id)
{
 let arr = JSON.parse(localStorage.getItem(`${key}`));
 arr.splice(id, 1);

 localStorage.setItem(`${key}`,JSON.stringify(arr));
 ShowCartInPage();

}




function DeleteItem(index)
{
  let userIn= JSON.parse(localStorage.getItem("UserLoggedIn"));
  let itemArr= JSON.parse(localStorage.getItem(`${userIn.Id}`));
  itemArr.splice(index,1);
  localStorage.setItem(`${userIn.Id}`,JSON.stringify (itemArr));
  ShowCartInPage();
}