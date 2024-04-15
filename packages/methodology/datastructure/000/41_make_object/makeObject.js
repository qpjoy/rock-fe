const myBoat = {
    length: 24,
    maxSpeed: 45,
    passengers: 14,
    getLength: function() {
        return this.length;
    }
}

const student = new Object();
student.grade = 12;
student.gradePointAverage = 3.7;
student.classes = ["English", "Algebra", "Chemistry"];

student.getClasses = function() {
    return this.classes;
}

function Car(color, brand, year) {
    this.color = color;
    this.brand = brand;
    this.year = year;
}

Car.prototype.getColor = function() {
    return this.color
}

const carlysCar = new Car('blue', 'ferarri', 2015);
const jimsCar = new('red', 'tesla', 2014);
console.log(carlysCar.getColor());
console.log(jimsCar.getColor());