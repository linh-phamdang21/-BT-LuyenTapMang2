function bai1() {
    let arr = [
        [0, 1, 2, 3],
        [2, 4, 6, 8],
        [3, 5, 7, 9]
    ];
    let output = "";
    for (let i in arr) {
        output += "row " + i + "\n";
        for (let j in arr[i]) {
            output += arr[i][j] + "\n";
        }
    }
    alert(output);
}

function bai2() {
    let inputStr = prompt("Enter your string: ");
    let arr = [];
    arr = inputStr.split("");

    alert("Your string: " + inputStr);
    alert("Your new string: " + (arr.reverse()).join(""));
}

function bai3() {
    let strArr = ['l', 'i', 'n', 'h', '2', '1', '4', 'h', 'e', 'l', 'l', 'o'];
    let count = 0;
    alert("Your array: " + strArr.join(","));
    alert("Array's length: " + strArr.length);
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i]/1) {
            count += 1;
        }
    }
    alert("Amount of Number in array: " + count);
}

function bai4() {
    let inputStr = prompt("Enter your string: ");
    let arr = inputStr.split(" ");
    alert("Your string has " + arr.length + " words");
}

function bai5() {
    let str1 = prompt("Enter string 1: ");
    let str2 = prompt("Enter string 2: ");
    if (str1 === str2){
        alert("Str1 is same as Str2");
    } else {
        alert("Str1 is different with Str2");
    }
}

function bai6() {
    let inputStr = prompt("Enter a string: ");
    let arr = inputStr.split("");
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === "-"){
            arr[i] = "_";
        }
    }

    alert("Your string: " + inputStr);
    alert("Your new string: " + arr.join(""));
}