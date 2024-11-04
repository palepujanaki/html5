const profile= document.getElementById("profile");
const checkbox=document.getElementById("checkbox");
checkbox.addEventListener("change",()=>{
    if(checkbox.checked){
        profile.src="profile 2.png";
    }
    else{
        profile.src="profile 1.png";
    }
});