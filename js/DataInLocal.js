/*
    Get Data From API and save it to Local Storage  
*/

function  SetInitailDataInLocalStorge()
{
    /* 
      DataItems ==>
        array of object that hold all  data in json format 


        var DataItemObj={Id:,Title:,Description:,Price:,Images:Category,Rate,Brand,Stock}

    */

       
       
    var DataItems=[];
    

/*
        Items variable
        that we getten fro, api saving it in Local storage  
*/
    let id, title , description ,price ,category,rate,brand,stock;
    let image =[];
    let photo1 ,photo2;
    

    //  calling api to get Data  

    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res =>{
      

        // Make an arrey get all data 
        for (let i = 0; i < res.products.length; i++) {
            
            id=res.products[i].id  ;
            title=res.products[i].title;
            description=res.products[i].description;
            price =res.products[i].price;
            category=res.products[i].category;
            rate=res.products[i].rating;
            brand= res.products[i].brand;
            stock=res.products[i].stock;
           photo1 =res.products[i].images[0];
            photo2=res.products[i].images[1];
            image=[photo1,photo2];
            var DataItemObj={Id:id-1,Title:title,Description:description,Price:price,Images:image,Category:category,Rate:rate,Brand:brand,Stock:stock};

            DataItems.push(DataItemObj);
            
        }
        
        localStorage.setItem("ItemsData",JSON.stringify(DataItems));

    } )


   
}


/* 
    Function to check if there any data in local storage 'ItemsData'
    if there any data [Not consider any Number of rows ]  Don't Do any 
    thing in localStorage 
    if there no data Call the api function and add {Just once time } all information in Localstorage 


    ===============================
    This is main Function that we will calling in main Page

*/
function CheckForExistingDataInLocalStorage()
{
    let DataIsExisting
    if(localStorage.getItem("ItemsData")==null)
    {
        SetInitailDataInLocalStorge();
        console.log('Data is Null');
    }
    else{
        console.log('Data is Existing');
    }


}


CheckForExistingDataInLocalStorage();
