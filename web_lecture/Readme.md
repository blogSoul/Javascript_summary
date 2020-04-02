#### section 29

웹브라우저는 자바스크립트 코드를 실행시키면서 HTML과 CSS에 변화가 생기면, 다시 해당 내용을 반영하여 렌더링(rendering)합니다.

html은 웹페이지의 구조를 나타냅니다.
css는 웹페이지 안에 있는 요소의 스타일을 나타냅니다.
자바스크립트는 로직을 통해 문서의 구조와 스타일에 변화를 줍니다.
브라우저에서는 자바스크립트에서 HTML과 CSS에 접근할 수 있는 API를 제공합니다.
API: Application Programming interface

#### section 30

window.location: 현재 브라우저의 주소를 볼 수 있습니다.
window.location.href: 현재 브라우저의 주소창에 입력된 주소를 볼 수 있습니다. 이 값을 수정하면 입력된 주소로 페이지가 이동합니다.
window.navigator: 현재 브라우저에 관한 정보를 볼 수 있습니다. 
window.screen: 현재 디스플레이의 너비와 높이 등을 볼 수 있습니다.
window.document: 현재 웹페이지를 구성하는 HTML과 CSS가 모두 저장되어 있습니다. 이 객체를 이용하면 HTML과 CSS에 접근할 수 있습니다.

#### section 31

```
<link rel = "stylesheet" href = "css.css">
```
여기서 <link> 태그의 rel 속성은 현재 문서와 외부 리소스 사이의 연관 관계를 명시합니다.
CSS는 HTML문서의 요소가 어떻게 표기될지를 정의합니다.
CSS를 작성할 때는 [선택자]{[속성 이름]:[값]; ...} 형태로 적습니다.
CSS는 우선순위가 가장 높은 HTML 태그 안에 정의한 스타일을 가장 먼저 반영하고, 다음으로 스타일 태그 안에 적용한 스타일, 다음으로 링크를 통해 외부 파일에서 불러온 스타일을 반영합니다.


#### section 32 

개발자 도구 단축키 : ctrl + shift + I
```
document.children[0].children[1].parentNode 
```
: 부모 노드를 조회합니다.

```
document.children[0].children[1].firstElementChild 
```
: 첫번째 자식 노드를 조회합니다.
-> lastElementChild : 마지막 자식 노드를 조회합니다.

```
link = document.children[0].children[1];
link.nextElementSibling;
```
: 다음 형제 노드를 조회합니다.
-> previousElementSibling : 이전 형제 노드를 조회합니다.

DOM이란 컴퓨터가 문서를 잘 처리할 수 있도록 문서의 구조를 약속한 것입니다.
DOM은 트리 형태를 따릅니다.(족보나 가계도와 비슷합니다.)
document 객체는 최상위 객체로 자바스크립트에서 document 명령으로 접근합 수 있습니다.
DOM : Document Object Model -> 문서 객체 모델


#### section 33

document.getElementBy로 시작하는 메서드는 엘리먼트를 한 개만 반환하는 메서드입니다.
document.getElementsBy로 시작하는 메서드는 엘리먼트를 여러 개 반환하는 메서드입니다.
document.getElementById 메서드는 HTML 엘리먼트의 id를 인자로 전달하면 해당 엘리먼드를 반환합니다.
.innerHTML 속성은 엘리먼트 안의 HTML 코드를 변경합니다.
.innerText 속성은 엘리먼트 안의 텍스트를 변경합니다.
.style 속성은 CSS를 변경합니다.
getAttribute() 메서드는 엘리먼트의 속성 값을 얻어 오며 인자 한개(속성 이름)를 받습니다. 직접 객체에 동기화되지 않은 속성에도 접근할 수 있습니다.
setAttribute() 메서드 역시 엘리먼트의 속성 값을 얻어 오지만 인자를 두 개(속성 이름과 설장힐 속성 값) 받습니다. 마찬가지로 객체에 동기화되지 않은 속성에 대해서도 값을 설정할 수 있습니다.


#### section 34