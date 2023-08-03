
var productNameInpot = document.getElementById("productName");
var textProduct =document.getElementById("textProduct")
var productPriceInpot = document.getElementById("productPrice");
var CategaryInpot = document.getElementById("productCategary");
var textCategary =document.getElementById("textCategary")
var productDescriptionInpot = document.getElementById("productDescription");

var search = document.getElementById("searchInpot")

var buttonAdd = document.getElementById("add");
var buttonUpdate = document.getElementById("update");

var indexUbdate = 0 ;
// 
// ================================= cruat
// بستخدمها للتخذين من object ال array
var prodeuctcontiner =[]

if(localStorage.getItem("product") != null ){
    prodeuctcontiner = JSON.parse( localStorage.getItem("product")) 
    displayData()
}

function regex(){
    var text =productNameInpot.value;
    var x = /^[A-z]{2,20}$/
 
    if(x.test(text) == true){
        productNameInpot.classList.add("is-valid");
        productNameInpot.classList.remove("is-invalid");
        textProduct.classList.add("d-none");
            return true
    }else{
        productNameInpot.classList.add("is-invalid")
        productNameInpot.classList.remove("is-valid");
        textProduct.classList.remove("d-none");
            return false
    }
   
}

function Categary(){
    var a =CategaryInpot.value;
  var r =/^[A-z]{2,30}$/
  if(r.test(a) == true){
    CategaryInpot.classList.add("is-valid")
    CategaryInpot.classList.remove("is-invalid")
    textCategary.classList.add("d-none")
    return true
  }else{
    CategaryInpot.classList.add("is-invalid")
    CategaryInpot.classList.remove("is-valid")
    textCategary.classList.remove("d-none")
    return false
  }
}

// ل اخذ قيم تم اضافتها 
function addProduct(){


if(regex() == true){
    if(Categary() == true){
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
    form()
    }else{
        alert("يجب اضافه نوع المنتج")
    }
    }else{
    alert("يجب اضافه اسم المنتج  ")
        }
}





function form(){
    productNameInpot.value = '';
    productPriceInpot.value = '';
    CategaryInpot.value = '';
    productDescriptionInpot.value = '';
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
            <button class="btn btn-outline-warning btn-sm" onclick="updateData(${i})">Update</button>
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
            <button class="btn btn-outline-warning btn-sm" onclick="updateData(${i})">Update</button>
            <button class="btn btn-outline-danger btn-sm mt-1 mt-lg-0"  onclick="deleteProduct(${i})" >Delete</button>
            </td>
    </tr>`
}

    }
// لاظهار الداتا التي تم جمعها
    document.getElementById("tbodyData").innerHTML = cartone;

}
function updateData(index){

indexUbdate =index

var message = prodeuctcontiner[index];

productNameInpot.value = message.name;
productPriceInpot.value =message.price;
CategaryInpot.value =message.categary;
productDescriptionInpot.value =message.description;

buttonUpdate.classList.remove("d-none");
buttonAdd.classList.add("d-none");


}

function updateproduct(){
    var product = {
        name : productNameInpot.value,
        price : productPriceInpot.value,
        categary : CategaryInpot.value,
        description : productDescriptionInpot.value
    }

    buttonAdd.classList.remove("d-none");
    buttonUpdate.classList.add("d-none");
    // لاضافه العنصر في البدايه
    prodeuctcontiner.splice (indexUbdate,1 , product)
// لا اضافه العنصر والحفاظ علي وجوده
    localStorage.setItem("product", JSON.stringify(prodeuctcontiner))

    displayData()
    form()
    
}


















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
