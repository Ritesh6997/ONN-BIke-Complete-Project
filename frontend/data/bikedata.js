
    let Data=async()=>{
        try {
            let res=await fetch(`http://localhost:5000/products`);
            let data= await res.json();
            localStorage.setItem("product_Data",JSON.stringify(data));
           } catch (error) {
            console.log({message:error.message});
        }
    };
         Data();

// export default Data;