const btn = document.querySelector("button");
const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const yearResult = document.querySelector("#years-res");
const monthResult = document.querySelector("#month-res");
const dayRes = document.querySelector("#day-res");

btn.addEventListener("click",(e) => {
    e.preventDefault();
    const dayError = dayInput.parentElement.querySelector(".error-msg");
    if(dayInput.value === ""){
          dayInput.parentElement.classList.add('error');
          dayError.innerText = "This field is required"; 
    }else if(Number(dayInput.value) >31){
       dayInput.parentElement.classList.add('error'); 
       dayError.innerText = "Must be a valid day";
    } 
    else{
        dayInput.parentElement.classList.remove('error');
    }
    //Month Section
    const monthError = monthInput.parentElement.querySelector(".error-msg");
    if(monthInput.value === ""){
        monthInput.parentElement.classList.add('error');
        monthError.innerText = "This field is required";
    }else if(Number(monthInput.value)>12){
        monthError.parentElement.classList.add('error'); 
        monthError.innerText = "Must be a valid month";
    }
    else{
        monthInput.parentElement.classList.remove('error');
    }
    // Year Section
    const yearError = yearInput.parentElement.querySelector(".error-msg");
    if(yearInput.value === ""){
        yearInput.parentElement.classList.add('error');
        yearError.innerText = "This field is required";
    }else if(Number(yearInput.value)  > new Date().getFullYear()){
        yearError.parentElement.classList.add('error'); 
        yearError.innerText = "Must be in the past";
    }
    else{
        yearInput.parentElement.classList.remove('error');
    }

   const birthDate = new Date(
            Number(yearInput.value),
            Number(monthInput.value) - 1,
            Number(dayInput.value));
    const today = new Date();        

    const hasError = document.querySelectorAll(".input-grp.error").length > 0;
    if(!hasError){
        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();
        if(days < 0){
            months--;
            days += new Date(today.getFullYear(),today.getMonth(),0).getDate();
        }
        if(months < 0){
            years--;
            months += 12;
        }
        yearResult.innerText = years;
        monthResult.innerText = months;
        dayRes.innerText = days;
        
    }
});

