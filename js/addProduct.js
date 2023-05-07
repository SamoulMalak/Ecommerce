function AddProduct()
{
  let data =[];
  data =JSON.parse (localStorage.getItem("ItemsData"));
 let name =document.getElementById("productName").value;
let des= document.getElementById("description").value;
let img= document.getElementById("image").value;
 let brand =document.getElementById("brand").value;
let price = document.getElementById("price").value;
let stock= document.getElementById("stock").value;
let carog= document.getElementById("category").value;
let obj ={Id:data.length,Title:name,Description:des,Price:price,Images:img,Category:carog,Rate:4.3,Brand:brand,Stock:65};
console.log(obj);
data.push(obj);
localStorage.setItem("ItemsData",JSON.stringify(data));

}