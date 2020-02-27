var arr1 = [1,2,3,4,5];
var arr2 = [7,8];
function firstElement(arr){
	return arr[0];
}
//alert(firstElement(arr1))
/*주석입니다*/
//한줄로도 사용 가능합니다. 
console.log('msg')
//alert(msg)

if (true){
	console.log("1");
}
else if (true){
	console.log("2");
}
else {
	console.log("3");
}

console.log("cafe예시입니다.");
console.log("1. 아아");
console.log("2. 아레");
console.log("3. 카푸치노");
console.log("4. 티");

var choice = parseInt(prompt("메뉴선택 바랍니다."))

console.log(choice + "번을 선택하셨습니다.")

switch(choice){
	case 1:
	   console.log("아아 = 1500");
	   break;
	case 2:
	   console.log("아레 = 1200");
	   break;
	case 3:
	   console.log("카푸치노 = 1000");
	   break;
	case 4:
	   console.log("티 = 1800");
	   break;
	default:
	   console.log("죄송합니다. 다시 선택해주세요.");
	   break;
}

var count = 0;
while (count < 3){
	console.log(count + "숫자는 하나씩 올라갑니다.");
	count++;
}

//랜덤변수 생성 
var a = Math.ceil(Math.random() * 10);

do{
	var ans = parseInt(prompt("1+1=?"))
} while (ans != 2);
console.log("맞혔습니다.")

for (var i = 0, j = 10; i < j; i++,j--){
	console.log(i,j);
}

//object 확인하기!
var obj = {
	name: "object",
	weight: 30,
	isObject: true,
	arr: [1,2,3],
	obj: {property: 1}
}
var property = Object.keys(obj);
console.log("속성 리스트:", property);
for (var propertyName in obj) {
	console.log("\t",propertyName, ":", obj[propertyName])
}

//변수 가림 현상(shadowing)도 일어난다고 한다. 
function shadowing() {
	console.log("F", val);
	val++;
}
var val = 0;
shadowing();
console.log("0", val);
/*그럼 출력값으로 
F 0
0 1 이 나온다.
*/

//method도 사용 가능하다.
function f() {
	console.log(this);
	console.log("f is called");
}
function setName(name) {//새 함수 추가
	this.name = name //this의 이름을 name으로 변경
}
// 객체 o를 만들고 setName 속성에 방금 정의한 함수를 지정
var o = {name: "object", method: f, setName: setName};
// 비슷한 객체 o2를 만들고 name속성의 값은 비워둠
var o2 = {name:"", setName: setName};

o.setName("object1");
o2.setName("object2");

console.log(o,o2);

//closure개념도 존재한다. 
function makeCounterFunction(initVal) {
	var count = initVal;
	function Increase() {
		count++;
		console.log(count);
	}
	return Increase;
}

var counter1 = makeCounterFunction(0);
var counter2 = makeCounterFunction(10);
//makeCounterFunction 함수 바깥에선 count 변수를 건드릴 수 없다
counter1();
counter2();