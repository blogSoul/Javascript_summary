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
         if(this.getAttribute("class").indexOf("image-selected") == -1){
            this.setAttribute("class", "image image-selected");
         }
         else{
            this.setAttribute("class", "image");
         };
      };
      var img = document.createElement("img");
      img.src = data[i];
      div.appendChild(img);
      document.body.appendChild(div);
      }
  }
}

req.send();

function selectAll(){
   var images = document.getElementsByClassName("image");
   for(var i = 0; i < images.length; i++){
      image[i].classList.add("image-selected");
   }
}
