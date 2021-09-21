const square = function (x) {
    return x * x;
}

const squareArrow = x => {
    return x * x;
};
console.log(square(8));
console.log(squareArrow(9));




//const getFirstName = getName => {
 //return name = getName.split(' ')[0];
//}

//console.log(getFirstName('Mike Smith'));

const getFirstName = getName => getName.split(' ')[0];

console.log(getFirstName('Mike Smith'));

