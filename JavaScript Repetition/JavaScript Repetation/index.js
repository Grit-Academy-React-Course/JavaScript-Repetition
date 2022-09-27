/* const v = 5;
console.log(v);
const str = "String";
console.log(str);
console.log(v + str);
console.log(v + 6 + " " + str);
var checker = true;
const car = {
    type: "Volvo",
    color: "Black",
    model: 2022,
    carInfo: function () {
        return `The car is ${this.type} and has the color ${this.color}`
       // return "The car is " + this.type + " and has the color " + this.color
    }
    
}
console.log(car.carInfo());
console.log(car.type);
console.log(car["type"]);

function add(a = 10, b = 2) {
    return a + b;
}
console.log(add(1, 1));

function toCelsius(f) {
    return (5 / 9) * (f - 32);
}
console.log(toCelsius(72));

function buttonClick(event) {
    if (event.target.classList.contains("red")) {
        event.target.classList.remove("red");
    } else {
        event.target.classList.add("red");
    }
    console.log(event.target);
   // alert("Button Clicked");
}
window.addEventListener('DOMContentLoaded', () => {
    const headerText = document.getElementById("header-text");
    if (headerText) {
        headerText.innerHTML = "Js Hello!"
    }
})

function inputChanged(event) {
    console.log(event.target.value);
}
function boxEntered() {
    const headerText = document.getElementById("header-text");
    //debugger;
    if (headerText) {
        headerText.innerHTML = "Box entered"
    }
}
function boxLeave() {
    const headerText = document.getElementById("header-text");
    if (headerText) {
        headerText.innerHTML = "Box leave"
    }
}
function submitForm(event) {
    const inputElement = document.getElementById("input-item");
    if (inputElement) {
        const inputValue = inputElement.value;
        console.log(inputValue);
    }
    event.preventDefault();
    try {
        alertt("Test");
    } catch (e) {
        console.log(e.message);
    } finally {
        console.log("Efter try or catch");
    }
}
 */

/* var carsString = "Volvo, Mazda, Ford";
console.log(carsString.slice(7,12));
console.log(carsString.slice(-7));
console.log(carsString.substring(0,5));
console.log(carsString.substring(5));
console.log(carsString.includes("Mazdaa"));

const carsArray = ["Volvo", "Mazda", "BMW"];
console.log(carsArray);
console.log(carsArray[0]);
console.log(carsArray.join(" - "));
var popedItem = carsArray.pop();
console.log(popedItem);
console.log(carsArray);
carsArray.push("Saab");
console.log(carsArray);
carsArray.unshift("Opel");
console.log(carsArray);

carsArray.forEach(function (value, index, array) {
    console.log(value +"exists at index " + index );
})

const numbers = [30, 20, 10, 5, 4, 88];
numbers.sort(function (a, b) {
    return a - b;
})
console.log(numbers);
numbers.sort(function (a, b) {
    return b - a;
})
console.log(numbers);
const filteredNumbers = numbers.filter(function (x) {
    return x < 10;
})
console.log(filteredNumbers);

const carsObject = [
    { type: "Volvo", model: 2022 },
    { type: "BMW", model: 1990 },
    { type: "FORD", model: 2005 }
];
carsObject.sort(function (a, b) {
    return a.model - b.model
})
console.log(carsObject);
carsObject.sort(function (a, b) {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) { return -1 };
    if (x > y) { return 1 }
    return 0;
});
console.log(carsObject);

 */

/* function showText() {
    console.log("From timeout method");
}
function showIntervalText() {
    console.log("From interval method");
}

setTimeout(showText, 5000)

setInterval(showIntervalText, 10000) */

const carsObject = [
    { type: "Volvo", model: 2022 },
    { type: "BMW", model: 1990 },
    { type: "FORD", model: 2005 }
];
localStorage.setItem("cars", JSON.stringify(carsObject));
const cars = JSON.parse(localStorage.getItem("cars"));
console.log(cars);
console.log("LocalStorage " + cars[0].type);
sessionStorage.setItem("bil", "Volvo");
console.log("SessionStorage " + sessionStorage.getItem("bil"));
