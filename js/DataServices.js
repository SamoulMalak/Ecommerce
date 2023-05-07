function ShowAllItems ()
{
    var DataItems=[];
    var parent =document.getElementById("parentDataItem");
    DataItems=  JSON.parse(localStorage.getItem("ItemsData"));


    for (let i = 0; i < DataItems.length; i++) {
    
        //  dispaly the carts 

       let child =`
       <div class="col-12 col-md-6 mt-2 mt-md-0"  >
          <div class="card">
            <img src="${DataItems[i].Images[0]}"
                 class="card-img-top" height="250"
                 alt="">
            <div class="card-body">
              <p class="m-0 card-title text-center font-weight-bold">
              ${DataItems[i].Title}
              </p>
              <div class="text-center">
                <span class="badge badge-success">${DataItems[i].Price}$</span>
                <span class="badge badge-danger">-20%</span>
                <span class="badge badge-primary">New</span>
              </div>
              <div class="text-center">
                <span class="badge badge-info">Woman</span>
                <span class="badge badge-info">Man</span>
                <span class="badge badge-info">Kids</span>
              </div>
              <div class="my-2 text-truncate">
              ${DataItems[i].Description}   
              <div class="text-center">
                <button class="btn btn-sm btn-secondary detailsButton" onclick="SetDetails(${i});">Details</button>
                <button class="btn btn-sm btn-success CardButton" onclick="AddThisElementToCart(${i});">Add To Card</button>
              </div>
            </div>
          </div>
          </div> `;
          parent.innerHTML += child;
          console.log(DataItems[i].Images[0]);
        
    }
        // items function 
}

ShowAllItems();

function ShowItem(index)
{
    var DataItems=[];
    DataItems=  JSON.parse(localStorage.getItem("ItemsData"));
    var item =DataItems[index];


    // html code to display item 
}


function DeleteItem(id)
{
    var DataItems=[];
    DataItems=  JSON.parse(localStorage.getItem("ItemsData"));
    DataItems[id]
}


