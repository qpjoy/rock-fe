var house = {
    price: 100000,
    squareFeet: 2000,
    owner: 'Tayler',
    getPricePerSquareFoot: function() {
        return house.price / house.squareFeet;
    }
};

console.log(house.price);
console.log(house.getPricePerSquareFoot());