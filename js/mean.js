
var productNameInpot = document.getElementById("productName");
var productPriceInpot = document.getElementById("productPrice");
var CategaryInpot = document.getElementById("productCategary");
var productDescriptionInpot = document.getElementById("productDescription");
var search = document.getElementById("searchInpot")
// 
// ================================= creat
// بستخدمها للتخذين من object ال array
var prodeuctcontiner =[]

if(localStorage.getItem("product") != null ){
    prodeuctcontiner = JSON.parse( localStorage.getItem("product")) 
    displayData()
}


// ل اخذ قيم تم اضافتها 
function addProduct(){
    var product = {
        name : productNameInpot.value,
        price : productPriceInpot.value,
        categary : CategaryInpot.value,
        description : productDescriptionInpot.value
    }
    // لاضافه العنصر في البدايه
    prodeuctcontiner.unshift (product)
// لا اضافه العنصر والحفاظ علي وجوده
    localStorage.setItem("product", JSON.stringify(prodeuctcontiner))
    
    displayData()
}


// ================================== displayData

// يتم وضع جميع البيانات التي تم كتابتها هنا
function displayData(){
    // المكان الموجود لجم البيانات بداخله
    var cartone = "";
    for(var i = 0; i < prodeuctcontiner.length; i++){
        cartone += `   <tr>
        <td>${prodeuctcontiner[i].name}</td>
        <td>${prodeuctcontiner[i].price}</td>
        <td>${prodeuctcontiner[i].categary}</td>
        <td>${prodeuctcontiner[i].description}</td>
            <td>
            <button class="btn btn-outline-warning btn-sm" onclick="">Update</button>
            <button class="btn btn-outline-danger btn-sm mt-1 mt-lg-0"  onclick="deleteProduct(${i})" >Delete</button>
            </td>
    </tr>`
    }
// لاظهار الداتا التي تم جمعها
    document.getElementById("tbodyData").innerHTML = cartone;
}

// لحذف عنصر معين
function deleteProduct(elementNumber )
{
    prodeuctcontiner.splice(elementNumber, 1);
    localStorage.setItem("product", JSON.stringify(prodeuctcontiner))

    displayData()
}
// ============================== search===========================
//  displayData للبحث عن اي شيئ موجود داخل ال
function searchProdeuct(){
    var seaarch= search.value;

    var cartone = "";
    for(var i = 0; i < prodeuctcontiner.length; i++){
// لعمل البحث
if( prodeuctcontiner[i].name.toLowerCase().includes(seaarch.toLowerCase())   ){

    cartone += `  
    <tr>
        <td>${prodeuctcontiner[i].name}</td>
        <td>${prodeuctcontiner[i].price}</td>
        <td>${prodeuctcontiner[i].categary}</td>
        <td>${prodeuctcontiner[i].description}</td>
            <td>
            <button class="btn btn-outline-warning btn-sm" onclick="">Update</button>
            <button class="btn btn-outline-danger btn-sm mt-1 mt-lg-0"  onclick="deleteProduct(${i})" >Delete</button>
            </td>
    </tr>`
}

    }
// لاظهار الداتا التي تم جمعها
    document.getElementById("tbodyData").innerHTML = cartone;

}

    var seaarch = search.value;
 // المكان الموجود لجم البيانات بداخله




















//============================================= local Storig

// localStorage.setItem("userName", "miukl");
// localStorage.setItem("userAge", "24");

// // var x = localStorage.getItem("userName");
// // console.log(x);

// localStorage.removeItem("userName")

// localStorage.clear()


// ======================================== sessionStorage
// sessionStorage.setItem("userName", "miukl");
// sessionStorage.setItem("userAge", "24");

// // var x = sessionStorage.getItem("userName");

// sessionStorage.removeItem("userName")

// sessionStorage.clear()
