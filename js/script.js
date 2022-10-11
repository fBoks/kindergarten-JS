const dateInput = document.getElementById("month");
const dayCost = document.getElementById("oneDayCost");
const FIO = document.getElementById("FIO");
const days = document.getElementById("days");
const addOptions = document.getElementById("additional");
const calcBtn = document.getElementById("calcBtn");
const clearBtn = document.getElementById("clearBtn");
const resultDiv = document.querySelector(".result");
const result = document.getElementById("result");

var oneDayCost = 600;
var optionCost = 0;

dateInput.addEventListener("change", function () {
    getMonthCost();
});

function getDate() {
    var today = new Date();
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm;
    dateInput.value = today;

    getMonthCost();
}
document.addEventListener("DOMContentLoaded", getDate);

calcBtn.addEventListener("click", function () {
    if (FIO.value != "" && days.value != "") {
        if (days.value > 0) {
            calculation();

            resultDiv.classList.add("is-visible");
        } else {
            alert("Введите количество дней больше 0");
        }
    } else {
        alert("Введите данные");
    }
});

clearBtn.addEventListener("click", function () {
    getDate();
    FIO.value = "";
    days.value = "";
    addOptions.value = "none";
    resultDiv.classList.remove("is-visible");
});

function calculation() {
    var selectedOption = addOptions.value;

    switch (selectedOption) {
        case "none":
            optionCost = 0;
            break;
        case "ball":
            optionCost = 2000;
            break;
        case "paint":
            optionCost = 3000;
            break;
        case "vocal":
            optionCost = 2500;
            break;

        default: break;
    }

    result.value = oneDayCost * days.value + optionCost;
}

function getMonthCost() {
    var selectedDate = new Date(dateInput.value);
    var mm = String(selectedDate.getMonth() + 1).padStart(2, "0");

    switch (mm) {
        case "01":
        case "02":
        case "12":
            oneDayCost = 600;
            break;

        case "03":
        case "04":
        case "05":
        case "09":
        case "10":
        case "11":
            oneDayCost = 400;
            break;

        case "06":
        case "07":
        case "08":
            oneDayCost = 300;
            break;

        default:
            break;
    }

    dayCost.value = oneDayCost;
}
