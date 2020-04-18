#### section 29 : javascript, HTML, CSS

웹브라우저는 자바스크립트 코드를 실행시키면서 HTML과 CSS에 변화가 생기면, 다시 해당 내용을 반영하여 렌더링(rendering)합니다.

html은 웹페이지의 구조를 나타냅니다.
css는 웹페이지 안에 있는 요소의 스타일을 나타냅니다.
자바스크립트는 로직을 통해 문서의 구조와 스타일에 변화를 줍니다.
브라우저에서는 자바스크립트에서 HTML과 CSS에 접근할 수 있는 API를 제공합니다.
API: Application Programming interface

#### section 30 : window 객체

window.location: 현재 브라우저의 주소를 볼 수 있습니다.
window.location.href: 현재 브라우저의 주소창에 입력된 주소를 볼 수 있습니다. 이 값을 수정하면 입력된 주소로 페이지가 이동합니다.
window.navigator: 현재 브라우저에 관한 정보를 볼 수 있습니다. 
window.screen: 현재 디스플레이의 너비와 높이 등을 볼 수 있습니다.
window.document: 현재 웹페이지를 구성하는 HTML과 CSS가 모두 저장되어 있습니다. 이 객체를 이용하면 HTML과 CSS에 접근할 수 있습니다.

#### section 31 : CSS 다루기

```
<link rel = "stylesheet" href = "css.css">
```
여기서 <link> 태그의 rel 속성은 현재 문서와 외부 리소스 사이의 연관 관계를 명시합니다.
CSS는 HTML문서의 요소가 어떻게 표기될지를 정의합니다.
CSS를 작성할 때는 [선택자]{[속성 이름]:[값]; ...} 형태로 적습니다.
CSS는 우선순위가 가장 높은 HTML 태그 안에 정의한 스타일을 가장 먼저 반영하고, 다음으로 스타일 태그 안에 적용한 스타일, 다음으로 링크를 통해 외부 파일에서 불러온 스타일을 반영합니다.


#### section 32 : DOM 알아보기

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


#### section 33 : 단일 엘리먼트 선택하기

document.getElementBy로 시작하는 메서드는 엘리먼트를 한 개만 반환하는 메서드입니다.
document.getElementsBy로 시작하는 메서드는 엘리먼트를 여러 개 반환하는 메서드입니다.
document.getElementById 메서드는 HTML 엘리먼트의 id를 인자로 전달하면 해당 엘리먼드를 반환합니다.
.innerHTML 속성은 엘리먼트 안의 HTML 코드를 변경합니다.
.innerText 속성은 엘리먼트 안의 텍스트를 변경합니다.
.style 속성은 CSS를 변경합니다.
getAttribute() 메서드는 엘리먼트의 속성 값을 얻어 오며 인자 한개(속성 이름)를 받습니다. 직접 객체에 동기화되지 않은 속성에도 접근할 수 있습니다.
setAttribute() 메서드 역시 엘리먼트의 속성 값을 얻어 오지만 인자를 두 개(속성 이름과 설장힐 속성 값) 받습니다. 마찬가지로 객체에 동기화되지 않은 속성에 대해서도 값을 설정할 수 있습니다.


#### section 34 : 다중 엘리먼트 선택하기
 
 * Chrome에선 개발자 도구 단축키는 ctrl + shift + I입니다. (2020-04-03기준)

getElementByTagName() 메서드는 인자로 HTML 엘리먼트의 테그 이름을 전달하며, 해당 테크의 모든 엘리던트가 배열로 반환됩니다.
getElementByByClassName() 메서드는 인자로 클래스 이름을 전달하며, 해당 클래스의 모든 엘리먼트가 배열로 반환됩니다.
getElementByName() 메서드는 인자로 이름을 전달하며, 해당 이름 속성을 가진 모든 엘리먼트가 배열로 반환됩니다.
input 엘리먼트에 입력된 값을 값 속성으로 얻어 올 수 있습니다.(getAttribute()메서드로는 받아 올 수 없습니다.)


#### section 35 : CSS 선택자를 이용해서 엘리먼트 선택하기

document.querySelector: CSS 선택자를 기반으로 엘리먼트를 선택하는 메서드입니다. 조건에 맞는 엘리먼트가 여러 개면 첫 번째 엘리먼트만 반환합니다.
document.querySelectorAll: CSS 선택자를 기반으로 만족하는 엘리먼트를 모두 선택하는 메서드입니다.
CSS 선택자를 작성할 때, ID를 기반으로 선택하려면 샵(#)을 사용합니다.
CSS 선택자를 선택할 때, 태그 이름을 기반으로 선택하려면 이름만 적어 주면 됩니다.
CSS 선택자를 선택할 때, 클래스를 기반으로 선택하려면 마침표를 사용합니다.
여러 개를 선택하려면 쉼표를 사용해소 구분해 줍니다.
-> css 선택자
```
document.querySelectAll("h1, h2");
```
이외에도 대괄호([])를 이용해서 속성에 대한 필터를 넣을 수 있고 오른쪽 꺾쇠(>)를 이용해서 자식(child)중에서 검색할 수도 있습니다. 쉼표(,)를 이용해서 엘리먼트를 여러 개 선택할 수 있습니다.


#### section 36 : 엘리먼트를 추가하고 삭제하기

엘리먼트를 추가하는 메서드에는 createElement()와 cloneNode()가 있습니다.
엘리먼트를 배치하는 메서드에는 appendChild()와 insertBefore()가 있습니다.
엘리먼트를 제거하는 메서드에는 removeChild()가 있습니다.


#### section 37 : 콜백 함수

함수가 객체에 바인드(bind)된 경우를 메서드라고 부릅니다.
setTimeout()과 setInterval() 함수를 실행했을 때 반환되는 정수 값은 각 타임아웃(timeout) 혹은 간격(interval)에 대한 ID입니다.
콜백 함수란 조건을 등록해 두고 그 조건을 만족했을 때 호출되는 함수를 뜻합니다.
clearTimeout()함수는 함수를 호출한 결과로 반환된 ID를 인자로 받아 예약되어 있던 함수 호출을 취소합니다.
clearInterval()함수는 setInterval()함수를 호출한 결과로 반환된 ID를 인자로 받아 주기적으로 호출되던 함수 호출을 취소하는 함수입니다.


#### section 38 : HTML태그 속성에 이벤트 핸들러 추가하기

폼 이벤트(Form Event): HTML 문서의 폼 엘리먼트에 변화가 생기거나 제출(submit)버튼 등을 눌렸을 때, 발생하는 이벤트입니다. 
윈도우 이벤트(Window Event): 페이지가 모두 로드되었을 때 발생하는 이벤트로 onload event가 대표적입니다.
마우스 이벤트(Mouse Event): 사용자가 마우스를 조작했을 때 발생하는 이벤트입니다.
키 이벤트(Key Event): 사용자가 키보드를 조작했을 때 발생하는 이벤트입니다.
브라워에서 다양한 이유(사용자 조작이나 장치 환경의변화 등)로 발생하는 사건을 이벤트(Evevnt)라고 합니다. 그리고 이러한 이벤트에 대처하는 프로그램을 이벤트 핸들러(event Handler)라고 합니다.
이벤트가 발생하고 해당 핸들러(handler)가 호출되는 과정을 이벤트가 "파이어(fire)한다"거나 "트리거(trigger)된다"라고 표현하기도 합니다.
keydown 이벤트는 키 이벤트로 키보드의 키가 눌렀을 때 발생합니다.
change이벤트는 폼이벤트로 form 엘리먼트의 내용이 변경되었을 떄 발생합니다.


#### section 39 : 자바스크립트에서 이벤트 핸들러 설정하기

addEvenvtListener란 특정 이벤트에 대해 듣고 있을 프로그램(Listener)을 추가한다는 뜻입니다. 결국 특정 이벤트를 처리할 이벤트 핸들러를 추가한다는 뜻입니다.


#### section 44 : script 태그의 위치에 따라 달라지는 실행 순서

HTML 페이지에서 스크립트는 접근할 엘리먼트보다 나중에 있는게 훨씬 더 좋은 것을 알 수 있습니다.
반대로 HTML 파싱 도중에 스크립트가 실행될 수 있기 때문에 스크립트 실행으로 인해 웹 페이지의 로딩 속도가 느려질 수 있습니다. 
최근 표준에서는 스크립트에 async 혹은 defer 속성을 추가해서 스크립트 실행과 문서의 로딩이 비동기적으로 동시에 진행되도록 할 수 있습니다.


#### section 45 : 크롬 디버거 활용하기

프로그램 오류에는 Syntax error : 문법적 오류 , Semantic error : 프로그램의 논리적 오류 가 존재합니다.
Source 탭에서 중단점 사용하면 프로그램 실행 도중 원하는 위치에서 멈출 수 있습니다.


#### section 46 : 익명 함수(anonymous function)와 함수 즉시 호출

익명 함수(anonymous function), 즉 이름 없는 함수로 한번만 호출되고 말기 때문에 굳이 이름이 없어도 됩니다.


#### section 47 : 예외 처리

try, catch, finally 구문을 이용해서 예외 처리를 진행합니다. 


#### section 48 : 예외 처리 활용하기

첫 순서로 try 구문이 실행이 된다는 것을 명심합시다!
