function shadowing_example(){
    var val = 5;
    console.log("F",val);
    val++;
}

var val = 0;
shadowing_example();
console.log("0", val);