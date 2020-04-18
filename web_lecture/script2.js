var sum = 0;

for(var i = 1; i <= 50; i++){
    sum += i;
}

(function a(){
    for(var i = 1; i <= 5; i++){
        console.log(i);
    }
})();

for(; i <= 100; i++){
    sum += i;
}

console.log(sum);

function callback() {
    console.log("timeout");
}
setTimeout(callback,3000);

setTimeout(
    function callback() {
        console.log("timeout");
    }
    , 5000    
);

setTimeout(
    function() {
        console.log("timeout");
    }
    , 7000);