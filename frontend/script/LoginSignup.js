let toggle=document.querySelector(".gayab_vam").addEventListener("click",jadu);
    let toggle_div=document.querySelector("#toggle_vam").addEventListener("click",jadu);
    function jadu(){
        document.querySelector("#login_vam").style.display="none";
        document.querySelector("#signup_vam").style.display="block";
    }
    let toggle2=document.querySelector(".gayab2_vam").addEventListener("click",jadu2);
    function jadu2(){
        document.querySelector("#login_vam").style.display="block";
        document.querySelector("#signup_vam").style.display="none";
    }


    //Sign UP Verification
   let sign=document.querySelector("#btn-signup_vam");
   sign.addEventListener("click",Sign_up);
  async function Sign_up(){
    try {
     let first_name=document.querySelector("#sfname_vam").value;
     let last_name=document.querySelector("#slname_vam").value;
     let mail=document.querySelector("#semail_vam").value;
     let mob=document.querySelector("#smb_vam").value;
     let pass=document.querySelector("#signup-password_vam").value;
     const register_data={
    firstName:first_name,
    LastName:last_name,
    email:mail,
    contactNo:mob,
    password:pass
     };
     const Register_data = JSON.stringify(register_data);
     let res = await fetch(
      "http://localhost:5000/Signup",
      {
        method: `POST`,
        body: Register_data,

        // header for content like api data
        headers: {
          "Content-Type": `application/json`,
        },
      }
    );
    let data = await res.json();
    console.log("data", data);
    
    if(data.token){
      alert("Signup-Succesfull");
      //Diverting to Login
        jadu2();
    }
    else{
      alert("Email is already Register")
    }
  
}catch (err) {
  
    console.log("err", err);
  }
};

//Login Verification----------------------------------------------------------------------
   let log=document.querySelector("#btn-login_vam");
   log.addEventListener("click",Login);
   async function Login(){ 
     console.log(1); 
      try {
        let login_data = {
          email:document.querySelector("#email_vam").value,
          password:document.querySelector("#login-password_vam").value
        };
        let login_data_json = JSON.stringify(login_data);
        let res = await fetch(
          "http://localhost:5000/login",
          {
            method: `POST`,
            body: login_data_json,
            headers: {
              "Content-Type": `application/json`,
            },
          }
        );
        let data = await res.json();
        console.log("data", data);
        if (data.token){
      
          const cur_user=[{token:data.token,first_name:data.user.firstName,userId:data.user._id}]
          
          console.log(cur_user);
          localStorage.setItem("Current_User",JSON.stringify(cur_user));
          window.location.href="./index.html"
        }
        else{
          alert("Invalid Email or Password ")
        }
       
      } catch (err) {
        console.log("err", err);
      }
   }
  let Current_User=JSON.parse(localStorage.getItem("Current_User"));
    function signOut()
  {
    localStorage.removeItem("Current_User");
  }
  // signOut();

  

 