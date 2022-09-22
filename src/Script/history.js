//window.ready 보다 document.ready 가 먼저 실행됩니다.
//window.ready 는 페이지 내의 이미지를 포함하여 모든 리소스가 로드 되고나서 실행되고
//document.ready 는 태그 등의 세팅이 완료 되었을 때 실행되기 때문입니다
$(document).ready(() => { //가장 먼저 실행


  // Trigger Navigation toggle button
  //JQuery - animation 이벤트(toggleClass(), trigger())
  $('.trigger').on('click', function () {
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  // Trigger .gnb a 클릭 시 해당 위치로 스크롤 후 네비게이션 닫힘.
  $('.gnb a').on('click', function () {
    $('.gnb, .trigger').removeClass('active')
  })

  // jQuery.scrollTo
  $('.gnb a, .goToTop').on('click', function (e) {
    $.scrollTo(this.hash || 0, 800) //window.scrollTo(x-좌표, y-좌표)
    e.preventDefault()
  })

  // scroll down 시 active class 추가
  $(window).on('scroll', () => {
    $(window).scrollTop() > 50 ? $('header, .goToTop').addClass('active') : $('header, .goToTop').removeClass('active')
  })
})

//window.onload: 문서의 모든 콘텐츠(img,script, css등)가 로드된 후에 발생하는 이벤트
//window.addEventListener()함수로 DOM로드 기능을 사용(window.onload보다 속도가 빠름)
//window : 현재 스크립트가 작동 중인 창 = DOM문서를 담은 창
window.addEventListener('load',function (){
 // console.log("All resources finished loading!");
  //load 이벤트는 리소스와 그것에 의존하는 리소스들의 로딩이 완료되면 실행됩니다.
 

// Fetch the items from the JSON file
// JSON 파일에서 항목 가져오기
 function loadItems() {
  return fetch('/src/data/data.json') //fetch를 통해 성공적으로 받아오면 response를 얻고 
    .then(response => response.json())//성공적으로 받아오면 response를 얻고 
    .then(json =>json.items);//전체 json을 return하지 않고 json에 있는 items만 받아오기 위해 json.items을 사용  
}

// Update the list with the given items
// 지정된 항목으로 목록 업데이트
function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
//  container.innerHTML = items.map(item => createBtn(item)).join('');
}

//section button list 목록 HTML 생성

function createBtn(item) {
  return `
  <button class="btn colorBtn" + "${item.title}" data-key=" ${item.title}" data-value=" ${item.title}">
  "${item.title}"
 </button>
    `;
}

// Create HTML list item from the given data item
// 지정된 데이터 항목에서 HTML 목록 항목 생성
function createHTMLString(item) {
  return `
    <li class="item">
        <img src="${item.image}" alt="${item.title}" class="item__thumbnail" />
        <div class ="barDiv"></div>
        <button> ${item.year} </button>
        <br>
        <span class="item__description">${item.content}</span>
    </li>
    `;
}

// 

function onButtonClick(event, items) {
  const dataset = event.target.dataset;//dataset은 전용 속성: 읽기/쓰기 액세스 제공 
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return; //만약 key가 null이거나 value가 null이면 끝내라
  }

  displayItems(items.filter(item => item[key] === value));
}


function setEventListeners(items) {
  const logo = document.querySelector('.btnHistory');
  const buttons = document.querySelector('.buttons');
  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', event => onButtonClick(event, items));
}


// main   : item을 동적으로 받아오기
loadItems()
  .then(items => {
   displayItems(items);
   setEventListeners(items);
  })
  .catch(console.log);


  // var cat = '{"name": "나비", "age": 2, "weight": 2.4}';
  // var items = '{"title": "2022", "year" :"2022", "content": "MONT REUX JAZZ FESTIVAL WHERE LEGENDS ARE BORN ","image": "../Assets/images/historyimg/2022 LARGE-1800x0-c-default.jpg"}';

  // var jsonData = JSON.parse(cat); // js 객체를 문자열로 변환
  // document.getElementById("json").innerHTML = jsonData.image + "의 나이는 " + jsonData.content + "살 입니다.";

})//close
