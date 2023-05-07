function search()
{

    let text =document.getElementById('searchText').value;
    let ItemsData =JSON.parse(localStorage.getItem("ItemsData"));
    let result = [];

    for (let i = 0; i <ItemsData.length; i++) {
        
        let str1 =`${ItemsData[i].Title}`;
        
       if (str1.includes(text)){
        result.push(ItemsData[i]);
       }
     
        
    }
    var parent =document.getElementById("parentDataItem");
    parent.innerHTML="";

    for (let i = 0; i < result.length; i++) {
        
        let child =`
       <div class="col-12 col-md-6 mt-2 mt-md-0"  >
          <div class="card">
            <img src="${result[i].Images[0]}"
                 class="card-img-top" height="250"
                 alt="">
            <div class="card-body">
              <p class="m-0 card-title text-center font-weight-bold">
              ${result[i].Title}
              </p>
              <div class="text-center">
                <span class="badge badge-success">${result[i].Price}$</span>
                <span class="badge badge-danger">-20%</span>
                <span class="badge badge-primary">New</span>
              </div>
              <div class="text-center">
                <span class="badge badge-info">Woman</span>
                <span class="badge badge-info">Man</span>
                <span class="badge badge-info">Kids</span>
              </div>
              <div class="my-2 text-truncate">
              ${result[i].Description}   
              <div class="text-center">
                <button class="btn btn-sm btn-secondary detailsButton" onclick="SetDetails(${i});">Details</button>
                <button class="btn btn-sm btn-success CardButton" onclick="AddThisElementToCart(${i});">Add To Card</button>
              </div>
            </div>
          </div>
          </div> `;
          parent.innerHTML += child;
        
    }
    alert("done");
}