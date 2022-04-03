import displayData from "./appendData.js";
let parent=document.getElementById("product_container");
// apending the data :start date, end date ,city name;
let startDate_div=document.getElementById("StartDate_input");
let EndDate_div=document.getElementById("EndDate_input");
let cityname_div=document.getElementById("cityname")
let endDate=JSON.parse(localStorage.getItem("enddate"));
let startDate=JSON.parse(localStorage.getItem("startdate"));
let cityname=localStorage.getItem("cityname")||0;
startDate_div.textContent=startDate;
EndDate_div.textContent=endDate;
cityname_div.innerText=cityname;
// area vise bikes data ;
async function dta(){
    try {
        const res= await fetch(`http://localhost:5000/citybikes/${cityname}`);
        const Datra=await res.json();
        console.log(Datra.message.bikeId);
        localStorage.setItem("areabikes",JSON.stringify(Datra.message.bikeId));
        return Datra.message.bikeId;
    } catch (error) {
        console.log({message:error.message});
    }
}
const areavisebikedatas=await dta()
console.log(areavisebikedatas)
displayData(areavisebikedatas,parent,true)

 let Data=JSON.parse(localStorage.getItem("areabikes"));

console.log(Data)
displayData(Data,parent,true)
let elements=document.getElementsByClassName("checked_value");
console.log(elements)

// adding event listern on all input div in filter div
for (let i=0;i<elements.length;i++)
{
    elements[i].addEventListener("click",filterfunction);
}
import filter_data from "./filter.js";

let count=0;
function filterfunction()
{ count++;
    let flag;
    if (count==1)
         flag=true;
    else
    flag==false;
    let filter_value;
    for (let i=0;i<elements.length;i++)
    {
         if(elements[i].checked)
         filter_value=elements[i].value;
    }
    let res=filter_data(Data,filter_value);
    console.log(res);
    displayData(res,parent,flag)
}
//appending the places data on bootstrap modal div.
let model_div=document.getElementById("modal_div");
console.log(cityname)

async function placesdata(){    
console.log(cityname)
    try {
        let result = await fetch(`http://localhost:5000/areas/${cityname}`);
        let places_data= await result.json()
        console.log(places_data);
        return (places_data)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
}
const placesData=await placesdata();
modelData(placesData,model_div)
function modelData(placesData,model_div)
{
    placesData.areas.map((ele)=>{
        let div=document.createElement("div");
        let name=document.createElement("h4");
        name.innerText=ele.stop;
        let timing=document.createElement("h6");
        timing.innerText='Station timing : 9 AM - 9 PM'
        let landmark=document.createElement("h5");
        landmark.innerText=ele.stop_landmark;
        let button=document.createElement("button");
        let objcityname={
            stop_name:ele.stop,
            landmark_name:ele.stop_landmark
        }
        button.innerText="Aavaliable 5";
            button.addEventListener("click",()=>{
                async function cartdata(){
                    console.log(1); 
                    try {
                        objcityname=JSON.stringify(objcityname);
                        let res = await fetch(
                            "http://localhost:5000/",
                            {
                              method: `POST`,
                              body: objcityname,
                              headers: {
                                "Content-Type": `application/json`,      
                            },
                            }
                          );
                          let data = await res.json();
                          console.log("data", data);
                        } catch (error) {
                        console.log({message:error.message});
                    }
                }
                    //  if (data.token){
                   
                    //    const cur_user=[{token:data.token,first_name:data.user.firstName}]
                       
                    //    console.log(cur_user);
                    //    localStorage.setItem("Current_User",JSON.stringify(cur_user));
                    //    window.location.href="./index.html"
                    //  }
                    //  else{
                    //    alert("Invalid Email or Password ")
                    //  }
                 localStorage.setItem("city_and_Landmark",JSON.stringify(objcityname))
            window.location.href="./cart.html";
            })
        div.append(name,timing,landmark,button);
        model_div.append(div);
    }

    )
}

 