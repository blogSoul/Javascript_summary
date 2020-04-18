## :smile: Content Summary :smile:


#### section 49 : 이미지 갤러리 만들기

context - padding - border - margin - position 순으로 생각하면 됩니다.
padding과 border는 모두 width에 포함되지 않습니다.
margin은 다른 태그와의 거리를 나타냅니다.
border은 영역을 표현하는 선의 두께를 나타냅니다.
padiing은 context 영역에서부터 얼마나 멀리 할 것인지 나타냅니다.

*css 안에서 모르는 특성들

z-index : 기본적으로 엘리먼트들이 기본적으로 어떻게 쌓이는지 설명합니다.
opactiy : 요소의 투명도를 설정할 수 있습니다.
float : 웹페이지에서 이미지를 어떻게 띄워서 텍스트와 함께 배치할 것인가에 대한 속성입니다.


#### section 50 : 이미지 선택 기능 만들기

```
div.onclick = function() {
    if(this.getAttribute("class").indexOf("image-selected") == -1){
       this.setAttribute("class", "image image-selected");
    }
    else{
       this.setAttribute("class", "image");
    };
};
```
여기에서 -1과 비교하는 이유는 클래스 속성 문자열에 image-selected라는 글자가 없는 경우 indexOf() 메서드 호출의 반환값이 -1이기 때문입니다.


#### section 51 : 전체 선택 기능 만들기

만약 local server refresh가 안되면 개발자 도구 -> Network -> Disable cache를 해줍니다.
해당 함수가 여러 엘리먼트의 이벤트 핸들러로 등록되어 있다면 this 인자를 이용해서 핸들러로 전달하는게 효율적입니다.
일반적으로 원하는 엘리먼트를 얻어 오기 위해서 document.getElementByName() 메서드를 이용하거나 엘리먼트에 di 속성을 설정하고 document.getElementById() 메서드를 이용합니다.


#### section 52 : 자세히 보기 기능 만들기

this.timerId라는 속성을 만들어서 div 태그에 임시적으로 timerId를 기록해 두는 게 좋습니다.
슬라이드 쇼가 끝나고 중단점에 프로그램이 걸리지 않는 것을 알 수 있습니다. clearInterval() 함수를 통해 더 이상 setInterval의 콜백 함수가 호출되지 않기 때문입니다.
개발가 도구 안에 Sources를 통해서 디버깅을 할 수 있습니다.
