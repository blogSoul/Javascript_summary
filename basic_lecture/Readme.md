#### section 21 : while 반복문

continue 명령을 만나면 반복문의 맨 끝으로 이동합니다.


#### section 22 : do while 반복문

do while문은 조건문 안에 있는 코드들을 한번 실행하고 조건이 맞는지 확인한다. 


#### section 23 : for 반복문

for문은 조건에 맞춰서 반복문을 실행시킬 수 있다.


#### section 24 : for in 반복문

```
for(var propertyName in obj){
    console.log("\t", propertyName, ": ", obj[propertyName]);
}
```
위에 있는 코드처럼 obj배열을 돌아서 변수로 받습니다. 


#### section 25 : 변수의 유효 범위

초기의 자바스크립트에서는 변수의 유효 범위가 함수의 유효범위(function scope)를 따랐지만, 현재의 자바스크립트에서는 변수의 유효 범위가 블록의 유효범위(block scope)를 따를 수도 있습니다.


#### section 26 : 변수 가림 현상(shadowing) 

