document.getElementById("day").addEventListener("input", (event) => {
    const inputDate = document.getElementById("day");
    const dateData = inputDate.value;
    const regex = /^[0-9]$/;
    const check = regex.test(dateData);
    const format = document.querySelector(".error");
    const dayLabel = document.querySelector(".day");
    
    if (dateData > 31) {
        format.innerHTML = "Must be a valid day";
        format.classList.add("block");
        dayLabel.classList.add("invalid");
    }
});

document.getElementById("month").addEventListener("input", (event) => {
    const inputMonth = document.getElementById("month");
    const monthData = inputMonth.value;
    const regex = /^[0-9]$/;
    const check = regex.test(monthData);
    const format = document.querySelector(".monthError");
    const monthLabel = document.querySelector(".month");

    if (monthData > 12) {
        format.innerHTML = "Must be a valid month";
        format.classList.add("block");
        format.classList.add("error");
        monthLabel.classList.add("invalid");
    }
});

document.getElementById("year").addEventListener("input", (event) => {
    const inputYear = document.getElementById("year");
    const yearData = inputYear.value;
    const regex = /^[0-9]$/;
    const check = regex.test(yearData);
    const format = document.querySelector(".yearError");
    const Data = new Date();
    const yearLabel = document.querySelector(".year");
    
    if (yearData > Data.getFullYear()) {
        format.innerHTML = "Must be in the future";
        format.classList.add("block");
        format.classList.add("error");
        yearLabel.classList.add("invalid");
    } 
    
    if (yearData == Data.getFullYear()) {
        format.innerHTML = "";
        format.classList.remove("block");
        format.classList.remove("error");
    } 
});

document.getElementById("button").addEventListener("click", (event) => {
    const clientDays = document.getElementById("day").value.trim();
    const clientMonths = document.getElementById("month").value.trim();
    const clientYears = document.getElementById("year").value.trim();
    const birthYear = document.querySelector(".birthYear");
    const birthMonth = document.querySelector(".birthMonth");
    const birthDay = document.querySelector(".birthDay");
    const Data = new Date();
    const userYear = Data.getFullYear() - clientYears;
    const userMonth = 12 - clientMonths;
    const userDay = 31 - clientDays;
    const dayLabel = document.querySelector(".day");
    const monthLabel = document.querySelector(".month");
    const yearLabel = document.querySelector(".year");
    const dayError = document.querySelector(".error");
    const monthError = document.querySelector(".monthError");
    const yearError = document.querySelector(".yearError");

    if (userDay < 0) {
        birthDay.innerHTML = "0";
    }

    if (!clientDays || !clientMonths || !clientYears) {
        dayLabel.classList.add("invalid");
        monthLabel.classList.add("invalid");
        yearLabel.classList.add("invalid");
        dayError.innerHTML = "This field is required";
        dayError.classList.add("error");
        dayError.classList.add("block");
        monthError.innerHTML = "This field is required";
        monthError.classList.add("error");
        monthError.classList.add("block");
        yearError.innerHTML = "This field is required";
        yearError.classList.add("error");
        yearError.classList.add("block");
    } else if (clientDays || clientMonths || clientYears){
        birthYear.innerHTML = `${userYear}`;
        birthMonth.innerHTML = `${userMonth}`;
        birthDay.innerHTML = `${userDay}`;
        dayLabel.classList.remove("invalid");
        monthLabel.classList.remove("invalid");
        yearLabel.classList.remove("invalid");
        dayError.innerHTML = "";
        dayError.classList.remove("error");
        dayError.classList.remove("block");
        monthError.innerHTML = "";
        monthError.classList.remove("error");
        monthError.classList.remove("block");
        yearError.innerHTML = "";
        yearError.classList.remove("error");
        yearError.classList.remove("block");
    }
});





