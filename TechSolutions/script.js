const darkBtn = document.getElementById("darkModeBtn");

if(darkBtn){

    if(localStorage.getItem("theme")==="dark"){
        document.body.classList.add("dark-mode");
    }

    darkBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
            localStorage.setItem("theme","dark");
        }else{
            localStorage.setItem("theme","light");
        }

    });
}

const form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const message=document.getElementById("message").value.trim();

const output=document.getElementById("formMessage");

if(name===""){
output.style.color="red";
output.textContent="Name is required";
return;
}

if(!email.includes("@")){
output.style.color="red";
output.textContent="Enter valid email";
return;
}

if(message.length<10){
output.style.color="red";
output.textContent="Message must be at least 10 characters";
return;
}

output.style.color="green";
output.textContent="Form submitted successfully";

});
}

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(topBtn){

if(document.documentElement.scrollTop>200){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}
}
};

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});
}