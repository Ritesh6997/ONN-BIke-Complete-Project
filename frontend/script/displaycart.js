function displaycart(Data,parent){
    Data.map((ele)=>{
        let div=document.createElement("div");
        div.setAttribute("class","main_div")
        let image=document.createElement("img");
        image.src=ele.img;
        let combine=document.createElement("div")
        combine.append(image)
        combine.setAttribute("class","img_div")
        let name=document.createElement("h1");
        name.innerText=`${ele.comp_name} \n${ele.name}`;
        let divl=document.createElement("div");
        let pick=document.createElement("h3");
        pick.textContent="PICKUP & RETURN LOCATION";
        let stop=document.createElement("a");
        stop.setAttribute("id","enter_location");
        divl.append(pick,stop);
        divl.setAttribute("class","location");
        let divf=document.createElement("div");
        divf.setAttribute("class","fine");
        let exc=document.createElement("p");
        let fine1=document.createElement("p");
        fine1.textContent="Late return first two hours of delay ₹200 "
        let fine2=document.createElement("p");
        fine2.textContent="₹ 11 per hour after first two hours of delay";
        exc.textContent="Excess "+ele.excess;
        exc.setAttribute("class","boxlr");
        divf.append(fine1,fine2);
        div.append(name,combine,divl,divf,exc);
        parent.append(div);
})
}
export default displaycart;