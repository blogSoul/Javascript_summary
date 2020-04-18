var req = new XMLHttpRequest();// 객체 생성
req.open("GET", "./image_list.json");// json형식 파일 불러오기
req.onreadystatechange = function() {
  if (this.readyState == 4) { // 모든 데이터가 정삭적으로 수신된 경우입니다.
  // console.log(this.response);
  var data = JSON.parse(this.response);
  for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.setAttribute("class", "image");
      div.onclick = function() {
         this.classList.toggle("image-selected");
      };
      div.onmouseover = function() {
         var element = this;
         this.thisId = setTimeout(function() {
            element.classList.add("image-magnified");
         }, 1000); // 시간을 1초로 설정 
      };
      div.onmouseout = function() {
         clearTimeout(this.timerId);
         this.classList.remove("image-magnified");
      }
      var img = document.createElement("img");
      img.src = data[i];
      div.appendChild(img);
      document.body.appendChild(div);
      }
  }
}
req.send();

function selectAll(btn) {
   var images = document.getElementsByClassName("image");
   for(var i = 0; i < images.length; i++){
      if(btn.value == "Unselect All"){
         images[i].classList.remove("image-selected");
      } 
      else {
         images[i].classList.add("image-selected");
      }        
   }

   if(btn.value == "Unselect All"){
      btn.value = "select All";
   } 
   else {
      btn.value = "Unselect All";
   } 
}

function slideshow(btn){
   var images = document.getElementsByClassName("image");
   var index = 0;
   images[index].classList.add("image-magnified");

   var intervalId = setInterval(function() {
      images[index].classList.remove("image-magnified");
      index++;
      if(index < images.length){
         images[index].classList.add("image-magnified");
      }
      else{
         clearInterval(intervalId);
      }
    }, 1000);
}