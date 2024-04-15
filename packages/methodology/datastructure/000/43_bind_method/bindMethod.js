this.distance = 10000;

const roadTrip1 = {
    distance: 3000,
    getDistance: function(unit, caption) {
        return this.distance + unit + caption;
    }
};

const roadTrip2 = {
    distance: 5000
};

const getTripDistance = roadTrip1.getDistance;
const getTripDistance1 = roadTrip1.getDistance.bind(roadTrip2, 'km');;

console.log(getTripDistance());
console.log(getTripDistance1(' in total'));
console.log(this);