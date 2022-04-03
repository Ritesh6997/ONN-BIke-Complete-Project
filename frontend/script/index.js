
var images=["https://images.unsplash.com/photo-1558980664-10e7170b5df9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80","https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","https://images.unsplash.com/photo-1585672523890-a00e6ea1bb66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80","https://images.unsplash.com/photo-1558980394-a3099ed53abb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"]
function setimageheader(){
	let heading=document.getElementById("header");
	let i=0;
	setInterval(function(){
		if(i==images.length){i=0}
			let img=images[i];
		heading.style=`background-image: url("${img}") `;
        heading.style.display="flex";
        heading.style.flexDirection="column";
        heading.style.justifyContent="center";
	// console.log("Neeraj")
	i++;
	},3000)
}
setimageheader()
// calnder------------------------
function startdate(){
  let startdate=document.getElementById('startdate');
  let d=new Date;
  console.log(d)
  let y=d.getFullYear();
  let m=d.getMonth()+1;
  let da=d.getDate();
  // console.log(`${y}-${m}-${da} ${h}:00:00`)
  startdate.min=`${y}-0${m}-${da}T12:00:00`;
  console.log(startdate.min)
  startdate.max=`${y+1}-0${m}-${da}T12:00:00`
}
function enddate(){
  let startdate=document.getElementById('startdate');
  let enddate=document.getElementById('enddate');
  let d=new Date;
  console.log(d)
  let y=d.getFullYear();
  let m=d.getMonth()+1;
  let da=d.getDate();
  // console.log(`${y}-${m}-${da} ${h}:00:00`)
  enddate.min=startdate.value;
  // console.log(startdate.min)
  startdate.max=`${y+1}-0${m}-${da}T12:00:00`
}
function savedate(){
  let selecttag_div=document.getElementById("selecttag_div").value;
  let startdate=document.getElementById('startdate').value;
  let enddate=document.getElementById('enddate').value; 
  let token=JSON.parse(localStorage.getItem("Current_User"))
if (selecttag_div!=""&&startdate!=""&&enddate!="" )
{
  if (token){
    console.log(1);
    console.log(startdate,enddate)
    localStorage.setItem('startdate',JSON.stringify(startdate));
    localStorage.setItem('enddate',JSON.stringify(enddate));
    window.location.href='./product.html'
}
else{
  alert("Please Login to Continue");
}
}
else{
    alert ("All filed are Mandatory");
}
}
// ----------calender--------------------------------------
    // -- saving the city ------
    function savecityname()
{
  cityname=document.getElementById("selecttag_div").value;
  localStorage.setItem("cityname",(cityname));
}
console.log(startdate=document.getElementById('startdate').value);