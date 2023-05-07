function SetDetails(index)
{
    // get all data from local stroage

   let  DataItems=  JSON.parse(localStorage.getItem("ItemsData"));
   let item=DataItems[index];

localStorage.setItem("Details",JSON.stringify(item));
   // go to 
   location.replace("Details.html");

   // must to equal the prop to attribute


}


function DetailsShow()
{

        // your code here
     
    let title ,brand,category,description,image1,image2,price,rate,stock;
    let item =JSON.parse(localStorage.getItem("Details"));
    title=item.Title;
    brand=item.Brand;
    category=item.Category;
    description=item.Description;
    image1=item.Images[0];
    image2=item.Images[1];
    price=item.Price;
    rate=item.Rate;
    stock=item.Stock;
    

// this for set the item id 
document.getElementById("itemId").value=item.Id;
console.log("from details ");
console.log(document.getElementById("itemId").value);
    document.getElementById("title").innerText=`Title : ${title}`;
    document.getElementById("brand").innerText=`Brand : ${brand}`;
    document.getElementById("category").innerText=`Category : ${category}`;
    document.getElementById("description").innerText=`Description : ${description}`;
    document.getElementById("image1").src=image1;
    
    document.getElementById("image2").src=image2;
    document.getElementById("price").innerText=`Price : ${price}`;
    document.getElementById("stock").innerText=`Stock : ${stock}`;
    // should rate 
    
 
    localStorage.removeItem("Details");


}