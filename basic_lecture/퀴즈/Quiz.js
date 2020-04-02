var name = prompt('이름:');
var age = prompt('나이:');
var height = prompt('키:');
var person = new Object();
person.name = name;
person.age = age;
person.height = height;
alert('이름 : ' + person.name + '\n '+'나이 : ' + person.age + '\n' + '키 : ' + person.height);