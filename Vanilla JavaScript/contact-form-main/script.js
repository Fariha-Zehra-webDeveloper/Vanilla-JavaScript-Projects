let form = document.querySelector(".contct-form");
let firstName = document.querySelector("#first");
let lastName = document.querySelector("#last");
let mail = document.querySelector(".mail");
let general = document.querySelector("#general");
let support = document.querySelector("#support");
let mssg = document.querySelector(".mssg");
let consent = document.querySelector("#consent");
let errorMsg = document.querySelectorAll(".error-msg");
let btn = document.querySelector(".btn");

btn.addEventListener('click',function(e){
   e.preventDefault();
   let isValid = true;
   if(firstName.value === ""){
    errorMsg[0].style.display = "block";
    firstName.style.borderColor = "var(--clr-Red)";
    isValid = false;
   } else{
    errorMsg[0].style.display = "none";
    firstName.style.borderColor = "var(--clr-Grey-500)";
   }
   if (lastName.value === "") {
        errorMsg[1].style.display = "block"; 
        lastName.style.borderColor = "var(--clr-Red)";
        isValid = false;
    } else {
        errorMsg[1].style.display = "none";
        lastName.style.borderColor = "var(--clr-Grey-500)";
    }
    if (mail.value === "") {
        errorMsg[2].innerText="This field is required";
        errorMsg[2].style.display = "block"; 
        mail.style.borderColor = "var(--clr-Red)";
        mail.setAttribute("placeholder","email@example.com");
        isValid = false;
    } else if(!validateEmail(mail.value)){
        errorMsg[2].innerText = "please enter a valid email address";
        errorMsg[2].style.display = "block"; 
        mail.style.borderColor = "var(--clr-Red)";
        isValid = false;
    }   
    else {
        errorMsg[2].style.display = "none";
        mail.style.borderColor = "var(--clr-Grey-500)";
        mail.setAttribute("placeholder","");
    }
    if (!general.checked && !support.checked) {
        errorMsg[3].style.display = "block"; 
        general.style.borderColor = "var(--clr-Red)";
        isValid = false;
    }else{
        errorMsg[3].style.display = "none";
        general.style.borderColor = "var(--clr-Grey-500)";
    }

    if (mssg.value === "") {
        errorMsg[4].style.display = "block"; 
        isValid = false;
    } else {
        errorMsg[4].style.display = "none";
        mssg.style.borderColor = "var(--clr-Grey-500)";
    }
    if (!consent.checked) {
        errorMsg[5].style.display = "block"; 
        consent.style.borderColor = "var(--clr-Red)";
        isValid = false;
    } else {
        errorMsg[5].style.display = "none";
        consent.style.borderColor = "var(--clr-Grey-500)";
    }


    if (isValid) {
        const successToast = document.querySelector("#success-msg");
        successToast.classList.add("show");
        form.reset();
        errorMsg.forEach(msg = msg.style.display = "none");
        firstName.style.borderColor = "var(--clr-Grey-500)";
        lastName.style.borderColor = "var(--clr-Grey-500)";
        mail.style.borderColor = "var(--clr-Grey-500)";
        mssg.style.borderColor = "var(--clr-Grey-500)";

        setTimeout(()=>{
            successToast.classList.remove("show");
        },3000);

    }
});
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
