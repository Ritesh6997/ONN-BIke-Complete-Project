import displayData from "./appendData.js";
let parent=document.getElementById("product_container");
let Data=JSON.parse(localStorage.getItem("product_Data"));
console.log(Data)
displayData(Data,parent)

let div_suzuki=document.querySelectorAll(".checked_value")[0].addEventListener("click",filter)
let value1=document.querySelectorAll(".checked_value");
console.log(value1);
function filter()
{
    console.log(1)
  
    if (value1.checked==true)
    {
        console.log(2)
        console.log(value1.value);
    }
    
}
;
let x=value1.checked
console.log(x)