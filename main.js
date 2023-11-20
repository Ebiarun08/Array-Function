let array = [];

function push() {
    var input = document.getElementById("input").value;
    array.push(input);
    document.getElementById("display").value = array;
}

function pop() {
    array.pop();
    document.getElementById("display").value = array;
}

function toString() {
    let arrayString = array.join(', ');
    document.getElementById("display").value = arrayString;
}

function shift() {
    array.shift();
    document.getElementById("display").value = array;
}

function unshift() {
    var inputValue = document.getElementById("input").value;
    array.unshift(inputValue);
    document.getElementById("display").value = array;
}

function dele() {
    array = []; // Clear the array
    document.getElementById("display").value = "";
}

function concat() {
    var input = document.getElementById('input').value;
    var input1 = document.getElementById('input1').value;
    var inp3 = input.concat(input1);
    document.getElementById("display").value = inp3;
}

function filter() {
    // Example: Filtering even numbers
    var filteredArray = array.filter(function (element) {
        return element % 2 === 0;
    });
    document.getElementById("display").value = filteredArray;
}

function find() {
    // Example: Finding the first occurrence of the value 3
    var foundElement = array.find(function (element) {
        return element === 3;
    });
    document.getElementById("display").value = foundElement;
}

function sort() {
    array.sort(function (a, b) {
        return a - b;
    });
    document.getElementById("display").value = array;
}

function reverse() {
    array.reverse();
    document.getElementById("display").value = array;
}

function slice() {
    // Example: Getting a slice from index 1 to index 3
    var slicedArray = array.slice(1, 4);
    document.getElementById("display").value = slicedArray;
}

function splice() {
    // Example: Removing 2 elements starting from index 1
    array.splice(1, 2);
    document.getElementById("display").value = array;
}
