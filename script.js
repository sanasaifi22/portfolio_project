function Validation(){
   const form= document.getElementById("regform");
   const message= document.getElementById("message");

   form.addEventListener("submit",function(e){
    e.preventDefault();

    const name=document.querySelector(".name").value.trim();
    const email=document.querySelector(".email").value.trim();
    const number=document.querySelector(".mobile").value.trim();
    const emailsubject=document.querySelector(".emailsubject").value.trim();
    const textarea =document.querySelector(".textarea").value.trim();
    console.log("Name:", name);
    console.log("Email:", email);KO
    console.log("Number:", number);
    console.log("Subject:", emailsubject);
    console.log(" text areaSubject:", textarea);
    if(name===""||email===""|| number===""||emailsubject===""){
        message.innerHTML="Please fill all fields";
        return;
    }
    message.style.color="white"
    message.innerHTML = `✅ Registered Successfully!<br> 
<strong>Name:</strong> ${name}<br>
<strong>Email:</strong> ${email}<br>
<strong>Number:</strong> ${number}<br>
<strong>Subject:</strong> ${emailsubject}`;

form.reset();
   })

   }
Validation();