
function displayData(Data,parent,empty)
{
    let x="daily"
    if (empty==true)
    parent.innerText=""
    Data.map((ele)=>{
        console.log(x)
        let div=document.createElement("div");
        let image=document.createElement("img");
        image.src=ele.img;
        let imgdiv=document.createElement("div")
        imgdiv.append(image)
        let tag=document.createElement("div");
        tag.innerText=`${ele.count}+Left`;
        tag.setAttribute("class","tag_div");
        let combine=document.createElement("div")
        combine.append(imgdiv,tag)
        combine.setAttribute("class","img_div")
        let name=document.createElement("h6");
        name.innerText=`${ele.comp_name} ${ele.name}`;
        let combine1=document.createElement("div");
        let range=document.createElement("span");
        range.innerText=`Free ${ele.range}`;
        let excess=document.createElement("span");
        excess.innerText=`Excess ${ele.excess}`;
        combine1.append(range,excess);
        combine1.setAttribute("class","km_div");
        let combine2=document.createElement("div");
        combine2.setAttribute("class","end_div");
        let price=document.createElement("span");
        price.innerText=`₹ ${ele[x]}`;
        let btn=document.createElement("button");
        btn.innerText="BOOK NOW";
        btn.setAttribute("data-bs-toggle","modal");
        btn.setAttribute("data-bs-target","#exampleModal")
        btn.addEventListener("click",()=>{
            let arr=[]
            arr.push(ele)
            localStorage.setItem("cart_Data",JSON.stringify(arr));
        })
        combine2.append(price,btn);
        div.append(combine,name,combine1,combine2);
        parent.append(div);
    })
}


export default displayData;