// Part 2: JavaScript Functions — Scope, Parameters & Return Values

//  Addition with Parameters and Return Values using global variable

let a = 10;
let b = 40;
let c = 30;

function addNumber(a, b, c) {
    let value = a + b + c;
    return value;
}

// calling function

let result = addNumber(a, b, c);
console.log(result);
result = addNumber(100, 200, 300);
console.log(result);

//  Function greet user using local variable

function greetUser(firstName, lastName) {
    let message = `Hello ${firstName} ${lastName}, welcome to PLP Web classes!`;
    return message;
}

// calling function

let fullName = greetUser("Johnpaul", "Maduakolam");
console.log(fullName);
fullName = greetUser("Jane", "Onuigbo");
console.log(fullName);

// Cart Total Price Calculation

function addCartPrice(item1, item2,) {
    let totalPrice = item1 + item2;
    return totalPrice;
}

// calling function

let totalPrice = addCartPrice(2500, 1500);
console.log(`Total Price of items in cart is: ${totalPrice}`);

// Reuse totalPrice variable

function multiplyTotalPriceByQuantity(totalPrice, quantity) {
    let finalAmount = totalPrice * quantity;
    return finalAmount;
}

// calling function
let finalPrice = multiplyTotalPriceByQuantity(totalPrice, 3);
console.log(`Final Price after multiplying by quantity is: ${finalPrice}`);


// part 3: JavaScript Events & Event Handlers

// Get Element

let underlay = document.querySelector(".underlay");
let overlay = document.querySelector(".overlay");
let openModal = document.querySelector(".openbtn");


openModal.addEventListener("click", () => {
    underlay.classList.toggle("show-case");
    overlay.classList.toggle("show-case");


    if (underlay.classList.contains("show-case")) {
        openModal.textContent = "Close Modal"
    } else {
        openModal.textContent = "Open Modal"

    }

});



