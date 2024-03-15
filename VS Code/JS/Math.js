/*1*/
// var akash = 35;
// var rohim= 45;
// var korim = 19;
// var total = akash+ rohim+ korim;
// var average = total /3;
// console.log(average);

// var akash = 35;
// var rohim= 45;
// var ifKorim= 24;
// var total = akash+ rohim+ ifKorim;
// var remainder = total%3;
// console.log(remainder);



/*2*/
// var totalApple =14;
// var labib = 6;
// var fahad = 6;
// var labibFahad = labib+ fahad;
// var remainder= totalApple%labibFahad;
// console.log(remainder);

/*3*/
// for(var i = 2; i<=20; i++) {
//     console.log(i);
// }
// for(var i =20; i>=2; i--) {
//     console.log(i);
// }
/*4*/

// var number = true;
// console.log (typeof number);

/*5*/

// var num1=1;
// var num2 = 3;
// var division = num1/num2;
// // console.log(division);
// var total = division.toFixed(2);
// // console.log(total);
// var convert = parseFloat(total);
// console.log(convert);


/*6*/

var numbers = [71, 82, 86, 92, 81, 88, 94];
// console.log(numbers[2]);
// numbers[3]= 100;
// console.log(numbers);
// var number =  numbers.indexOf(88);
// console.log(number);

// var number = numbers.shift();
// console.log(numbers);

// var number = numbers.push(45);
// console.log(numbers);

//  var number = numbers.slice(2,5);
//  console.log(number);
/*7*/
var namee = 'publo escober';
var search = namee.includes('escober');
console.log(search);

var search = namee.substring(1,10);
console.log(search);


/*8*/
let i = 1;
while(i<20){
    i+=2;
    console.log(i);
}
/*9*/
function singara(money){
    console.log('singara kinbo');
}
singara(5);

/*10*/
function singara(total, money){
    var pabo = total/money;
    return pabo;
}
var average = singara(200, 10);
console.log(average);

/*11*/
function allNum(num1, num2, num3, num4){
    var sum = num1 + num2 + num3 + num4;
    return sum;
}
var number = allNum(11, 22, 25, 50);
console.log(number);