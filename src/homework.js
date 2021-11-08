//Ödex 1 Asal Sayı Bulma
function findPrimeNumber(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let numbersCount = 0;
        for (let j = 2; j < numbers[i] / 2; j++) {
            if (numbers[i] % j == 0) {
                numbersCount ++
            }
        }
        if (numbersCount) {
            console.log(numbers[i] + ' ' + "Sayısı asal değildir!")
        }
        else{
            console.log(numbers[i] + ' ' + "Sayısı asaldır.")
        }
    }
    
}

findPrimeNumber(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50)

//Ödev 2 Arkadaş Sayı Bulma

let sum1 = 0;
let sum2 = 0;
function findAmicableNumbers(number1, number2) {

    for (let i = 1; i <= number1 / 2; i++) {
        if (number1 % i == 0) {
            sum1 = sum1 + i
            console.log(i);
        }
    }

    for (let i = 1; i <= number2 / 2; i++) {
        if (number2 % i == 0) {
            sum2 = sum2 + i
            console.log(i);
        }

    }

    console.log("sum1: " + sum1);
    console.log("sum2: " + sum2);
    if (sum1 == number2 && sum2 == number1) {
        console.log(number1 + " ve " + number2 + " arkadaş sayılardır.");
    }
    else{
        console.log(number1 + "ve" + number2 + "arkadaş sayı değildir")
    }
}

findAmicableNumbers(66992 , 66928)

//Ödev 3 0-1000 Arası Mükemmel Sayı Bulma

for (let i = 2; i < 1000; i++) {
    let sum3 = 0;
    for (let j = 1; j < i; j++) {
        if (i % j == 0) {
            sum3 = sum3 + j;
        }
    }
    if (sum3 == i) {
        console.log(i);
    }
}

//Ödev 4 0-1000 Arası Asal Sayı Bulma

let count;
for (let i = 3; i < 1000; i++) {
    count = 0
    for (let j = 2; j < i; j++) {

        if (i % j == 0) {
            count++
        }
    }
    if (count == 0) {
        console.log(i);
    }
}