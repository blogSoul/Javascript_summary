var obj = {
    name : "object",
    weight: 30,
    isObject: true,
    arr: [1, 2, 3],
    obj: {property: 1}
};

console.log("for 구문으로 object property 반복하기");
var property_list = Object.keys(obj);
console.log("Property List : ", property_list);

for(var i =0; i< property_list.lenght; ++i){
    var propertyName = property_list[i];
    console.log("\t", propertyName, ": ", obj[propertyName]);
}
// obj[propertyName] : key에 맞는 값을 반환받습니다.

console.log("\n\n for in 구문으로 object property 반복하기");

for(var propertyName in obj){
    console.log("\t", propertyName, ": ", obj[propertyName]);
}