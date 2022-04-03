function filter_data(data,checked)
{ 


   if (checked=="Suzuki"||checked=="Honda"||checked=="Hero"||checked=="TVS"||checked=="KTM"||checked=="Bajaj"||checked=="Royal Enfield")
   {
    let res= data.filter((ele)=>{
        console.log(ele.comp_name)
     return ele.comp_name==checked;
    })
    return res;
   } 
  if(checked=="Moped"||checked=="Bike")
   {
    let res= data.filter((ele)=>{
        console.log(ele.type)
     return ele.type==checked;
    })
    return res;
   } 
    if (checked=="Pulsar"||checked=="Activa 125"||checked=="Avenger"){
       if (checked=="Pulsar")
       {
        let res= data.filter((ele)=>{
            console.log(ele.name)
         return ele.name=="Pulsar 150"||ele.name=="Pulsar 180"||ele.name=="Pulsar 220"||ele.name=="Pulsar 200";
        })
        return res;
       }
     if(checked=="Avenger"){
        let res= data.filter((ele)=>{
            console.log(ele.name)
         return ele.name=="Avenger Street 150"||ele.name=="Avenger Cruise 220";
        })
        return res;
    }
        if (checked=="Activa 125")
        {
            let res= data.filter((ele)=>{
                console.log(ele.name)
             return ele.name=="Activa 125";
            })
            return res; 
        }
     }  

   
   
   

}
;

export default filter_data 