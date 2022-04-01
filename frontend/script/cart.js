
    let start_date_div=document.querySelector("#start_trip p");
    let end_date_div=document.querySelector("#end_trip p");
    start_date=JSON.parse(localStorage.getItem("startdate"))
    end_date=JSON.parse(localStorage.getItem("enddate"))
    let item_data=JSON.parse(localStorage.getItem("cart_Data"));
    console.log("item",item_data);
    let x= new Date(start_date);
    var month_start= x.getUTCMonth() + 1;
    var day_start = x.getUTCDate();
    var year_start = x.getUTCFullYear();

    let y= new Date(end_date);
    var month_end= y.getUTCMonth() + 1;
    var day_end = y.getUTCDate();
    var year_end = y.getUTCFullYear();
    const month_arr=["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    month_start=month_arr[month_start-1];
    month_end=month_arr[month_end-1];
    let sd =  day_start+ "-" + month_start +"-"+year_start ;
    let ed= day_end+ "-" + month_end + "-"+ year_end ;
    start_date_div.textContent=sd;
    end_date_div.textContent=ed;
    console.log(sd,ed);
    //Factor of Multiplication
var factor_;
console.log("S",start_date);
function calculateDays() { 
const dateOne = new Date(start_date);
const dateTwo = new Date(end_date);
const time = Math.abs(dateTwo - dateOne);
factor_= Math.ceil(time / (1000 * 60 * 60 * 24));
  
}  
calculateDays()
console.log("days",factor_) 
var insurance=0;
var tarrif_price=0;
var total_price=0;
var final_price=0;
let total_price_div=document.querySelector("#tp_vam");
let tariff_div=document.querySelector("#total_price");
let insure_div=document.querySelector("#haa");
let secure=document.querySelector("#sec");
secure.addEventListener("click",check);
tarrif_price=factor_*item_data[0].daily;
final_price=insurance+tarrif_price;

function check(){
    if(secure.checked==true){
    insurance=19;
    final_price=tarrif_price+19;
    document.querySelector("#total_price").textContent="₹"+tarrif_price;
    document.querySelector("#tp_vam").textContent="₹"+(final_price);
    insure_div.textContent="₹19"
    }
    else{
    insurance=0;
    final_price=tarrif_price
    insure_div.textContent="₹0"
    document.querySelector("#total_price").textContent="₹"+tarrif_price;
    document.querySelector("#tp_vam").textContent="₹"+(final_price);
    }
}


document.querySelector("#done").addEventListener("click",promo);
let countp=1;
function promo(){
    let cou=document.querySelector("#Coupon").value;
    if(cou=="Masai10"&&countp==1){
        alert("Coupon code Applied");
        if((secure.checked==true)){
            final_price=Math.round((final_price-19)*0.9)+19;  
            tarrif_price=Math.round(tarrif_price*.9);  
        }
        else{
            final_price=Math.round(final_price*.9);
            tarrif_price=Math.round(tarrif_price*.9);  
        }
        console.log(final_price);
        document.querySelector("#tp_vam").textContent="₹"+(final_price);
        tariff_div.textContent="₹"+(tarrif_price);
        countp++;
    }
    else if(countp>1){
        alert("Coupon  Already Reedemed");
    }
    else{
        alert("Coupon Code Invalid")
            document.querySelector("#tp_vam").textContent="₹"+(final_price); 
       
    }
}
document.querySelector("#total_price").textContent="₹"+tarrif_price;
document.querySelector("#tp_vam").textContent="₹"+(final_price);
var btn_pay=document.querySelector("#pay");
btn_pay.addEventListener("click",DONE);
function DONE(){
    console.log(final_price);
    localStorage.setItem("Final_price",final_price);
    window.location.href="./payment.html";
}
