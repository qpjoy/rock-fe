var x = 10;

function y() {
    // function x() {}
    x = 100;
    return;
    function x() {}
}

y();

console.log(x);
// 10