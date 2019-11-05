var req = new XMLHttpRequest();// 객체 생성
req.open("GET", "./json/image_list.json");// json형식 파일 불러오기
req.onreadystatechange = function() {
  if (this.readyState == 4) {
  // console.log(this.response);
  var data = JSON.parse(this.response);
  for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.setAttribute("class", "image");
      div.onclick = function(){
         this.classList.toggle("image-selected")
         //클릭을 하면 속성을 부여한다.
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
