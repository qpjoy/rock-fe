// function getProduct(num1, num2) {
//     return num1 * num2
// }

function getProduct(num1) {
    return function(num2) {
        return num1 * num2;
    }
}

getProduct(10)(20);

function getTravelTime(distance, speed) {
    return distance / speed;
}

function getTravelTime(distance) {
    return function(speed) {
        return distance / speed;
    }
}

getTravelTime(400, 50);
getTravelTime(400, 60);
getTravelTime(400, 80);

const travelTimeBosNyc = getTravelTime(500);
console.log(travelTimeBosNyc(50));