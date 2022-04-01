
function displayData(Data,parent,ul,ll)
{
    parent.innerText=""
    Data.map((ele,index)=>{
        let div=document.createElement("div");
        div.setAttribute("class","photo d-block  h-300 ")
        let image=document.createElement("img");
        image.src=ele.img;
        let combine=document.createElement("div")
        combine.append(image)
        combine.setAttribute("class","img_div")
        let name=document.createElement("h6");
        name.innerText=`${ele.comp_name} \n${ele.name}`;
        name.style.marginBottom="10px"
        let div1=document.createElement("div");
        div1.setAttribute("class","Price_vam")
        let price1=document.createElement("h6");
        price1.innerText=`₹ ${ele.daily}`;
        let format1=document.createElement("p");
        format1.textContent="/Daily(24 hrs)";
        div1.append(price1,format1);
        
   
         let div2=document.createElement("div");
        div2.setAttribute("class","Price_vam")
        let price2=document.createElement("h6");
        price2.innerText=`₹ ${ele.Weekly}`;
        let format2=document.createElement("p");
        format2.textContent="/Weekly(Mon-Fri)";
        div2.append(price2,format2);
        

        let div3=document.createElement("div");
        div3.setAttribute("class","Price_vam")
        let price3=document.createElement("h6");
        price3.innerText=`₹ ${ele.monthly}`;
        let format3=document.createElement("p");
        format3.textContent="/Monthly(30 days)";
        div3.append(price3,format3);

        let div4=document.createElement("div");
        div4.setAttribute("class","faltu")
        let min_bill=document.createElement("p");
        min_bill.innerText=`Minimum Billing ₹149/4 hours`;
        let con=document.createElement("p");
        con.textContent="*conditions apply";
        div4.append(min_bill,con);



        div.append(combine,name,div1,div2,div3,div4);
        if(index<=ul&&index>=ll){

            //console.log(index);
            parent.append(div);
        }
        
    })
}


export default displayData;