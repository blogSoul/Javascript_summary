while(true){
	var password = prompt('비밀번호:');
	if(password == '1234'){
		console.log("정답~~!");
		alert("정답~~!");
		break;
	}
	else{
		console.log("오답~~!");
		alert("오답~~!");
		continue;
	}
}