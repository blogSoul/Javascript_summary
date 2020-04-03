console.log("lecture21");

var count = 0;
var a = Math.ceil(Math.random()*10); // ceil은 올림함수입니다.
var b = Math.ceil(Math.random()*10);
var solution = a*b;
var ans;
    
while(true){
    ans = parseInt(prompt(a+"*"+b+"=?"));
    if(ans != solution){
        console.log((++count) + "번 틀렸습니다. 다시 도전하세요.");
        continue;
    }
    ans = parseInt(prompt("1+1=?"));
    if(ans != 2){
        console.log((++count) + "번 틀렸습니다. 다시 도전하세요.");
        continue;
    }
    ans = parseInt(prompt("7-3=?"));
    if(ans != 4){
        console.log((++count) + "번 틀렸습니다. 다시 도전하세요.");
        continue;
    }
    ans = parseInt(prompt("9*7=?"));
    if(ans != 63){
        console.log((++count) + "번 틀렸습니다. 다시 도전하세요.");
        continue;
    }
    break;
}
console.log("모든 문제를 풀었습니다.");