function callback(){
    console.log("callback function is called");
}
setTimeout(callback, 3000);
setInterval(callback, 5000);